
document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Current year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Reveal elements when they enter the viewport
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 90}ms`;
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // Cursor-following glow on desktop
  const cursorGlow = document.querySelector(".cursor-glow");
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (cursorGlow && finePointer && !reducedMotion) {
    let pointerX = -500;
    let pointerY = -500;
    let glowX = -500;
    let glowY = -500;

    window.addEventListener("pointermove", (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    });

    function animateGlow() {
      glowX += (pointerX - glowX) * 0.09;
      glowY += (pointerY - glowY) * 0.09;

      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  // Copy name button
  const copyButton = document.getElementById("copy-name");
  const copyFeedback = document.getElementById("copy-feedback");

  if (copyButton && copyFeedback) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("Sina Mehranfard");

        copyFeedback.textContent = "Name copied to clipboard.";
        copyButton.querySelector("span").textContent = "✓";
      } catch (error) {
        copyFeedback.textContent =
          "Copy unavailable here. Select and copy: Sina Mehranfard";

        console.error("Clipboard copy failed:", error);
      }

      window.setTimeout(() => {
        copyFeedback.textContent = "";
        copyButton.querySelector("span").textContent = "⧉";
      }, 3000);
    });
  }

  // Smooth navigation for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      }
    });
  });
});

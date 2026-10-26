document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // =========================
  // 1. Update footer year
  // =========================

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================
  // 2. Reveal animations
  // =========================

  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  // =========================
  // 3. Translations
  // =========================

  const translations = {
    en: {
      ".availability":
        "COMPUTER ENGINEERING STUDENT",

      ".hero-copy .eyebrow":
        "HELLO, I'M",

      ".hero-description p":
        "An aspiring web developer learning by building. I turn ideas into clean, interactive digital experiences — one project at a time.",

      ".hero-actions .button-light":
        'Explore my work <span>↘</span>',

      ".nav-links a[href='#work']":
        "Work",

      ".nav-links a[href='#about']":
        "About",

      ".nav-links a[href='#skills']":
        "Skills",

      ".nav-contact":
        "Let's talk <span>↗</span>",

      ".core-small":
        "DESIGN",

      ".core-label":
        "DEVELOP",

      ".orbit-label-one":
        "CREATIVE MINDSET",

      ".orbit-label-two":
        "EST. 2026",

      ".scroll-cue":
        "SCROLL TO EXPLORE ↓",

      ".work .section-heading .eyebrow":
        "01 / SELECTED WORK",

      ".work .section-heading h2":
        'Made with <span>curiosity.</span>',

      ".work .section-heading .heading-note":
        "Small steps. Real projects. Always learning.",

      ".project-card:nth-of-type(1) .project-main .eyebrow":
        "PERSONAL PROJECT / 001",

      ".project-card:nth-of-type(1) .project-description":
        "A restaurant website built to explore visual design, responsive layouts and interactive web experiences.",

      ".project-card:nth-of-type(2) .project-main .eyebrow":
        "PERSONAL PROJECT / 002",

      ".project-card:nth-of-type(2) .project-description":
        "A digital cafe menu featuring drink categories, product photography and interactive browsing, built as a responsive web project.",

      ".project-links a":
        'Live website <span>↗</span>',

      ".coming-soon .eyebrow":
        "NEXT CHAPTER",

      ".coming-soon h3":
        "More projects in progress.",

      ".coming-soon div > p:not(.eyebrow)":
        "I'm learning, experimenting and building what's next.",

      ".about .section-heading .eyebrow":
        "02 / A LITTLE ABOUT ME",

      ".about .section-heading h2":
        'Early in the journey.<br><span>Serious about the craft.</span>',

      ".about-marker p":
        "Build. Break.<br>Understand.<br>Build better.",

      ".about-lead":
        "I'm Sina, a Computer Engineering student with a growing interest in web development.",

      ".about-copy p:nth-of-type(2)":
        "I build modern, responsive web experiences that combine thoughtful design with clean, functional code. My approach focuses on creating intuitive interfaces, seamless interactions, and practical solutions tailored to real-world needs.",

      ".about-copy p:nth-of-type(3)":
        "With a strong focus on frontend development and WordPress customization, I bring ideas to life through carefully crafted websites that balance performance, usability, and visual appeal.",

      ".about-copy .text-link":
        'What I know <span>↓</span>',

      ".skills .section-heading .eyebrow":
        "03 / MY TOOLKIT",

      ".skills .section-heading h2":
        'Technical Skills & <span>Development.</span>',

      ".skills .heading-note":
        "The tools I'm using<br>to build my foundation.",

      ".skill-card:nth-of-type(1) p":
        "Structuring web pages with semantic markup and clear content.",

      ".skill-card:nth-of-type(2) p":
        "Styling interfaces with layouts, typography, transitions and effects.",

      ".skill-card:nth-of-type(3) p":
        "Programming fundamentals and adding interaction to websites.",

      ".skill-card:nth-of-type(1) .skill-level":
        "FOUNDATIONAL KNOWLEDGE",

      ".skill-card:nth-of-type(2) .skill-level":
        "FOUNDATIONAL KNOWLEDGE",

      ".skill-card:nth-of-type(3) .skill-level":
        "CURRENTLY DEVELOPING",

      ".wordpress-card h3":
        "WordPress Development",

      ".wordpress-card > p":
        "Building and customizing websites with WordPress, Elementor, themes, and plugins to create functional and user-friendly web experiences.",

      ".wordpress-card .project-tags span:nth-child(3)":
        "Theme Customization",

      ".wordpress-card .project-tags span:nth-child(4)":
        "Plugin Integration",

      ".contact > .eyebrow":
        "04 / WHAT'S NEXT?",

      ".contact-title":
        'Every great idea<br>starts with a <span>line of code.</span>',

      ".contact-copy":
        "I'm open to learning opportunities, collaborations and connecting with people who build cool things.",

      ".contact-actions a.button-light":
        'Email Me <span>↗</span>',

      "#copy-name":
        'Copy my name <span>⧉</span>',

        "#call-me":
  'Call Me <span>☎</span>',

      ".footer > p":
        "Designed with curiosity. Built one step at a time.",

      ".back-top":
        "BACK TO TOP ↑"
    },

    fa: {
      ".availability":
        "دانشجوی مهندسی کامپیوتر",

      ".hero-copy .eyebrow":
        "سلام، من",

      ".hero-description p":
      "من در زمینه طراحی و توسعه وب فعالیت می‌کنم و با ترکیب طراحی مدرن، کدنویسی اصولی و توجه به جزئیات، وب‌سایت‌هایی جذاب، کاربردی و متناسب با نیاز کاربران می‌سازم. تمرکز من بر خلق تجربه‌هایی است که در کنار ظاهر حرفه‌ای، عملکردی روان و ساختاری دقیق داشته باشند.",

      ".hero-actions .button-light":
        'دیدن پروژه‌ها <span>↙</span>',

      ".nav-links a[href='#work']":
        "پروژه‌ها",

      ".nav-links a[href='#about']":
        "درباره من",

      ".nav-links a[href='#skills']":
        "مهارت‌ها",

      ".nav-contact":
        'در ارتباط باشیم <span>↗</span>',

      ".core-small":
        "طراحی",

      ".core-label":
        "توسعه",

      ".orbit-label-one":
        "ذهنیت خلاق",

      ".orbit-label-two":
        "شروع در ۲۰۲۶",

      ".scroll-cue":
        "برای دیدن ادامه اسکرول کنید ↓",

      ".work .section-heading .eyebrow":
        "۰۱ / پروژه‌های منتخب",

      ".work .section-heading h2":
        'ساخته‌شده با <span>کنجکاوی.</span>',

      ".work .section-heading .heading-note":
        "قدم‌های کوچک؛ پروژه‌های واقعی؛ همیشه در حال یادگیری.",

      ".project-card:nth-of-type(1) .project-main .eyebrow":
        "پروژه شخصی / ۰۰۱",

      ".project-card:nth-of-type(1) .project-description":
        "یک وب‌سایت رستوران برای تمرین طراحی بصری، چیدمان واکنش‌گرا و تجربه‌های تعاملی وب.",

      ".project-card:nth-of-type(2) .project-main .eyebrow":
        "پروژه شخصی / ۰۰۲",

      ".project-card:nth-of-type(2) .project-description":
        "یک منوی دیجیتال کافه با دسته‌بندی نوشیدنی‌ها، تصاویر محصولات و امکان گشت‌وگذار تعاملی که برای نمایش در دستگاه‌های مختلف طراحی شده است.",

      ".project-links a":
        'مشاهده وب‌سایت <span>↗</span>',

      ".coming-soon .eyebrow":
        "فصل بعدی",

      ".coming-soon h3":
        "پروژه‌های بیشتری در راه‌اند.",

      ".coming-soon div > p:not(.eyebrow)":
        "در حال گسترش ایده، آزمایش و ساختن پروژه‌های بعدی هستم.",

      ".about .section-heading .eyebrow":
        "۰۲ / کمی درباره من",

      ".about .section-heading h2":
        'طراحی دقیق. <br> توسعه اصولی. <br><span> .تحربه ای متمایز</span>',

      ".about-marker p":
        "بساز.<br>اشتباه کن.<br>درک کن.<br>بهتر بساز.",

      ".about-lead":
        "من سینا هستم؛ دانشجوی مهندسی کامپیوتر که هر روز بیشتر به توسعه وب علاقه‌مند می‌شود.",

      ".about-copy p:nth-of-type(2)":
      "من وب‌سایت‌های مدرن و واکنش‌گرا می‌سازم که در آن‌ها طراحی زیبا با کدنویسی تمیز و اصولی ترکیب می‌شود. هدفم این است که وب‌سایت‌ها علاوه بر ظاهر جذاب، کاربری ساده‌ای داشته باشند و تجربه‌ای روان و لذت‌بخش برای کاربران ایجاد کنند.",

      ".about-copy p:nth-of-type(3)":
      "تمرکز من روی توسعه فرانت‌اند و شخصی‌سازی وردپرس است؛ جایی که ایده‌ها را به وب‌سایت‌هایی کاربردی و جذاب تبدیل می‌کنم که هم سریع و خوش‌ساخت باشند و هم استفاده از آن‌ها برای کاربران راحت باشد.",

      ".about-copy .text-link":
        'مهارت‌های من <span>↓</span>',

      ".skills .section-heading .eyebrow":
        "۰۳ / ابزارهای من",

      ".skills .section-heading h2":
        'مهارت‌های فنی و <span>توسعه.</span>',

      ".skills .heading-note":
        "ابزارهایی که برای ساختن پایه‌ای محکم<br>از آن‌ها استفاده می‌کنم.",

      ".skill-card:nth-of-type(1) p":
        "ساختاردهی صفحات وب با HTML معنایی و محتوای منظم.",

      ".skill-card:nth-of-type(2) p":
        "طراحی ظاهر رابط‌ها با چیدمان، تایپوگرافی، انتقال‌ها و جلوه‌های بصری.",

      ".skill-card:nth-of-type(3) p":
        " مبانی برنامه‌نویسی و افزودن تعامل به وب‌سایت‌ها.",

      ".skill-card:nth-of-type(1) .skill-level":
        "تسلط بر ساختار صفحات وب",

      ".skill-card:nth-of-type(2) .skill-level":
        "طراحی و استایل‌دهی رابط کاربری",

      ".skill-card:nth-of-type(3) .skill-level":
        "برنامه‌نویسی تعاملی وب",

      ".wordpress-card h3":
        "توسعه با WordPress",

      ".wordpress-card > p":
        "ساخت و شخصی‌سازی وب‌سایت با WordPress، Elementor، قالب‌ها و افزونه‌ها برای ایجاد تجربه‌هایی کاربردی و ساده برای کاربران.",

      ".wordpress-card .project-tags span:nth-child(3)":
        "شخصی‌سازی قالب",

      ".wordpress-card .project-tags span:nth-child(4)":
        "یکپارچه‌سازی افزونه‌ها",

      ".contact > .eyebrow":
        "۰۴ / قدم بعدی چیست؟",

      ".contact-title":
        'هر ایده‌ی بزرگی<br>با یک <span>خط کد</span> شروع می‌شود.',

      ".contact-copy":
        "به فرصت‌های یادگیری، همکاری و آشنایی با افرادی که ایده‌های جذاب می‌سازند علاقه‌مندم.",

      ".contact-actions a.button-light":
        ' در ایمیل با من در ارتباط باشید<span>↗</span>',

      "#copy-name":
        'نام من <span>⧉</span>',

        "#call-me":
  'باهام تماس بگیر <span>☎</span>',

     

      ".footer > p":
        "با کنجکاوی طراحی شده؛ قدم‌به‌قدم ساخته شده است.",

      ".back-top":
        "بازگشت به بالا ↑"
      
    }
  };

  const visualTranslations = {
    en: {
      ".cafe-caption":
        "A LITTLE MOMENT OF COMFORT",

      ".cafe-visual .visual-title > span:first-child":
        "YOUR NEXT FAVORITE DRINK."
    },

    fa: {
      ".cafe-caption":
        "لحظه‌ای کوچک از آرامش",

      ".cafe-visual .visual-title > span:first-child":
        "نوشیدنی محبوب بعدی تو."
    }
  };

  // 4. Language switch


  const languageSwitch = document.querySelector("#languageSwitch");

  function setLanguageButton(lang) {
    if (!languageSwitch) return;

    const options = [
      ...languageSwitch.querySelectorAll(".language-option")
    ];

    const indicator = languageSwitch.querySelector(".language-indicator");

    const selected = options.find((option) => {
      return option.dataset.lang === lang;
    });

    if (!selected) return;

    options.forEach((option) => {
      const active = option === selected;

      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });

    // Keep the existing indicator positioning approach.
    if (indicator) {
      const offset = selected.offsetLeft - indicator.offsetLeft;
      indicator.style.transform = `translateX(${offset}px)`;
    }

    languageSwitch.dataset.activeLang = lang;
  }

  function applyLanguage(lang) {
    const activeLanguage = translations[lang] ? lang : "en";
    const dictionary = translations[activeLanguage];

    Object.entries(dictionary).forEach(([selector, content]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.innerHTML = content;
      });
    });

    const visualDictionary = visualTranslations[activeLanguage];

    Object.entries(visualDictionary).forEach(([selector, content]) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.textContent = content;
      });
    });

    document.documentElement.lang = activeLanguage;
    document.documentElement.dir =
      activeLanguage === "fa" ? "rtl" : "ltr";

    document.body.classList.toggle(
      "lang-fa",
      activeLanguage === "fa"
    );

    setLanguageButton(activeLanguage);

    try {
      localStorage.setItem("portfolio-language", activeLanguage);
    } catch (error) {
      // The page still works if browser storage is unavailable.
    }
  }

  if (languageSwitch) {
    languageSwitch.addEventListener("click", () => {
      const currentLanguage =
        languageSwitch.dataset.activeLang || "en";

      applyLanguage(currentLanguage === "en" ? "fa" : "en");
    });

    let savedLanguage = "en";

    try {
      const storedLanguage = localStorage.getItem("portfolio-language");

      if (storedLanguage === "fa" || storedLanguage === "en") {
        savedLanguage = storedLanguage;
      }
    } catch (error) {
      // Use English if browser storage is unavailable.
    }

    applyLanguage(savedLanguage);
  }

  // =========================
  // 5. Cursor glow
  // =========================

  const cursorGlow = document.querySelector(".cursor-glow");

  if (
    cursorGlow &&
    window.matchMedia("(pointer: fine)").matches &&
    !reducedMotion
  ) {
    window.addEventListener(
      "pointermove",
      (event) => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
      },
      { passive: true }
    );
  }


  // =========================
  // 6. Copy name and call me
  // =========================

  const copyNameButton = document.querySelector("#copy-name");
  const callMeButton = document.querySelector("#call-me");
  const copyFeedback = document.querySelector("#copy-feedback");

  const phoneNumber = "+989397364147";

  function showFeedback(message) {
    if (!copyFeedback) return;

    copyFeedback.textContent = message;
  }

  if (copyNameButton) {
    copyNameButton.addEventListener("click", async () => {
      const isPersian = document.documentElement.lang === "fa";

      try {
        await navigator.clipboard.writeText("Sina Mehranfard");

        showFeedback(
          isPersian ? "نام با موفقیت کپی شد." : "Name copied successfully."
        );
      } catch (error) {
        showFeedback(
          isPersian
            ? "کپی خودکار نام انجام نشد."
            : "Could not copy the name automatically."
        );
      }
    });
  }

  if (callMeButton) {
    callMeButton.addEventListener("click", async () => {
      const isPersian = document.documentElement.lang === "fa";

      // On touch devices, open the phone dialer.
      if (window.matchMedia("(pointer: coarse)").matches) {
        window.location.href = "tel:" + phoneNumber;
        return;
      }

      // On desktop, copy the phone number.
      try {
        await navigator.clipboard.writeText(phoneNumber);

        showFeedback(
          isPersian
            ? "شماره تلفن کپی شد؛ می‌تونی باهاش تماس بگیری."
            : "Phone number copied! You can now call me."
        );
      } catch (error) {
        showFeedback(
          isPersian
            ? "کپی خودکار انجام نشد. شماره: " + phoneNumber
            : "Could not copy automatically. My number: " + phoneNumber
        );
      }
    });
  }


  // =========================
  // 7. Smooth scrolling
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  });
});
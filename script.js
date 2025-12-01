document.addEventListener('DOMContentLoaded', function () {
    // --- منطق منوی موبایل ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // --- منطق تغییر تم (روشن/تاریک) ---
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // فانکشن برای اعمال تم
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        } else {
            document.body.classList.remove('light-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    };

    // در زمان بارگذاری صفحه، تم ذخیره شده را چک می‌کند
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        // اگر تمی ذخیره نشده بود، بر اساس تنظیمات سیستم عمل می‌کند
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(currentTheme);

    // با کلیک روی دکمه، تم را تغییر داده و انتخاب را ذخیره می‌کند
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (themeIcon) {
                themeIcon.classList.add('rotate'); // اضافه کردن کلاس برای انیمیشن
            }
            let newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);

            // حذف کلاس انیمیشن بعد از اتمام آن
            setTimeout(() => {
                if (themeIcon) {
                    themeIcon.classList.remove('rotate');
                }
            }, 400); // اطمینان از اینکه کلاس بعد از انیمیشن حذف شود
        });
    }

    // --- منطق تغییر زبان (i18n) ---
    const langToggle = document.querySelector('.lang-toggle');
    const langText = langToggle ? langToggle.querySelector('.lang-text') : null;

    // تابع کمکی برای دسترسی به مقادیر تو در تو در آبجکت ترجمه
    const getNestedTranslation = (obj, path) => {
        return path.split('.').reduce((prev, curr) => {
            return prev ? prev[curr] : null;
        }, obj);
    };

    const applyLanguage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        // تنظیم جهت و فونت
        document.documentElement.lang = lang;
        document.documentElement.dir = t.dir;
        document.body.style.fontFamily = t.font;

        // به‌روزرسانی متن‌ها (textContent)
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = getNestedTranslation(t, key);
            if (text) {
                el.textContent = text;
            }
        });

        // به‌روزرسانی ویژگی‌ها (Attributes)
        const attrElements = document.querySelectorAll('[data-i18n-alt], [data-i18n-aria-label], [data-i18n-title]');
        attrElements.forEach(el => {
            if (el.hasAttribute('data-i18n-alt')) {
                const key = el.getAttribute('data-i18n-alt');
                const text = getNestedTranslation(t, key);
                if (text) el.alt = text;
            }
            if (el.hasAttribute('data-i18n-aria-label')) {
                const key = el.getAttribute('data-i18n-aria-label');
                const text = getNestedTranslation(t, key);
                if (text) el.setAttribute('aria-label', text);
            }
            if (el.hasAttribute('data-i18n-title')) {
                const key = el.getAttribute('data-i18n-title');
                const text = getNestedTranslation(t, key);
                if (text) el.title = text;
            }
        });

        // به‌روزرسانی دکمه تغییر زبان
        if (langText) {
            langText.textContent = lang === 'fa' ? 'EN' : 'FA';
        }
    };

    let currentLang = localStorage.getItem('lang') || 'fa';
    applyLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            localStorage.setItem('lang', currentLang);
            applyLanguage(currentLang);
        });
    }
});

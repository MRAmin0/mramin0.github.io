document.addEventListener('DOMContentLoaded', function () {
    // --- منطق منوی موبایل ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

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

    // --- منطق تغییر تم (روشن/تاریک) ---
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // فانکشن برای اعمال تم
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
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
    themeToggle.addEventListener('click', () => {
        themeIcon.classList.add('rotate'); // اضافه کردن کلاس برای انیمیشن
        let newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        
        // حذف کلاس انیمیشن بعد از اتمام آن
        setTimeout(() => {
            themeIcon.classList.remove('rotate');
        }, 400);
    });
});


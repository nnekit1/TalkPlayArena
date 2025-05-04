function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');

    body.classList.toggle('dark');
    body.classList.toggle('light');

    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = "☀️ Светлая тема";
    } else {
        themeToggle.innerHTML = "🌙 Тёмная тема";
    }
}

function revealElements() {
    const hiddenElements = document.querySelectorAll('.title, .social-buttons, .info-section');
    hiddenElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 50) {
            el.style.opacity = 1; // Элементы становятся видимыми
        } else {
            el.style.opacity = 0; // Элементы скрываются
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    revealElements(); // Показываем элементы при загрузке страницы
});

document.addEventListener('scroll', revealElements);

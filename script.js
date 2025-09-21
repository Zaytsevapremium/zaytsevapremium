// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Данные подменю
const submenuData = {
    business: [
        { text: 'Канал: Бизнес 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Бизнес 2', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    media: [
        { text: 'Канал: Медиа 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Медиа 2', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Медиа 3', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    beauty: [
        { text: 'Канал: Красота 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    techniques: [
        { text: 'Канал: Техники 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Техники 2', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    podcasts: [
        { text: 'Канал: Подкасты 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    sport: [
        { text: 'Канал: Спорт 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Спорт 2', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    discussions: [
        { text: 'Канал: Обсуждения 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Обсуждения 1', href: 'https://t.me/+cijuiNgQiXg3MWM6' },
        { text: 'Канал: Обсуждения 2', href: 'https://t.me/+cijuiNgQiXg3MWM6' }
    ],
    support: [
        { text: 'Канал: Служба поддержки', href: 'https://t.me/support' }
    ]
};

// Обработчик для кнопок меню (открытие модального окна)
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const submenuId = item.getAttribute('data-submenu');
        const menuText = item.querySelector('.menu-text').textContent;

        // Установка заголовка модального окна
        modalTitle.textContent = menuText;

        // Очистка и заполнение содержимого модального окна
        modalBody.innerHTML = '';
        submenuData[submenuId].forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            a.target = '_blank';
            modalBody.appendChild(a);
        });

        // Показ модального окна
        modal.classList.add('active');
    });
});

// Закрытие модального окна
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Закрытие модального окна при клике вне контента
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
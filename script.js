// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

// Данные подменю
const submenuData = {
    business: [
        { text: 'Введение. Мой опыт.', href: 'https://t.me/c/2343438456/10' },
        { text: 'Команда', href: 'https://t.me/c/2343438456/11' },
        { text: 'Клиенты', href: 'https://t.me/c/2343438456/12' },
        { text: 'Маркетинг', href: 'https://t.me/c/2343438456/13' },
        { text: 'Насмотренность', href: 'https://t.me/c/2343438456/19' }
    ],
    media: [        
        { text: '4 урока: контент, прогрев, продукт ', href: 'https://t.me/c/2343438456/4' }
    ],
    beauty: [
        { text: 'Косметика на каждый день', href: 'https://t.me/c/2343438456/26' },
        { text: 'Могу/хочу', href: 'https://t.me/c/2343438456/27' },
        { text: 'Макияж на каждый день', href: 'https://t.me/c/2343438456/20' }
    ],
    techniques: [
        { text: '16 ассоциаций', href: 'https://t.me/c/2343438456/28' },
        { text: 'Глобальный саморазбор', href: 'https://t.me/c/2343438456/35' },
        { text: 'Ежедневный саморазбор', href: 'https://t.me/c/2343438456/34' }
    ],
    podcasts: [
        
    ],
    sport: [
        { text: 'Успех в бизнесе', href: 'https://t.me/c/2343438456/39' }
    ],
    discussions: [
        { text: 'Переход в обсуждения канала', href: 'https://t.me/+80PEsl1e7y03ZTgy' }        
    ],
    support: [
        { text: 'Служба поддержки', href: 'https://t.me/zaytsevapremiumhelp' }
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



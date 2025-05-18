document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElem = document.getElementById('cartCount');

document.querySelector('.buy-btn').addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    });

document.getElementById('productCard').addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn')) return;

    const modalLabel = document.getElementById('modalLabel');
    const modalContent = document.getElementById('modalContent');
    modalLabel.textContent = this.querySelector('.card-title').textContent;
    modalContent.textContent = this.querySelector('.card-text').textContent;

    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
    });

document.getElementById('preorderBtn').addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    bootstrap.Modal.getInstance(document.getElementById('infoModal')).hide();
    });
});
// Для хранения количества в корзине
        let cartCount = 0;
        const cartCountElem = document.getElementById('cartCount');

        // Кнопка купить - добавляем товар в корзину
        document.querySelector('.buy-btn').addEventListener('click', () => {
            cartCount++;
            cartCountElem.textContent = cartCount;
        });

        // Кнопка предзаказ в модальном окне добавляет товар в корзину и закрывает окно
        document.getElementById('preorderBtn').addEventListener('click', () => {
            cartCount++;
            cartCountElem.textContent = cartCount;
            bootstrap.Modal.getInstance(document.getElementById('infoModal')).hide();
        });

        document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // предотвращаем отправку формы
        
        const feedbackInput = this.querySelector('input[type="text"]');
        const feedbackAlert = document.getElementById('feedbackAlert');
        
        const feedbackText = feedbackInput.value.trim();
        if (feedbackText === '') {
            alert('Пожалуйста, введите отзыв перед отправкой.');
            return;
    }
        // Здесь можешь вставить свой AJAX-запрос, если нужен. Для демо — просто симулируем отправку.
        // Очистим поле ввода
        feedbackInput.value = '';

        // Показываем плашку с сообщением
        feedbackAlert.style.display = 'block';

        // Автоматически скрываем плашку через 3 секунды
        setTimeout(() => {
            feedbackAlert.style.display = 'none';
        }, 3000);

        // Показываем модальное окно с успешной отправкой
        const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
        feedbackModal.show();
    });
document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartCountElem = document.getElementById('cartCount');
  let preorderCount = 0; // Счётчик, сколько раз нажали на "Предзаказ" на карточке

  // Счётчик покупок и логика подтверждения повторного заказа
  document.querySelector('.buy-btn').addEventListener('click', () => {
    if (preorderCount > 0) {
      // Показываем подтверждающее окно
      if (confirm('Вы уверены, что хотите ещё раз взять предзаказ?')) {
        preorderCount++;
        cartCount++;
        cartCountElem.textContent = cartCount;
      } 
      // Если пользователь нажал "Отмена" — ничего не делаем
    } else {
      preorderCount++;
      cartCount++;
      cartCountElem.textContent = cartCount;
    }
  });

  // При клике на карточку (не на кнопку) — открываем модалку с описанием
  document.getElementById('productCard').addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn')) return;

    const modalLabel = document.getElementById('modalLabel');
    const modalContent = document.getElementById('modalContent');
    modalLabel.textContent = this.querySelector('.card-title').textContent;
    modalContent.textContent = this.querySelector('.card-text').textContent;

    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
  });

  // кнопка "Предзаказ" в модальном — просто увеличиваем корзину
  document.getElementById('preorderBtn').addEventListener('click', () => {
    cartCount++;
    cartCountElem.textContent = cartCount;
    bootstrap.Modal.getInstance(document.getElementById('infoModal')).hide();
  });
});

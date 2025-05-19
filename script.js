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
});

document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  let preorderCount = 0; // счетчик "Предзаказов"
  const cartCountElem = document.getElementById('cartCount');

  // Обработчик для кнопки "Предзаказ"
  const preorderBtn = document.querySelector('.buy-btn');
  preorderBtn.addEventListener('click', () => {
    if (preorderCount > 0) {
      if (confirm('Вы уверены, что хотите ещё раз взять предзаказ?')) {
        preorderCount++;
        cartCount++;
        cartCountElem.textContent = cartCount;
      }
    } else {
      preorderCount++;
      cartCount++;
      cartCountElem.textContent = cartCount;
    }
  });

  // Обработчик для кнопки "Купить"
  const buyBtns = document.querySelectorAll('.btn-coral');
  buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartCountElem.textContent = cartCount;
    });
  });
});


// Данные по категориям и карточкам
const categoriesData = {
  "Экшен": [
    {
      imgSrc: "https://c.dns-shop.ru/thumb/st4/fit/320/250/d285a459acbef56adcf5b52ce097fab5/56deb9d2b76d4423e652e004e22d3580dc952fa5a91f93625dde27c92ddeb7d3.jpg",
      alt: "Описание 1",
      description: "Assassin’s Creed Mirage\nОткройте мир Assassin's Creed Mirage и погрузитесь в увлекательные приключения в древнем Багдаде. Возьмите на себя роль Баси?ма, искусного воина и мастера паркура, чтобы раскрыть тайны и сразиться с врагами. Отличная графика, захватывающий сюжет и динамичный геймплей ждут вас. Закажите Assassin's Creed Mirage на площадке Plati.Market по выгодной цене и ощутите настоящую атмосферу восточного мира!"
    },
    // Можно добавить больше игр для этой категории
  ],
  "Спорт": [
    {
      imgSrc: "https://c.dns-shop.ru/thumb/st1/fit/320/250/a99a5fa8e28f8d0aac84b0895e2c126f/1ac364aceee97bd2e9820dcce0f676dd98b75103d523d9067221a9a69c307ff6.jpg",
      alt: "Описание 2",
      description: "Devil May Cry 5 — динамичный слэшер от Capcom, в котором вы управляете Неро, Данте и загадочным Ви. Сразитесь с армией демонов в эпичной истории..."
    },
    // Еще игры
  ],
  "Шутер": [
    {
      imgSrc: "https://c.dns-shop.ru/thumb/st1/fit/320/250/2e1f908aea7e92696ef979d2aad288c8/51769f3842490d9672eef5e96fc417290ebdf4a6627c32256a265246cbeb302e.jpg",
      alt: "Описание 3",
      description: "Atomic heart - История альтернативной реальности 1950-х годов..."
    }
    // Еще игры
  ],
  // Аналогично для других категорий
};

// Функция для отображения карточек выбранной категории
function showCategory(category) {
  const container = document.getElementById('cards');
  container.innerHTML = ''; // Очистить текущие карточки

  const items = categoriesData[category] || [];

  items.forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'image-item';

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.alt;
    img.className = 'img-fullscreen';
    // Можно добавить обработчик для модального окна при клике

    // Обертка для модального открытия
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#modalDynamic');

    cardDiv.appendChild(img);
    container.appendChild(cardDiv);
  });
}

// Обработчик кликов по кнопкам категорий
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    showCategory(category);
  });
});

// Изначально показываем первую категорию или какую-то по умолчанию
window.addEventListener('DOMContentLoaded', () => {
  const defaultCategory = Object.keys(categoriesData)[0];
  showCategory(defaultCategory);
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // отменяем стандартную отправку

    const formData = new FormData(form);

    fetch('/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 'success') {
        modal.show();          // показываем модальное окно Bootstrap
        form.reset();          // очищаем форму
      } else {
        alert('Ошибка: ' + data.message);
      }
    })
    .catch(() => alert('Ошибка сети'));
  });
});


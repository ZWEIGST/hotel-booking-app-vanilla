export const cardHtml = `
        <div
            class="card"
            id="card-{{ id }}"
          >
            <img class="card__img" src="{{ imgSrc }}" alt="интерьер номера" />
            <div class="card__content-overlay"></div>
            <div class="card__reserved-overlay hidden">
              <div class="card__reserved-text">
                <p>Номер зарезервирован</p>
                <p>Перейти к <a>оплате</a></p>
              </div>
            </div>
            <div class="card__guarantee-tag hidden">
              <div class="tag">
                <span class="tag__text">Гарантия лучшей цены!</span>
                  <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3018 0H0V30H21.3568C21.9628 30 22.5453 29.7604 22.9825 29.3313L35.2782 17.2634C36.214 16.3449 36.2438 14.8246 35.3447 13.8686L22.9939 0.736539C22.5513 0.26595 21.9403 0 21.3018 0ZM14.085 19.2C16.6779 19.2 18.7799 17.051 18.7799 14.4C18.7799 11.749 16.6779 9.6 14.085 9.6C11.492 9.6 9.38997 11.749 9.38997 14.4C9.38997 17.051 11.492 19.2 14.085 19.2Z"
                      fill="#FF7647"
                    />
                  </svg>
                </div>
            </div>
            <div class="card__text-content">
              <a href="/" class="card__title-link">
                <h3 class="card__title">{{ title }}</h3>
              </a>
              <p class="card__decription">
                {{ description }}
              </p>
              <div class="card__book-container">
                <div class="card__price-container">
                  <p>Цена за сутки</p>
                  <p class="card__price-line">
                    от<span class="card__price"> {{ price }}</span
                    ><span class="card__currency">₽</span>
                  </p>
                </div>
                <button class="button card__button">Забронировать</button>
              </div>
            </div>
          </div>
`;

export const roomsData = [
  {
    id: 1,
    imgSrc: 'img/Pic1.png',
    name: 'Представительский люкс',
    description: 'Эксклюзивный номер с панорамным видом на центр города Москвы',
    price: '7 900',
  },
  {
    id: 2,
    imgSrc: 'img/Pic2.png',
    name: 'Дуплекс',
    description: 'Просторный двухкомнатный номер с шикарным видом на парк',
    price: '5 700',
    hasGuaranteeTag: true,
  },
  {
    id: 3,
    imgSrc: 'img/Pic3.png',
    name: 'Бизнес-люкс',
    description: 'Трёхкомнатный номер с панорамным видом на Москва-реку',
    price: '4 900',
  },
];

export const cardsContainer = document.querySelector('.hotel-cards-container');

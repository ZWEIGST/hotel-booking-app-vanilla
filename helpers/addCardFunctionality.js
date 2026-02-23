export const addCardFunctionality = (data) => {
  const { id, hasGuaranteeTag } = data;

  const cardElement = document.getElementById(`card-${id}`);
  const reserveButtonElement = cardElement.querySelector('.card__button');
  const reserveOverlayElement = cardElement.querySelector(
    '.card__reserved-overlay',
  );
  const guaranteeTagElement = cardElement.querySelector('.card__guarantee-tag');

  let isReserved = false;

  const toggleReservedOverlayVisibilty = () => {
    isReserved = !isReserved;

    reserveOverlayElement.classList.toggle('hidden');
  };

  if (hasGuaranteeTag) {
    cardElement.addEventListener('mouseover', () => {
      if (!isReserved) {
        guaranteeTagElement.classList.remove('hidden');
      }
    });

    cardElement.addEventListener('mouseleave', () => {
      if (!isReserved) {
        guaranteeTagElement.classList.add('hidden');
      }
    });
  }

  reserveButtonElement.addEventListener('click', () => {
    cardElement.addEventListener(
      'mouseleave',
      () => {
        toggleReservedOverlayVisibilty();

        cardElement.addEventListener(
          'click',
          () => {
            toggleReservedOverlayVisibilty();
          },
          {
            once: true,
          },
        );
      },
      {
        once: true,
      },
    );
  });
};

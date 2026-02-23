import { roomsData } from './constants.js';
import { addCardFunctionality } from './helpers/addCardFunctionality.js';
import { renderCard } from './helpers/renderCard.js';

const renderCards = () => {
  roomsData.forEach(renderCard);
  roomsData.forEach(addCardFunctionality);
};

renderCards();

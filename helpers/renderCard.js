import { cardHtml, cardsContainer } from '../constants.js';
import { getPropPlaceholder } from './getPropPlaceholder.js';

export const renderCard = (data) => {
  cardsContainer.innerHTML += cardHtml
    .replace(getPropPlaceholder('imgSrc'), data.imgSrc)
    .replace(getPropPlaceholder('title'), data.name)
    .replace(getPropPlaceholder('description'), data.description)
    .replace(getPropPlaceholder('price'), data.price)
    .replace(getPropPlaceholder('id'), data.id);
};

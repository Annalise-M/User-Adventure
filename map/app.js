import quests from '../data/data.js';
import makeListItemLink from './make-list-item-link.js';

// need to import the quest data into a new file of data => data

// quests.forEach((quest) => {
//     const li = makeListItemLink(quest);

// //     URL.appendChild(li);

//* un note const ul and const user below
// const ul = document.getElementById('list');

// const user = JSON.parse(localStorage.getItem('USER'));

quests.forEach((quest) => {
    const li = makeListItemLink(quest);
    URL.appendChild(li);
});

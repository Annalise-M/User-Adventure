import quests from '../data/data.js';
// import { findById } from '../utils.js':
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);
const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const div = document.querySelector('div');

img.src = '../assets/quests/' + quest.image;
h3.textContent = quest.title;
div.textContent = quest.description;

const labels = document.querySelectorAll('label');

// const label1 = labels[0];
// const label2 = labels[1];
// const label3 = labels[2];

// label[0].append(quest.choices[0].description);
// label[1].append(quest.choices[1].description);
// label[2].append(quest.choices[2].description);

document.querySelector('body').append(JSON.stringify(quest));

// * Same function but as a FOR LOOP
for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;
} 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const choiceId = data.get('quest');
    const choices = quest.choices;

    const choice = findById(choices, choiceId);

    console.log(choice);

    const user = JSON.parse(localStorage.getItem('USER'));

    user.HP += user.hp + choice.hp;
    user.gold += user.gold + choice.gold;
    user.completed[quest.id] = true;
    //look into hp linking to data correctly

});



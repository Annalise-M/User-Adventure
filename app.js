import makeUser from './make-user.js';

const myForm = document.getElementById('user-form');

// here's my submit listener
myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(myForm);

    const user = makeUser(formData);
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
});
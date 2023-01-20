import './style.css';
import validator from 'validator';

const clickButton = document.getElementById("button");

clickButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicou!')
})


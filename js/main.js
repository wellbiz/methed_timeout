import createElement from './module/createElements.js';
import {debounce,throttle} from './module/delay.js'

const input = createElement('input', {
    type: 'text',
    name: 'input',
    id: 'input',
});

const p = createElement('p', {});

const body = document.querySelector('body');

body.append(input, p);
const showText = () => {
    setTimeout(() => {
        p.textContent = input.value;
    }, 300);
};

input.addEventListener(
    'input',
    throttle(
        debounce(() => {
            p.textContent = input.value;
        }, 300),
        50
    )
);



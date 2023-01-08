import bot from './assests/bot.svg';
import user from './assests/user.svg';
//logic for ai
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

//repeats every 300ms
function loader(element) {
element.textContext = ' ';

loadInterval = setInterval(() => {
element.textContent += '.';

if (element.textContent == '....') {
element.textContent = '';
}
}, 300 )
}

//make ai type letter by letter for user exp
function typeText(element, tex) {
let index = 0;

let interval =setInterval(() => {
if (index < text.length) {
element.innerHTML +=  text.chartAt(index);
index++;
}else{
clearInterval(interval);
}
}, 20)
}

//id for messsages
function generateUniqueId() {
const timestamp = Date.now();
const randomNumber = Math.random();
const hexadecimalString = randomNumber.toString(16);

return `i-${timestamp}-${hexadecimalString}`;

//ai container , user container
function chatStripe (isAi, value, uniqueId){
return (
`<diV class="wrapper ${isAi && 'ai'}">
<div class="chat">
<div className="profile">
<img 
src="${isAi ? bot : user }"
alt="${isAi ? 'bot' : 'user' }"
/>
</div>
<div class="message" id=${uniqueId}>${value}</div>
</div>
</div>
`
)
}

//trigger to get Ai response
const handleSubmit = async (e) => {
e.preventDefault();

const data = new FormData(form);

//user chatstripe
chatContainer.innerHTML +=chatStripe(false, data.get('prompt'));

form.reset();

//bot chatstripe
const uniqueId = generateUniqueId();
chatContainer.innerHTML +=chatStripe(true , " " , uniqueId);
//user able to scroll down while bot is responding

chatContainer.scrollTop = chatContainer.scrollHeight;

const messageDiv = document.getElementById(uniqueId);

loader(messageDiv);
}







{/*
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/}

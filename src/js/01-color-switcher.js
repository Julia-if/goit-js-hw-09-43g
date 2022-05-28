const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};
console.log(refs.body);

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId = null;

function onBtnStartClick() {
    timerId = setInterval(bodyChangerColor, 1000);
    refs.btnStart.disabled = true;
};

function bodyChangerColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
};

function onBtnStopClick() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
}
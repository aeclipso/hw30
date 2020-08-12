const btn = document.querySelector("#button");
const numField = document.querySelector("#digit");
const frame = window.frames.frame;

const addNumber = () => {
    let number = window.prompt('Введите число', '');
    number = parseInt(number);
    frame.document.querySelector("#mainframe").innerHTML = number;
    numField.innerHTML = parseInt(frame.document.querySelector("#mainframe").innerHTML) + 1;
}

window.onbeforeunload =  () => '';
btn.addEventListener('click', addNumber);
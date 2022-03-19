let myNewText = document.querySelector('.change-text');
function changeText(myNewText) {
   myNewText.style.color = 'green';
}

let myBtn = document.querySelector('.time-btn');
let myDemo = document.querySelector('.demo');

myBtn.addEventListener('click', () => {
    myDemo.innerHTML = Date();
    myBtn.innerHTML = "hide time";
});


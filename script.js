// let myNewText = document.querySelector('.change-text');
// function changeText(myNewText) {
//    myNewText.style.color = 'green';
// }

// let myBtn = document.querySelector('.time-btn');
// let myDemo = document.querySelector('.demo');

// myBtn.addEventListener('click', () => {
//     myDemo.innerHTML = Date();
//     myBtn.innerHTML = "hide time";
// });

// // let multiplyNumbers = (a, b) => a * b;

// // function multiplyNumbers(a, b) {
// //     return a * b;
// // }
// // document.querySelector('.sum').innerHTML = multiplyNumbers(20, 65);


// let hello;
// hello = () => "Hello world";
// document.querySelector('.greetings').innerHTML = hello();

// let myDisplay = document.querySelector('.hello');
// myDisplay.addEventListener('click', () => {
//     let myText = document.querySelector('.disappear');
//     myText.classList.add('active')
// }

// this function will check if the localstorage is available

// function storageAvailable(type) {
//     var storage;
//     try {
//         storage = window[type];
//         var x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch(e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

// if (storageAvailable('localStorage')) {
//     console.log('Yippee! We can use localStorage awesomeness');
//   }
//   else {
//     console.log('NO');
//   }

// or use this

// storageAvailable('sessionStorage')

// --------------- 

// localStorage.setItem('color', 'red');
// const grabMyColor = localStorage.getItem('color');
// console.log(grabMyColor);

// if(localStorage.getItem('color')== 'null') {
//     console.log('yes');
// }else {
//     console.log('no');
// }

function saveData() {
const myTextField = document.querySelector('.text-input').value;
    localStorage.setItem('input', JSON.stringify(myTextField));
};
const myButton = document.querySelector('.form-button');
myButton.addEventListener('click', () => {
    saveData();
})

function getValueFromLocalStorage() {
let myLocalValue = localStorage.getItem('input');
};
  
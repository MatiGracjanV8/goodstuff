let body = document.querySelector("body");
let chest = document.querySelector(".chestBox");
let firstStage = document.querySelector(".five");
let secondStage = document.querySelector(".six");
let thirdStage = document.querySelector(".seven");
let fourthStage = document.querySelector(".eight");
let actual_value = document.querySelector(".actualKg");

//audio
let audioError = document.getElementById('error');
let click_bass = document.getElementById('click_bass');
let click_calm = document.getElementById('click_calm');
let click_mid = document.getElementById('click_mid');
let click_reward = document.getElementById('click_reward');

window.addEventListener('load', function () {
    body.style.opacity = "1";
    checkState();
    showActualChest();
});

let counter = 0;
let power = 80;
let numberArrows = 10;
let divColor = "black";

function chestDay() {
    click_mid.play();
    counter = localStorage.getItem("chest");
    power = parseFloat(localStorage.getItem("chestValue")) || 0;
    counter++;
    if (counter > 3) {
        counter = 0;
        power += 2.5;
    }
    if(counter === 0){
        numberArrows = 30;
        divColor = "green";
        click_reward.play();
    }
    if(counter === 1){
        numberArrows = 10;
        divColor = "black";
    }
    if(counter === 2){
        numberArrows = 20;
        divColor = "black";
    }
    if(counter === 3){
        numberArrows = 30;
        divColor = "black";
    }
    console.log(numberArrows);
    upgradeLow();
    actualChest();
    counterChest();
    checkState();
    showActualChest();

}


function checkState() {
    counter = parseInt(localStorage.getItem("chest")) || 0;
    power = parseInt(localStorage.getItem("chestValue")) || 0;
    let stages = [firstStage, secondStage, thirdStage, fourthStage];

    for (let i = 0; i < stages.length; i++) {
        if (i === counter) {
            stages[i].classList.add("stage");
        } else {
            stages[i].classList.remove("stage");
        }
    }
}

function counterChest() {
    localStorage.setItem("chest", counter);
}

function actualChest() {
    localStorage.setItem("chestValue", power);
}

function showActualChest() {
    actual_value.innerHTML = (localStorage.getItem("chestValue").toString()) + '<span>KG</span>';
}


// function getRandomOpacity() {
//     return Math.random();
// }

// function getRandomPositionNearReference(refDiv, maxOffsetX, maxOffsetY) {
//     let refRect = refDiv.getBoundingClientRect();
//     let refX = refRect.left + window.scrollX;
//     let refY = refRect.top + window.scrollY;

//     let offsetX = Math.random() * maxOffsetX - maxOffsetX / 2;
//     let offsetY = Math.random() * maxOffsetY - maxOffsetY / 2;

//     let posX = refX + offsetX;
//     let posY = refY + offsetY;

//     return { x: posX + 'px', y: posY + 'px' };
// }

// let referenceDiv = document.querySelector('.spawner');

// function upgradeLow() {
//     for (let i = 0; i < 30; i++) {
//         let div = document.createElement('div');
//         div.style.opacity = getRandomOpacity();
//         div.style.position = 'absolute';

//         let position = getRandomPositionNearReference(referenceDiv, 2000, 300);
//         div.style.left = position.x;
//         div.style.top = position.y;

//         div.style.width = '100px';
//         div.style.height = '100px';
//         div.style.backgroundColor = 'black';
//         document.body.appendChild(div);
//     }
// }

function getRandomOpacity() {
    return Math.random() /2;
}

function getRandomPositionNearReference(refDiv, maxOffsetX, maxOffsetY) {
    let refRect = refDiv.getBoundingClientRect();
    let refX = refRect.left + window.scrollX;
    let refY = refRect.top + window.scrollY;

    let offsetX = Math.random() * maxOffsetX - maxOffsetX / 2;
    let offsetY = Math.random() * maxOffsetY - maxOffsetY / 2;

    let posX = refX + offsetX;
    let posY = refY + offsetY;

    return { x: posX + 'px', y: posY + 'px' };
}

let referenceDiv = document.querySelector('.spawner');

let divElements = [];

function upgradeLow() {
    for (let i = 0; i < numberArrows; i++) {
        let div = document.createElement('div');
        // div.style.opacity = getRandomOpacity();
        div.style.opacity = 0;
        div.style.position = 'absolute';
        div.classList.add("upgradeLow");

        let position = getRandomPositionNearReference(referenceDiv, 2000, 300);
        div.style.left = position.x;
        div.style.top = parseInt(position.y, 10) + 30 + 'px';
        div.style.borderBottom = "20px solid " + divColor;

        divElements.push(div);
        document.body.appendChild(div);
        div.style.transform = 'translateY(30px)';

        setTimeout(() => {
            div.style.opacity = getRandomOpacity();
            div.style.top = position.y;
            div.style.transition = 'opacity 1s, top 2s';
          }, 100);

          setTimeout(() => {
            div.style.opacity = 0;
            div.style.top = parseInt(position.y, 10) - 30 + 'px';
            div.style.transition = 'opacity 1s, top 2s';
          }, 1500);

        setTimeout(() => {
            document.body.removeChild(div);
            let index = divElements.indexOf(div);
            if (index !== -1) {
                divElements.splice(index, 1);
            }
        }, 2000);
    }
}



// window.localStorage.clear();




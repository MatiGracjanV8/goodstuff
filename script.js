let list = document.querySelector(".list_of_tasks");
let listSpecial = document.querySelector(".list_of_special");
let tasksP = document.querySelectorAll(".to_do_p");
let businessBox = document.querySelector(".business_box");
let personalBox = document.querySelector(".personal_box");
let TaskPInfo = document.getElementById("number_taskP");
let TaskBInfo = document.getElementById("number_taskB");
let menutask = document.querySelector(".contenerTask");
let taskvalue = document.querySelector(".textForTask");
let body = document.querySelector("body");
let circleProg = document.querySelector(".circle_progress");
let grass_boxNumber = listSpecial.querySelectorAll("li").length;
let grass_box = document.querySelectorAll(".contenerGrass");
let grass_button = document.querySelector(".specialGrass");

console.log(grass_boxNumber);

window.addEventListener('load', function(){
  updatePersonal();
  updateBusiness();
  circuralProgressPlus();
});

let isClicked = false;

function addTask(){
  if (isClicked) {
    menutask.setAttribute('style', 'display: none;');
  }else{
    menutask.setAttribute('style', 'display: flex;');
  }

  isClicked = !isClicked;
}

function addTaskPersonal(){
  let li = document.createElement("li");
  let div = document.createElement("div");
  let text = document.createElement("p");
  let delet = document.createElement("span");
  div.classList.add("task_completion");
  delet.classList.add("delet");
  li.classList.add("to_do_p");
  list.appendChild(li);
  li.appendChild(div);
  li.appendChild(text);
  text.innerHTML = '<p>'+taskvalue.value+'</p>';
  li.appendChild(delet);

  if (isClicked) {
    menutask.setAttribute('style', 'display: none;');
  }else{
    menutask.setAttribute('style', 'display: flex;');
  }

  isClicked = !isClicked;

  updatePersonal();
  circuralProgressPlus();
  saveData();
}

function addTaskBusiness(){
  let li = document.createElement("li");
  let div = document.createElement("div");
  let text = document.createElement("p");
  let delet = document.createElement("span");
  div.classList.add("task_completion");
  delet.classList.add("delet");
  li.classList.add("to_do_b");
  list.appendChild(li);
  li.appendChild(div);
  li.appendChild(text);
  text.innerHTML = '<p>'+taskvalue.value+'</p>';
  li.appendChild(delet);

  if (isClicked) {
    menutask.setAttribute('style', 'display: none;');
  }else{
    menutask.setAttribute('style', 'display: flex;');
  }

  isClicked = !isClicked;

  updateBusiness();
  circuralProgressPlus();
  saveData();
}

function addTaskSpecialGrass(){
  if(grass_boxNumber == 1){
    grass_button.disabled = true;
  }else{
  let li = document.createElement("li");
  let delet = document.createElement("span");
  let text = document.createElement("p");
  let image = document.createElement("img");
  image.src = 'grass.png';
  delet.classList.add("delet");
  li.classList.add("contenerGrass");
  listSpecial.appendChild(li);
  text.innerHTML = 'Mow Grass';
  li.appendChild(text);
  li.appendChild(image);
  li.appendChild(delet);
  }
  if (isClicked) {
    menutask.setAttribute('style', 'display: none;');
  }else{
    menutask.setAttribute('style', 'display: flex;');
  }

  isClicked = !isClicked;

  updatePersonal();
  circuralProgressPlus();
  saveDataSpecial();
  
}

list.addEventListener("click", function(e){
  if (e.target.classList.contains("task_done_p")) {
    e.target.classList.remove("task_done_p");
    updatePersonal();
    updateBusiness();
    circuralProgressMin();
    saveData();
  } else {
    e.target.classList.add("task_done_p");
    updatePersonal();
    updateBusiness();
    circuralProgressPlus();
    saveData();
  }
});



list.addEventListener("click", function(e){
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    updatePersonal();
    updateBusiness();
    circuralProgressMin();
    circuralProgressPlus();
    saveData();
  }
});

listSpecial.addEventListener("click", function(e){
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    updatePersonal();
    updateBusiness();
    circuralProgressMin();
    circuralProgressPlus();
    saveDataSpecial();
  }
});

let totalNumberOfMowedGrass = 0;

var score = localStorage.getItem("mow");

if (score !== null) {
  totalNumberOfMowedGrass = parseInt(score);
}

listSpecial.addEventListener("click", function(e){
  if (e.target.classList.contains("task_done_p")) {
    e.target.classList.remove("task_done_p");
    updatePersonal();
    updateBusiness();
    circuralProgressMin();
    saveDataSpecial();
  } else {
    e.target.classList.add("task_done_p");
    updatePersonal();
    updateBusiness();
    circuralProgressPlus();
    saveDataSpecial();
    totalNumberOfMowedGrass++;
    showMowingStats();
    mowingStats();
  }

});


function updatePersonal(){
    let done_tasks = document.querySelectorAll(".task_done_p").length;
    let total_tasks = document.querySelectorAll(".to_do_p, .task_done_p, .contenerGrass").length;
    let progress = (done_tasks / total_tasks)*100;
    let showprog = document.querySelector(".progress_barP");
    showprog.style.width = progress + '%';
    TaskPInfo.innerHTML = total_tasks + ' tasks';

    if(total_tasks === 0){
      personalBox.setAttribute('style', 'opacity: 40%');
      showprog.setAttribute('style', 'background: var(--fourth)');
    }else{
      personalBox.setAttribute('style', 'opacity: 100%');
    }
}

function updateBusiness(){
    let done_tasks = document.querySelectorAll(".task_done_b").length;
    let total_tasks = document.querySelectorAll(".to_do_b, .task_done_b").length;
    let progress = (done_tasks / total_tasks)*100;
    let showprog = document.querySelector(".progress_barB");
    showprog.style.width = progress + '%';
    TaskBInfo.innerHTML = total_tasks + ' tasks';

    if(total_tasks === 0){
      businessBox.setAttribute('style', 'opacity: 40%');
      showprog.setAttribute('style', 'background: var(--fourth)');
    }else{
      businessBox.setAttribute('style', 'opacity: 100%');
    }
}

let animate_progress = 0;

function circuralProgressPlus() {
  let done_tasks = document.querySelectorAll(".task_done_b, .task_done_p").length;
  let total_tasks = document.querySelectorAll("li").length;
  let progress = (done_tasks / total_tasks) * 100;
  let g = Math.abs(progress - animate_progress); 
  animate_progress = (animate_progress - g) + (progress - animate_progress);

  function animateP() {
    let animateC = setInterval(() => {
      animate_progress++;
      circleProg.style.background = `conic-gradient(
        #111 ${animate_progress * 3.6}deg,
        #fff ${animate_progress * 3.6}deg
      )`;
      if (animate_progress >= progress) {
        clearInterval(animateC);
      }
    }, 7);
  }

  animateP();
}

function circuralProgressMin() {
  let done_tasks = document.querySelectorAll(".task_done_b, .task_done_p").length;
  let total_tasks = document.querySelectorAll("li").length;
  let progress = (done_tasks / total_tasks) * 100;
  let g = Math.abs(progress - animate_progress); 
  animate_progress = (animate_progress + g) - (animate_progress - progress);

  function animateP() {
    let animateC = setInterval(() => {
      animate_progress--;
      circleProg.style.background = `conic-gradient(
        #111 ${animate_progress * 3.6}deg,
        #fff ${animate_progress * 3.6}deg
      )`;
      if (animate_progress <= progress) {
        clearInterval(animateC);
      }
    }, 7);
  }

  animateP();
}










function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function mowingStats(){
  localStorage.setItem("mow", totalNumberOfMowedGrass.toString());
}

function showMowingStats(){
  var score = localStorage.getItem("mow");
  var scoreTotal = parseInt(score);
  // console.log('You have mowned your lawn '+score+' times!');
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

function saveDataSpecial(){
  localStorage.setItem("data2", listSpecial.innerHTML);
}

function showDataSpecial(){
  listSpecial.innerHTML = localStorage.getItem("data2");
}

function extendPage(){
    body.setAttribute('style', 'transform: translateX(-67%);');
}

function pageBack(){
    body.setAttribute('style', 'transform: translateX(0%);');
}




document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, { passive: false });
});

document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}

showData();
showDataSpecial();
// window.localStorage.clear();

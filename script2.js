let list = document.querySelector(".list_of_tasks");
let tasksP = document.querySelectorAll(".to_do_p");
let businessBox = document.querySelector(".business_box");
let personalBox = document.querySelector(".personal_box");
let TaskPInfo = document.getElementById("number_taskP");
let TaskBInfo = document.getElementById("number_taskB");
let menutask = document.querySelector(".contenerTask");
let taskvalue = document.querySelector(".textForTask");
let body = document.querySelector("body");

window.addEventListener('load', function(){
  updatePersonal();
  updateBusiness();
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
  saveData();
}

list.addEventListener("click", function(e){
  if (e.target.classList.contains("task_done_p")) {
    e.target.classList.remove("task_done_p");
    updatePersonal();
    updateBusiness();
    saveData();
  } else {
    e.target.classList.add("task_done_p");
    updatePersonal();
    updateBusiness();
    saveData();
  }
});



list.addEventListener("click", function(e){
  if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    updatePersonal();
    updateBusiness();
    saveData();
  }
});

function updatePersonal(){
    let done_tasks = document.querySelectorAll(".task_done_p").length;
    let total_tasks = document.querySelectorAll(".to_do_p, .task_done_p").length;
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

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

function extendPage(){
    body.setAttribute('style', 'transform: translateX(-70%);');
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
console.log(numberTaskP);
// window.localStorage.clear();

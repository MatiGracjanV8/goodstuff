let list = document.querySelector(".list_of_tasks");
let tasksP = document.querySelectorAll(".to_do_p");
let businessBox = document.querySelector(".business_box");
let personalBox = document.querySelector(".personal_box");
let TaskPInfo = document.getElementById("number_taskP");
let TaskBInfo = document.getElementById("number_taskB");
let menutask = document.querySelector(".selectTask");
let taskvalue = document.querySelector(".textForTask");

window.addEventListener('load', function(){
  updatePersonal();
  updateBusiness();
});

let isClicked = false;

function addTask(){
  if (isClicked) {
    menutask.setAttribute('style', 'opacity: 0%');
  }else{
    menutask.setAttribute('style', 'opacity: 100%');
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

showData();
console.log(numberTaskP);
// window.localStorage.clear();

let list = document.querySelector(".list_of_tasks");
let tasksP = document.querySelectorAll(".to_do_p");
// let tasksB = document.querySelectorAll(".to_do_b");
// function updateBusiness(){
//     let done_tasks = document.querySelectorAll(".task_done_b").length;
//     let total_tasks = document.querySelectorAll(".to_do_b, .task_done_b").length;
//     let progress = (done_tasks / total_tasks)*100;
//     let showprog = document.querySelector(".progress_barB");
//     showprog.style.width = progress + '%';
// }


// tasksB.forEach(function(taskB) {
//   taskB.addEventListener('click', function() {
//     if (taskB.classList.contains("task_done_b")) {
//       taskB.classList.remove("task_done_b");
//       updateBusiness();
//     } else {
//       taskB.classList.add("task_done_b");
//       updateBusiness();
//     }
//   });
// });

window.addEventListener('load', function(){
    // updateBusiness();
    updatePersonal();
});

function addTask(){
    let li = document.createElement("li");
    let div = document.createElement("div");
    div.classList.add("task_completion");
    li.classList.add("to_do_p");
    list.appendChild(li);
    li.appendChild(div);

    li.addEventListener("click", function(e){
        if (e.target.classList.contains("task_done_p")) {
          e.target.classList.remove("task_done_p");
          updatePersonal();
          saveData();
        } else {
          e.target.classList.add("task_done_p");
          updatePersonal();
          saveData();
        }
      });
    
      updatePersonal();
      saveData();
}
function updatePersonal(){
    let done_tasks = document.querySelectorAll(".task_done_p").length;
    let total_tasks = document.querySelectorAll(".to_do_p, .task_done_p").length;
    let progress = (done_tasks / total_tasks)*100;
    let showprog = document.querySelector(".progress_barP");
    showprog.style.width = progress + '%';
}


// tasksP.forEach(function(taskP) {
//   taskP.addEventListener('click', function() {
//     if (taskP.classList.contains("task_done_p")) {
//       taskP.classList.remove("task_done_p");
//       updatePersonal();
//       saveData();
//     } else {
//       taskP.classList.add("task_done_p");
//       updatePersonal();
//       saveData();
//     }
//   });
// });


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem("data");
}
showData();

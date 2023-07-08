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
let grass_box = document.querySelectorAll(".contenerGrass");
let grass_button = document.querySelector(".specialGrass");
let alert_box = document.querySelector(".alertWhileAddingTask");
let leftSide = document.querySelector(".left_side");
let rightSide = document.querySelector(".right_side");

//audio
let audioError = document.getElementById('error');
let click_bass = document.getElementById('click_bass');
let click_calm = document.getElementById('click_calm');
let click_mid = document.getElementById('click_mid');
let click_reward = document.getElementById('click_reward');





window.addEventListener('load', function () {
    updatePersonal();
    updateBusiness();
    circuralProgressPlus();
    showPercentage();
    leftSide.setAttribute("style", "animation: startAnimateLeft .4s ease-out;");
    leftSide.style.animationFillMode = "forwards";
    rightSide.setAttribute("style", "animation: startAnimateRight .4s ease-out;");
    rightSide.style.animationFillMode = "forwards";
    body.style.opacity = "1";
});

let isClicked = false;

//------------------------------for buttons that open menu
function showAddMenu() {
    click_calm.play();
    if (isClicked) {
        menutask.setAttribute('style', 'display: none;');
    } else {
        menutask.setAttribute('style', 'display: flex;');
    }

    isClicked = !isClicked;
}

//---------------------------------------------------------------------------------ADDING TASKS
//--------------------------------for adding personal task
function addTaskPersonal() {
    if (taskvalue.value.length === 0) {
        alert_box.style.opacity = "1";
        alert_box.style.transform = "translateY(0px)";
        audioError.play();
        alert_box.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Write Something First!';

        setTimeout(function () {
            alert_box.style.opacity = "0";
            alert_box.style.transform = "translateY(-50px)";
        }, 1000);
    } else {
        click_mid.play();
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
        text.textContent = taskvalue.value;
        li.appendChild(delet);


        if (isClicked) {
            menutask.style.display = "none";
        } else {
            menutask.style.display = "flex";
        }

        isClicked = !isClicked;

        updatePersonal();
        circuralProgressPlus();
        saveData();
    }
}

//--------------------------------for adding business task
function addTaskBusiness() {
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
    text.innerHTML = '<p>' + taskvalue.value + '</p>';
    li.appendChild(delet);

    if (isClicked) {
        menutask.setAttribute('style', 'display: none;');
    } else {
        menutask.setAttribute('style', 'display: flex;');
    }

    isClicked = !isClicked;

    updateBusiness();
    circuralProgressPlus();
    saveData();
}

//--------------------------for adding special task GRASS
function addTaskSpecialGrass() {
    let boxNumber = listSpecial.querySelectorAll(".contenerGrass").length;

    if (boxNumber === 1) {
        alert_box.style.opacity = "1";
        alert_box.style.transform = "translateY(0px)";
        audioError.play();
        alert_box.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Cannot add more of those!';

        setTimeout(function () {
            alert_box.style.opacity = "0";
            alert_box.style.transform = "translateY(-50px)";
        }, 1300);
    } else {
        click_mid.play();
        let li = document.createElement("li");
        let delet = document.createElement("span");
        let text = document.createElement("p");
        let image = document.createElement("img");
        let divBefore = document.createElement("div");
        let divAfter = document.createElement("div");
        image.src = 'grass.png';
        delet.classList.add("delet");
        divBefore.classList.add("contenerGrassLayerBefore");
        divAfter.classList.add("contenerGrassLayerAfter");
        li.classList.add("contenerGrass");
        listSpecial.appendChild(li);
        text.innerHTML = 'Mow Grass';
        li.appendChild(divBefore);
        li.appendChild(divAfter);
        divAfter.appendChild(text);
        divAfter.appendChild(image);
        li.appendChild(delet);


        if (isClicked) {
            menutask.style.display = 'none';
        } else {
            menutask.style.display = 'flex';
        }

        isClicked = !isClicked;

        updatePersonal();
        circuralProgressPlus();
        saveDataSpecial();
    }
}

function addTaskSpecialProgresive() {
    let boxNumber = listSpecial.querySelectorAll(".contenerProgresive").length;
    console.log(boxNumber);

    if (boxNumber === 1) {
        alert_box.style.opacity = "1";
        alert_box.style.transform = "translateY(0px)";
        audioError.play();
        alert_box.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Cannot add more of those!';

        setTimeout(function () {
            alert_box.style.opacity = "0";
            alert_box.style.transform = "translateY(-50px)";
        }, 1300);
    } else if (taskvalue.value.length === 0) {
        alert_box.style.opacity = "1";
        alert_box.style.transform = "translateY(0px)";
        audioError.play();
        alert_box.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Write Something First!';

        setTimeout(function () {
            alert_box.style.opacity = "0";
            alert_box.style.transform = "translateY(-50px)";
        }, 1300);
    } else {
        click_mid.play();
        let li = document.createElement("li");
        let delet = document.createElement("span");
        let text = document.createElement("p");
        let divBefore = document.createElement("div");
        let divAfter = document.createElement("div");
        let placeHolder = document.createElement("div");
        let progresiveBar = document.createElement("div");
        let barHelper = document.createElement("div");
        let perCent = document.createElement("p");
        delet.classList.add("delet");
        divBefore.classList.add("contenerProgresiveLayerBefore");
        divAfter.classList.add("contenerProgresiveLayerAfter");
        progresiveBar.classList.add("progresiveBarTask");
        placeHolder.classList.add("progTaskPlaceHolder");
        barHelper.classList.add("barHelper");
        perCent.classList.add("percentage");
        li.classList.add("contenerProgresive");
        listSpecial.appendChild(li);
        text.innerHTML = taskvalue.value;
        perCent.innerHTML = "0%";
        li.appendChild(divBefore);
        li.appendChild(divAfter);
        divAfter.appendChild(placeHolder);
        divAfter.appendChild(perCent);
        placeHolder.appendChild(barHelper);
        barHelper.appendChild(progresiveBar);
        divAfter.appendChild(text);
        li.appendChild(delet);


        if (isClicked) {
            menutask.style.display = 'none';
        } else {
            menutask.style.display = 'flex';
        }

        isClicked = !isClicked;

        updatePersonal();
        circuralProgressPlus();
        saveDataSpecial();
    }
}

//---------------------------------------------------------------------------------EDITING TASKS
//--------------------------------marking task as done
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        click_calm.play();
    }
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

//------------------------------------deleting the task
list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        click_bass.play();
        e.target.parentElement.remove();
        updatePersonal();
        updateBusiness();
        circuralProgressMin();
        circuralProgressPlus();
        saveData();
    }
});

//---------------------------------deleting special task

listSpecial.addEventListener("click", function (e) {
    click_calm.play();
    if (e.target.tagName === "SPAN") {
        let parentElement = e.target.parentElement;
        let childElement = e.target.nextElementSibling;
        localStorage.removeItem("perc");

        parentElement.remove();
        if (childElement) {
            childElement.remove();
        }

        updatePersonal();
        updateBusiness();
        circuralProgressMin();
        circuralProgressPlus();
        saveDataSpecial();
        showPercentage();

    }
});





//---------------------------counter for number of mowings
let totalNumberOfMowedGrass = 0;
var score = localStorage.getItem("mow");
if (score !== null) {
    totalNumberOfMowedGrass = parseInt(score);
}

//---------------------------marking SPECIAL task as done

// listSpecial.addEventListener("click", function (e) {
//     if (e.target.closest(".contenerProgresive")) {
//         let completion = e.target.closest(".contenerProgresive").querySelector(".progresiveBarTask");
//         let scoreCompletion = e.target.closest(".contenerProgresive").querySelector(".percentage");
//         let percentage = parseFloat(e.target.dataset.percentage || "0");
//         function savePercentage() {
//             localStorage.setItem("perc", percentage.toString());
//         }

//         if (percentage < 100) {
//             percentage += 10;
//             completion.style.height = percentage + '%';
//             scoreCompletion.innerHTML = percentage + '%';
//             e.target.dataset.percentage = percentage;
//             savePercentage();
//             showPercentage();

//             if (percentage === 100) {
//                 console.log(percentage + ' done');

//                 if (e.target.classList.contains("task_done_p")) {
//                     e.target.classList.remove("task_done_p");
//                     updatePersonal();
//                     updateBusiness();
//                     circuralProgressMin();
//                     saveDataSpecial();
//                 } else {
//                     e.target.classList.add("task_done_p");
//                     updatePersonal();
//                     updateBusiness();
//                     circuralProgressPlus();
//                     saveDataSpecial();
//                     showMowingStats();
//                     mowingStats();
//                 }
//             }
//         }
//     } else {
//         if (e.target.classList.contains("task_done_p")) {
//             e.target.classList.remove("task_done_p");
//             updatePersonal();
//             updateBusiness();
//             circuralProgressMin();
//             saveDataSpecial();
//         } else {
//             e.target.classList.add("task_done_p");
//             updatePersonal();
//             updateBusiness();
//             circuralProgressPlus();
//             saveDataSpecial();
//             totalNumberOfMowedGrass++;
//             showMowingStats();
//             mowingStats();
//         }
//     }
// });

listSpecial.addEventListener("click", function (e) {
    click_calm.play();
    if (e.target.closest(".contenerProgresive")) {
        let completion = e.target.closest(".contenerProgresive").querySelector(".progresiveBarTask");
        let scoreCompletion = e.target.closest(".contenerProgresive").querySelector(".percentage");
        let percentage = parseFloat(e.target.dataset.percentage || localStorage.getItem("perc") || "0");

        function savePercentage() {
            localStorage.setItem("perc", percentage.toString());
        }
        if (percentage < 100) {
            percentage += 10;
            completion.style.height = percentage + '%';
            scoreCompletion.innerHTML = percentage + '%';
            e.target.dataset.percentage = percentage;
            savePercentage();
            showPercentage();

            if (percentage === 100) {
                console.log(percentage + ' done');

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
                    showMowingStats();
                    mowingStats();
                }
            }
        }
    } else {
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
    }
});











//---------------------------------------------------------------------------------PROGRESS BARS
//---------------------------personal progressbar
function updatePersonal() {
    let done_tasks = document.querySelectorAll(".task_done_p").length;
    let total_tasks = document.querySelectorAll(".to_do_p, .task_done_p, .contenerGrass, .contenerProgresive").length;
    let progress = (done_tasks / total_tasks) * 100;
    let showprog = document.querySelector(".progress_barP");
    showprog.style.width = progress + '%';
    TaskPInfo.innerHTML = total_tasks + ' tasks';

    if (total_tasks === 0) {
        personalBox.setAttribute('style', 'opacity: 40%');
        showprog.setAttribute('style', 'background: var(--fourth)');
    } else {
        personalBox.setAttribute('style', 'opacity: 100%');
    }
}

//---------------------------business progressbar
function updateBusiness() {
    let done_tasks = document.querySelectorAll(".task_done_b").length;
    let total_tasks = document.querySelectorAll(".to_do_b, .task_done_b").length;
    let progress = (done_tasks / total_tasks) * 100;
    let showprog = document.querySelector(".progress_barB");
    showprog.style.width = progress + '%';
    TaskBInfo.innerHTML = total_tasks + ' tasks';

    if (total_tasks === 0) {
        businessBox.setAttribute('style', 'opacity: 40%');
        showprog.setAttribute('style', 'background: var(--fourth)');
    } else {
        businessBox.setAttribute('style', 'opacity: 100%');
    }
}

//--------------------------------------------------------------circular progressbar for ALL
let animate_progress = 0;

//---------------------------progressbar gowing upp
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

//---------------------------progressbar gowing down
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

//-------------------------------------------------------------all LOCAL STORAGE functions
//---------------------------general list of tasks
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}

function showPercentage() {
    let contentCheck = listSpecial.querySelectorAll(".contenerProgresive").length;
    let comp = document.querySelector(".percentage");
    let bar = document.querySelector(".progresiveBarTask");
    if (contentCheck === 1) {
        comp.innerHTML = localStorage.getItem("perc") + '%';
        bar.style.height = localStorage.getItem("perc") + '%';
    }
}

//---------------------------special list of tasks
function saveDataSpecial() {
    localStorage.setItem("data2", listSpecial.innerHTML);
}

function showDataSpecial() {
    listSpecial.innerHTML = localStorage.getItem("data2");
}

//---------------------------counter for number of mowings
function mowingStats() {
    localStorage.setItem("mow", totalNumberOfMowedGrass.toString());
}

function showMowingStats() {
    var score = localStorage.getItem("mow");
    var scoreTotal = parseInt(score);
    // console.log('You have mowned your lawn '+score+' times!');
}


//---------------------------extending thing for PHONE view
function extendPage() {
    body.setAttribute('style', 'transform: translateX(-67%);');
}

function pageBack() {
    body.setAttribute('style', 'transform: translateX(0%);');
}

showData();
showDataSpecial();
// window.localStorage.clear();

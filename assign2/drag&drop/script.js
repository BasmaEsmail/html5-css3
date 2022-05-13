let inProgress = document.getElementById("inProgress");
let allDivs = document.getElementsByClassName("tasksSection");
let task = document.getElementById("textVal");
let count=0;
function add() {
  let par = document.createElement("p");
  par.setAttribute("id", count++);
  par.setAttribute("draggable", "true");
  par.innerHTML = task.value;
  par.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", this.id);
  });
  inProgress.appendChild(par);
}

for (var i = 0; i < allDivs.length; i++) 
{
  allDivs[i].addEventListener("dragover", function (event) {
    event.preventDefault();
  });
}

for (var i = 0; i < allDivs.length; i++) 
{
  allDivs[i].addEventListener("drop", function (event) {
  let id =  event.dataTransfer.getData("text");
  let par= document.getElementById(id)
  this.appendChild(par)
})
}

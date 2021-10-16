var tasks=[];

var savedTasks=localStorage.getItem("tasks");
if(savedTasks){
    tasks=savedTasks.split(";");
    printTasks();
}

function printTasks() {
    document.body.innerHTML="";
    for(var i=0;i<tasks.length;i++) {
        var li=document.createElement("li");
        li.innerHTML=tasks[i];
        document.body.appendChild(li);
    }
}

function addTask() {
    var task=prompt("Add Event/Reminder/Appointment/Task Here...");
    tasks.push(task);
    localStorage.setItem("tasks",tasks.join(";"))
    printTasks();
    
    var addAnotherTask=confirm("Do you want to add another task?");
    if (addAnotherTask) {
        addTask();
    }

}

addTask();
localStorage.getItem

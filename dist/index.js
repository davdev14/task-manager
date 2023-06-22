"use strict";
function getTask() {
    let titleTaskInputed = prompt("Enter a task title: ");
    titleTaskInputed;
    if (titleTaskInputed !== "") {
        return titleTaskInputed;
    }
    else {
        throw new Error('enter a valid task title');
    }
}
let taskName = getTask();
class Task {
    constructor() {
        this.parentId = null;
        this.id = 0;
        this.title = null;
    }
    toJson() {
        return {
            parentId: this.parentId,
            id: this.id,
            title: this.title
        };
    }
}
let task = new Task();
// put all these task callings in a function
task.id = task.id++;
task.parentId = null;
task.title = taskName;
const taskJSON = task.toJson();
console.log(taskJSON);
localStorage.setItem("taskJson", JSON.stringify(taskJSON));
const store = localStorage.getItem("taskJson");
const taskStore = JSON.parse(store);
console.log(typeof store, taskStore);

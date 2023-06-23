import { v4 } from 'uuid';
function generateId() {
    return v4();
}
function getTask() {
    let titleTaskInputed = prompt("Enter a task title: ");
    if (titleTaskInputed !== null) {
        return titleTaskInputed;
    }
    else {
        throw new Error("enter a valid task title");
    }
}
const taskName = getTask();
var taskStatus;
(function (taskStatus) {
    taskStatus["active"] = "active";
    taskStatus["terminated"] = "terminated";
})(taskStatus || (taskStatus = {}));
class Task {
    constructor() {
        this.parentId = null;
        this.id = generateId();
        this.title = taskName;
        this.status = taskStatus.active;
    }
}
let task = new Task();
let arr = [];
let localStore = localStorage.getItem("TaskStore");
if (localStore) {
    arr = JSON.parse(localStore);
    arr.push(task);
}
else {
    arr.push(task);
}
localStorage.setItem("TaskStore", JSON.stringify(arr));
let taskStore = JSON.parse(localStorage.getItem("TaskStore"));
console.log(taskStore);
function showTasks() {
    taskStore.map(task => console.log(task.title));
}
showTasks();
function TerminateTask(index) {
    taskStore[index].status = taskStatus.terminated;
}
TerminateTask(0);
function deleteTask(array, taskToDelete) {
    taskStore = array.filter((_, index) => index !== taskToDelete);
    localStorage.setItem("TaskStore", JSON.stringify(taskStore));
    const newtaskStore = JSON.parse(localStorage.getItem("TaskStore"));
    return newtaskStore;
}
console.log(deleteTask(taskStore, 4));

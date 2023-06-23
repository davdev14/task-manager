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
class Task {
    constructor() {
        this.parentId = null;
        this.id = generateId();
        this.title = taskName;
    }
}
let task = new Task();
console.log(task);
// let taskObj: TaskObjectInterface = {
//   id: task.id,
//   parentId: task.parentId,
//   title: task.title
// }
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
const taskStore = JSON.parse(localStorage.getItem("TaskStore"));
console.log(taskStore);

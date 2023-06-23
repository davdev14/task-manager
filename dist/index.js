import { v4 } from 'uuid';
const addTaskBtn = document.getElementById("add-task");
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
let taskObj = {
    id: task.id,
    parentId: task.parentId,
    title: task.title
};
let arr = [];
arr.push(taskObj);
// class StoreArrayOfObjects {
//   private tasksObject: TaskObjectInterface
//   private tasksArray: TaskObjectInterface[]
//   constructor(){
//     this.tasksObject = {
//       id: task.id,
//       parentId: task.parentId,
//       title: task.title
//     }
//     this.tasksArray = []
//   }
//   storeInArray(){
//     this.tasksArray.push(this.tasksObject)
//     return this.tasksArray
//   }
// }
// let arrayStore = new StoreArrayOfObjects()
localStorage.setItem("TaskStore", JSON.stringify(arr));
const taskStore = localStorage.getItem("TaskStore");
const tasksArray = JSON.parse(taskStore);
console.log(tasksArray);
// addTaskBtn?.addEventListener("click", () => getTask())

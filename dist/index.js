import { v4 } from 'uuid';
const addTaskBtn = document.getElementById("add-task");
function generateId() {
    return v4();
}
function getTask() {
    let titleTaskInputed = prompt("Enter a task title: ");
    return titleTaskInputed;
}
const taskName = getTask();
class Task {
    constructor() {
        this.parentId = null;
        this.id = generateId();
        this.title = taskName;
    }
}
function createNewTask() {
    let task = new Task();
    if (task.title == null) {
        throw new Error("enter a valid task title");
    }
    return {
        id: task.id,
        parentId: task.parentId,
        title: task.title
    };
}
console.log(createNewTask());
class StoreArrayOfObjects {
    constructor() {
        this.tasksObject = {
            id: createNewTask().id,
            parentId: createNewTask().parentId,
            title: createNewTask().title
        };
        this.tasksArray = [];
    }
    storeInArray() {
        this.tasksArray.push(this.tasksObject);
        return this.tasksArray;
    }
}
let arrayStore = new StoreArrayOfObjects();
localStorage.setItem("TaskStore", JSON.stringify(arrayStore.storeInArray()));
const taskStore = localStorage.getItem("TaskStore");
const tasksArray = JSON.parse(taskStore);
console.log(tasksArray);
// addTaskBtn?.addEventListener("click", () => getTask())

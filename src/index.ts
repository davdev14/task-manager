import {v4} from 'uuid';

const addTaskBtn = document.getElementById("add-task")



function generateId(){
  return v4();
}

function getTask(){
    let titleTaskInputed = prompt("Enter a task title: ")
    return titleTaskInputed;
}

const taskName = getTask();

interface TaskObjectInterface{
  parentId: null
  id: string
  title: string|null
}

class Task {
  public parentId = null
  public id: string
  public title: string|null
  
  constructor(){
    this.id = generateId()
    this.title = taskName
  } 
}

function createNewTask(): TaskObjectInterface{
  let task = new Task()
  if(task.title == null){
    throw new Error("enter a valid task title")
  }
  return {
  id: task.id,
  parentId: task.parentId,
  title: task.title
  }
}

console.log(createNewTask());


class StoreArrayOfObjects {
  private tasksObject: TaskObjectInterface
  private tasksArray: TaskObjectInterface[]
  constructor(){
    this.tasksObject = {
      id: createNewTask().id,
      parentId: createNewTask().parentId,
      title: createNewTask().title
    }
    this.tasksArray = []
  }
  storeInArray(){
    this.tasksArray.push(this.tasksObject)
    return this.tasksArray
  }
}
let arrayStore = new StoreArrayOfObjects()

localStorage.setItem("TaskStore", JSON.stringify(arrayStore.storeInArray()))
const taskStore = localStorage.getItem("TaskStore")
const tasksArray = JSON.parse(taskStore as string);
console.log(tasksArray);

// addTaskBtn?.addEventListener("click", () => getTask())





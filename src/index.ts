import {v4} from 'uuid';

function generateId(){
  return v4();
}

function getTask(){
  let titleTaskInputed = prompt("Enter a task title: ")
  if(titleTaskInputed !== null){
    return titleTaskInputed;
  }else{
    throw new Error("enter a valid task title")
  }
}

const taskName = getTask();

enum taskStatus {
  active = "active",
  terminated = "terminated"
}
interface TaskObjectInterface{
  parentId: null
  id: string
  title: string|null
  status: taskStatus
}

class Task implements TaskObjectInterface{
  parentId = null
  id: string
  title: string|null
  status: taskStatus
  
  constructor(){
    this.id = generateId()
    this.title = taskName
    this.status = taskStatus.active
  } 
}
let task = new Task()

let arr: TaskObjectInterface[] = []

let localStore = localStorage.getItem("TaskStore")

if(localStore){
  arr = JSON.parse(localStore)
  arr.push(task)
}else{
  arr.push(task)
}

localStorage.setItem("TaskStore", JSON.stringify(arr))
let taskStore: TaskObjectInterface[] = JSON.parse(localStorage.getItem("TaskStore") as string)
console.log(taskStore);


function showTasks(){
  taskStore.map(task => console.log(`${task.title}: ${task.status}`))
}
showTasks()

function terminateTask(index: number){
  taskStore[index].status = taskStatus.terminated
}
terminateTask(0)

function deleteTask(array: TaskObjectInterface[], taskToDelete: number): TaskObjectInterface[] {
  taskStore = array.filter((_,index) => index !== taskToDelete);
  localStorage.setItem("TaskStore", JSON.stringify(taskStore))
  const newtaskStore = JSON.parse(localStorage.getItem("TaskStore") as string)
  return newtaskStore
}
// console.log(deleteTask(taskStore, 4));







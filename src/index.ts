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
const taskStore: TaskObjectInterface[] = JSON.parse(localStorage.getItem("TaskStore") as string)
console.log(taskStore);




function showTasks(){
  taskStore.map(task => console.log(task.title))
}
showTasks()

function TerminateTask(index: number){
  taskStore[index].status = taskStatus.terminated
}
TerminateTask(1)

// function deleteTask(val: number){
//   const store:TaskObjectInterface[] = JSON.parse(localStorage.getItem("TaskStore") as string)
//   store.filter((item, index) => {
//     let i = index
//     i = val
//     return item !==  i
//   })
// }
// deleteTask()






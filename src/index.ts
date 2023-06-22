
// class GetTaskTitle {
//   title: string|null
//   parentId = null
//   id: number
//   constructor(){
//     this.id = 1
//     this.title = ""
//   }
//   getTitle(): string|null{
//     let taskTitle = prompt('Enter your task title: ')
//     this.title = taskTitle
//     return this.title
//   }
// }
// let taskTitle = new GetTaskTitle()
// console.log(taskTitle.getTitle());

// class CheckTaskValidity {
//   task: string|null
//   constructor(){
//     this.task = ''
//     if(taskTitle.title !== ""){
//       this.task = taskTitle.title
//     }else{
//       throw new Error('enter a valid task title')
//     }
//   }
// }
// let checkedTask = new CheckTaskValidity()
// console.log(checkedTask.task);

// class StoreTask {
//   taskArray: (string|null)[]
//   constructor(){
//     this.taskArray = []
//     this.taskArray.push(checkedTask.task)
//   }
//   storeToLocalStorage(){
//     localStorage.setItem("taskArray", JSON.stringify(this.taskArray))
//   }
//   getStoredItems(){
//     return localStorage.getItem("taskArray")
//   }
// }
// let store = new StoreTask()
// console.log(store.getStoredItems());

class Tasks {
  parentId = null
  id: number
  title: string|null
  taskArray: (string|null)[]
  task: string|null
  constructor(){
    this.id = 1
    this.title = ""
    this.task = ""
    this.taskArray = []
  }
  getTaskTitle(){
    let taskTitle = prompt('Enter your task title: ')
    return this.title = taskTitle
  }
  CheckTaskValidity(){
    if(this.title !== ""){
      return this.task = this.title
    }
  }
  storeTasks(){
    this.taskArray.push(this.task)
    localStorage.setItem("taskArray", JSON.stringify(this.taskArray))
  }
  getTasks(){
    return localStorage.getItem("taskArray")
  }
}
let tasks = new Tasks()
console.log(tasks.getTaskTitle());
// console.log(tasks.CheckTaskValidity());
// console.log(tasks.storeTasks());
console.log(tasks.getTasks());


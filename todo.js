//Ben Griffith
//car chai = require('chai')
//expect = chai.expect;
var expect = require('chai')
//I can list my tasks
var taskList = [ ];
//function definition:
function listTasks(){
  console.log(taskList)
}
//function invocation:
listTasks();
//I can add a task to my list.
//when defining (parameters)
function addTaskToList(task, list){
  //What is the task? @param task
  //Where is the task going? @param list
  //What order? Priority? lowest, on bottom: use push
  //
  return taskList.push(task)
}

expect(taskList.length).to.Equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

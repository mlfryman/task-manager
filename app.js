// In Class Assignment - Task Manager
//

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var playTasks = [], homeTasks = [], schoolTasks = [];

var option = prompt('Add task to (p)lay, (h)ome, (s)chool, or (q)uit? ');

while(option != 'q'){
  task = prompt('Task: ');
 
  switch(option){
    case 'p':
      playTasks.push(task);
      break;
    case 'h':
      homeTasks.push(task);
      break;
    case 's':
      school.push(task);
  }

  option = prompt('Add a task to (p)lay, (h)ome, (s)chool, or (q)uit? ');
}

console.log("\n\nHere's your list of tasks:\n");
console.log('Play:', (playTasks) + '\n');
console.log('Home:', (homeTasks) + '\n');
console.log('School:', (schoolTasks) + '\n\n');

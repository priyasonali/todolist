(function(){
'use strict';

var a=angular.module('todoList', [])
.controller('ToDoListController', function(){
    this.todos=todos;

    this.addTask= function(form){
      todos.push(form);
      this.todo.title='';
    }
});



  var todos = [
    {
      description: 'Work on PHP',
      duedate: '12/23/2016',
      status: 'Incomplete'
    },{
      description: 'Start Drupal',
      duedate: '11/11/2016',
      status: 'Incomplete'
    },{
      description: 'Complete Angular.js',
      duedate: '10/03/2016',
      status: 'Complete'
    },{
      description: 'Start looking for job',
      duedate: '10/10/2015',
      status: 'Complete'
    }
];
})();

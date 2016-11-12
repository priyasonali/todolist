(function() {
    'use strict';

    var a = angular.module('todoList', [])
        .controller('ToDoListController', ["$scope", function($scope) {
            $scope.validTodos = todos;

            $scope.addTask = function(form) {
                let task = {};
                task.description = $scope.todo.title;
                task.duedate = "";
                task.status = "new";
                todos.push(task);
                $scope.todo.title = '';
            };

        }]);



    var todos = [{
        description: 'Work on PHP',
        duedate: '12/23/2016',
        status: 'new'
    }, {
        description: 'Start Drupal',
        duedate: '11/11/2016',
        status: 'done'
    }, {
        description: 'Complete Angular.js',
        duedate: '10/03/2016',
        status: 'new'
    }, {
        description: 'Start looking for job',
        duedate: '10/10/2015',
        status: 'done'
    }];
})();

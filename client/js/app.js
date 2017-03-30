var app = angular.module('app', ['ngRoute']);
console.log("app.js has loaded.");

app.config(function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: '../partials/login.html'})
  .when('/login', {templateUrl: '../partials/login.html'})
  .when('/logout', {templateUrl: '../partials/login.html'})
  .when('/main', {templateUrl: '../partials/main.html'})
  .when('/main/create', {templateUrl: '../partials/createPoll.html'})
  .when('/show/:id', {templateUrl: '../partials/surveyPoll.html'})
  .otherwise({redirectTo: '/'})
});


// Create factory for handling users. Use $sessionStorage to store session data
// Remember you have to install sessionStorage with:  npm install --save angular-sessionstorage
app.factory('usersFactory', function($http, $sessionStorage){
    var factory = {};
    // Initialize session storage for current user.
    $sessionStorage.currUser;

    // Find name in MongoDB or create a new user. Store in session
    factory.login = function(newUser, callback){
        $http.post('/login', newUser).success(function(output){
            $sessionStorage.currUser = output;
            callback(output);
        });
    };
    factory.logout = function(){
        console.log("You just logged out!");
        $sessionStorage.$reset();
    };
    factory.user = function(){
        return $sessionStorage.currUser;
    };
    return factory;
})

// Make a user controller
app.controller('usersController', ['usersFactory', '$scope', '$location', function(usersFactory, $scope, $location){
    // Users will submit this createUser method from the first page
    $scope.createUser = function(){

    }

    // Matches with: ng-click="go('/main')" on login.html to log user in
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.login = function(){
    // newUser will be loaded into the ng-model directive in login.html
    usersFactory.login($scope.newUser, function(data){
        $scope.newUser = data;
        $location.url('/main');
        });
    };
    $scope.logout = function() {
      $location.path(path);
      $scope.user = {};
      usersFactory.logout();
    };
}])


// Create factory for handling polls
app.factory('pollsFactory', function($http){
  var factory = {};
  factory.showPolls = function(callback){
    $http.get('/users').then(function(all_surveys){
      callback(all_surveys.data);
    })
  }
  // factory.createPoll = function(newPoll, callback){
  //   console.log(newPoll);
  //   $http.post('/poll/new', newPoll).then(function(created_poll){
  //     console.log(created_poll);
  //     console.log('Got back from the server!');
  //     callback(created_poll);
  //   })
  // }
  //
  // return factory;
});

// Create controller for handling polls that injects the factory and $scope into the html
app.controller('pollsController', ['pollsFactory', '$scope', '$location', function(pollsFactory, $scope, $location){
  $scope.polls = [];

  pollsFactory.showPoll(function(data){
    console.log(data);
    $scope.polls = data;
  })

  $scope.createPoll = function(){
    // var poll = $scope.newPoll;
    pollsFactory.createPoll(poll, function(data){

      if(data.errors){
        $scope
      }else{
        pollsFactory.showPoll(function(data){
          $scope.polls = data;
        })
      }
    });
  }

}])

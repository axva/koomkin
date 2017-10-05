(function(){
  'use strict'

  angular
    .module("test")
    .config(config)

  function config($routeProvider){
    $routeProvider
      .when('/',{
        template: '<main-Model></main-Model>'
      })
      .otherwise({ redirectTo: '/' })
  }

})();

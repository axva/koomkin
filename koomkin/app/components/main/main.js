(function(){
  'use strict'

  var mainModel = {
    controller: mainCtrl,
    templateUrl: "app/components/main/main.html"
  }

  angular
    .module("test")
    .component("mainModel", mainModel)

    function mainCtrl(){
      var nav = this;
    }

})();

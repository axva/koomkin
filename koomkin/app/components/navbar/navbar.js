(function(){
  'use strict'

  var navBar = {
    controller: navCtrl,
    templateUrl: "app/components/navbar/navbar.html"
  }

  angular
    .module("test")
    .component("navBar", navBar)

    function navCtrl(){
      var nav = this;
    }

})()

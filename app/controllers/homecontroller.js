(function(){
    'use strict';

    angular
        .module('myapp')
        .controller('HomeController', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope){

        var ctrl = this;
        
        
        

    $scope.clickMe = function(date)
    {
        var day = moment(date,"DD-MM-YYYY hh:mm");
        console.log(day.hours());
        console.log(day.minutes());
    }

};


    

}());
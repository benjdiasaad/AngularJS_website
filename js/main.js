var app = angular.module("myApp",[])

app.controller("myCtr",function($scope){

    $scope.friends =[{name:"saad",desc:"developper"},
                      {name:"cristiano", desc:"player"},
                      {name:"ayoub", desc:"artist"},
                      {name:"skouma", desc:"romario"} ];
    
    $scope.clicme = function(name , desc){
        $scope.updatename=name;
        $scope.updatedesc=desc;
    }                      
})
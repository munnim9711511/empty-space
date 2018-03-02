var app =angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl :"/js/Modules/mainModules/index.edge"
  })

.when("/vehicle",{
  templateUrl:"/js/Modules/vehicle/vehicle.edge"
})
.when("/building",{
  templateUrl:"/js/Modules/building/building.edge"
})
.when("/indoor-space",{
  templateUrl:"/js/Modules/outdoor/outdoor.edge"
})
.when("/conatct-us",{
  templateUrl:"/js/Modules/contactus/contact.edge"
})
.when("/FAQ",{
  templateUrl:"/js/Modules/FAQ/FAQ.edge"
})
.when("/list-space",{
  templateUrl:"/js/Modules/listSpace/listspace.edge"
})
  ;
});

var app = window.angular.module('app', [])

app.controller('mainCtrl', mainCtrl)

function mainCtrl ($scope, $http) {
    $scope.colors = {};
    
    $scope.updateGraph = function(color) {
        // Store information on server
        var formData = {name:color};
        console.log(formData);
          var colorURL = 'color';
          $http({
             url: colorURL,
             method: "POST",
             data: formData
          }).success(function(data, status, headers, config) {
            $scope.colors = data;
          }).error(function(data, status, headers, config) {
            console.log("Post failed");
          });
    }
}

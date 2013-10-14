function ColorController ($scope) {

  $scope.bgColor = {};

  $scope.init = function () {

  }

  $scope.pickColor = function () {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  $scope.newColor = function () {
    $scope.bgColor['background'] = $scope.pickColor();
    
  }
  
}
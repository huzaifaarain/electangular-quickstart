elApp.controller('aboutCtrl', function ($scope, $timeout, SampleModel) {
    $scope.fromDataBase = null;
    SampleModel.dummyPara().then(function(r){
        $scope.$apply(function(){
            $scope.fromDataBase = r;
        });
    });
});
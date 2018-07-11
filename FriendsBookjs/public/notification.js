var app = angular.module('FriendsBook')
app.controller("notifController", function ($scope, $http, $state) {
    
    $http.get("/users/DisplayNotifications").then(function (response)
    {
            $scope.notlist = response.data;
    });

    $scope.Accept = function(not)
    {
        $scope.selectednot = not;
        console.log($scope.selectednot);
        var data =
            {
                "not": $scope.selectednot
            }
        $http.post("/users/AcceptFriend",data).then(function (response) {
            $scope.res = response.data;
            alert($scope.res);
            $http.get("/users/DisplayNotifications").then(function (response) {
                $scope.notlist = response.data;
            });
        });
    }

    $scope.Reject = function (not) {
        //TODO - implementation.
    }

});
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
            $scope.result = response.data;
            alert($scope.result);
            $http.get("/users/DisplayNotifications").then(function (response) {
                $scope.notlist = response.data;
            });
        });
    }

    $scope.Reject = function (not)
    {
        $scope.selectednot = not;
        var data =
            {
                "not": $scope.selectednot
            }
        $http.post("/users/RejectFriend", data).then(function (response)
        {
            $scope.res = response.data;
            alert($scope.res);
            $http.get("/users/DisplayNotifications").then(function (response)
            {
                $scope.notlist = response.data;
            });
        });
    }

    $scope.Reply = function (not)
    {
        $scope.selectednot = not;
        console.log($scope.selectednot);
        var data =
            {
                "not": $scope.selectednot
            }
        $http.post("/users/ReplyMsg", data).then(function (response)
        {
            $scope.friendname = response.data;
            $state.go("messenger", { "friendname": $scope.friendname });
            $http.get("/users/DisplayNotifications").then(function (response) {
                $scope.notlist = response.data;
            });
        });
    }
    $scope.Ignore = function (not) {
        $scope.selectednot = not;
        var data =
            {
                "not": $scope.selectednot
            }
        $http.post("/users/IgnoreMsg", data).then(function (response) {
            $scope.res = response.data;
            alert($scope.res);
            $http.get("/users/DisplayNotifications").then(function (response) {
                $scope.notlist = response.data;
            });
        });
    }
});
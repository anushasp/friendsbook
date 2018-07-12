var app = angular.module('FriendsBook')
app.controller("messengerController", function ($scope, $http, $state) {

    $scope.selectedFriend = null;
    $http.get("/users/messenger").then(function (response)
    {
        $scope.messages = response.data;
    });

    $scope.selectMsg = function (msg)
    {
        $scope.selectedFriend = msg.friendname;
        $state.go("messenger", { "friendname": $scope.selectedFriend });
    }
})
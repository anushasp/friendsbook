var app = angular.module('FriendsBook')
app.controller("friendsController", function ($scope, $http, $state) {

    $scope.search = "";
    $scope.selectedIndex = null;
    $scope.selectedPerson = null;

    $http.get("/users/friends").then(function (response)
    {
        $scope.friendsList = response.data;
    });

    $scope.sensitiveSearch = function (person) {
        if ($scope.search)
        {
            return person.indexOf($scope.search) == 0
        }
        return true;
    };
    $scope.selectPerson = function (person, index)
    {
        $scope.selectedIndex = index;
        $scope.selectedPerson = person;

        var data =
            {
                "friendprof": $scope.selectedPerson
            }
        $http.post("/users/friendsprofile", data).then(function (response)
        {
            $scope.friendDetails = response.data;
        });
    }
    
   
  
});
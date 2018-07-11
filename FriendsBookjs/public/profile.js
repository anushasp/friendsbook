var app = angular.module('FriendsBook')
app.controller("profileController", function ($scope, $http, $state) {

    $http.get("/users/current").then(function (response)
    {
        $scope.username = response.data.name;
        $scope.gender = response.data.gender;
        $scope.school = response.data.school;
        $scope.bday = response.data.bday;
    });

    $scope.Update = function () {
       
        var data =
            {
                "username": $scope.username,
                "gender": $scope.gender,
                "school": $scope.school,
                "bday": $scope.bday
            }

        $http.post("/users/viewprofile", data).then(function (response)
        {
            $scope.message = response.data;
        });
    }
});
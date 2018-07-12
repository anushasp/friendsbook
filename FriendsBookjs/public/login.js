var app = angular.module('FriendsBook')
    app.controller("myController", function ($scope, $http, $state) {
        
        $scope.login = function ()
        {
            if (!$scope.username)
            {
                alert("enter username");
                return;
            }
            if (!$scope.password)
            {
                alert("enter password");
                return;
            }

            var data =
                {
                "username": $scope.username,
                "password": $scope.password
                }

            $http.post("/users/login", data).then(function (response)
            {
                if (response.data == "pass") {
                    console.log("passed")
                    $state.go("home");
                }
                else
                {
                    console.log("Failed Login")
                }
            });
        }
    });
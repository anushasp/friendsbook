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
                    $scope.result = "Either Username or Password is incorrect";
                    alert($scope.result);
                    console.log("Failed Login")
                }
            });
        }

        $scope.Register = function () {
            if (!$scope.userid) {
                alert("enter username");
                return;
            }
            if (!$scope.pass) {
                alert("enter password");
                return;
            }

            var data =
                {
                    "userid": $scope.userid,
                    "password": $scope.pass,
                    "name": $scope.name,
                    "gender": $scope.gender,
                    "school": $scope.school,
                    "day": $scope.day,
                    "month": $scope.month,
                    "year": $scope.year
                   
                }

            $http.post("/users/register", data).then(function (response)
            {
                $scope.registerresult = response.data
                $scope.userid = "";
                $scope.pass = "";
                $scope.name = "";
                $scope.gender = "";
                $scope.school = "";
                $scope.day = "";
                $scope.month = "";
                $scope.year = "";
            });
        }
    });
var app = angular.module('FriendsBook')
app.controller("friendrequestController", function ($scope, $http, $state) {
    $scope.show = false;
    $scope.search = function()
    {
        var data =
            {
                "searchname": $scope.searchname
            }
         $http.post("/users/checkaccount",data).then(function (response)
            {
             $scope.CheckAccount = response.data;
             if ($scope.CheckAccount == "Account Exists")
             {
                 $scope.show = true;
             }
        });

        
    }

    $scope.Send = function ()
    {
        var data =
            {
                "searchname": $scope.searchname
            }
        $http.post("/users/friendrequest", data).then(function (response)
        {
          $scope.requestResult = response.data;
        });
    }


});
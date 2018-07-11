var app = angular.module('FriendsBook')
var app = angular.module('FriendsBook')
app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}]);
app.controller("messageController", function ($scope, $http, $stateParams, $state)
{
    var friendname = $stateParams.friendname;
    $http.get("/users/previousmessages/" + friendname).then(function (response)
    {
        $scope.ViewPrevMessages = response.data;
    });

    $scope.sendMsg = function () {
        var data =
            {
                "messg": $scope.newmsg
            }

        $http.post("/users/sendmsg/" + friendname, data).then(function (response)
        {
            $scope.newmsg = "";
            $scope.msgres = response.data;

            $http.get("/users/previousmessages/" + friendname).then(function (response)
            {
                $scope.ViewPrevMessages = response.data;
            });
        });
    }

});
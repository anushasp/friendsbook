
var app = angular.module('FriendsBook')
 app.controller("homeController", function ($scope, $http, $state) {
     $scope.clicked = false;
     $scope.searchname = "";
    $scope.myObj = {
        "color": "#3B5998",
        "font-size": "17px",
    }
    $http.get("/users/current").then(function (res) {
        $scope.currentuser = res.data.name;
    });
    
    $http.get("/users/notificationsnum").then(function (res) {
        console.log(res.data);
        $scope.notnum = res.data;
    });
    
    $scope.clicked = false;

    

    $http.get("/users/searchusers").then(function (res) {
        $scope.users = res.data;
    });


    $scope.search = function ()
    {
        $scope.requestResult = "";
        $scope.clicked = true;
        $scope.searchprof = $scope.searchname;
        var data =
            {
                "searchname": $scope.searchname
            }
        $http.post("/users/checkfriends", data).then(function (response)
        {
           
            if (response.data == "pass")
            {
                $scope.checkfriends = true;
            }
            else {
                $scope.checkfriends = false;

            }
        });
        $http.post("/users/checkaccount", data).then(function (response)
        {
            $scope.noaccount = false;
            if (response.data == "No such account")
            {
                $scope.noaccount = true;
            }
            $scope.friendDetails = response.data;
        }); 
    }

   

    $scope.Send = function () {
        var data =
            {
                "searchname": $scope.searchname
            }
        $http.post("/users/friendrequest", data).then(function (response) {

            $scope.requestResult = response.data;
            alert($scope.requestResult);
        

        });

      
    }

    $scope.Messenger = function ()
    {
        $state.go("messenger", {"friendname": $scope.searchname });
       
    }


    $scope.createPost = function () {
        var data =
            {
                "newpost": $scope.newpost
            }

        $http.post("/users/createpost", data).then(function (response) {
            
            $scope.newpost = "";
            $http.get("/users/latestupdates").then(function (res)
            {
                $scope.updateslist = res.data;
            });
        });
    }

    $http.get("/users/latestupdates").then(function (res) {
        $scope.updateslist = res.data;
    });

   
    

    $scope.postcomment = function (update) {

        $scope.selectedUpdate = update.updates;
        $scope.pp = update.newcomment;
        $scope.res = update.result;
       
        var data =
            {
                "selectedupdate": $scope.selectedUpdate,
                "commentonUpdate": $scope.pp,
                "res": $scope.res
            }

        $http.post("/users/commentupdates", data).then(function (response)
        {
            if (response.data == "CommentPosted")
            {
                $scope.res = response.data ;
                $scope.pp = "";
            }
            $http.get("/users/latestupdates").then(function (res)
            {
                $scope.updateslist = res.data;
            });
        });
    }
     
    
    $scope.logout = function () {

        $http.get("/users/logout").then(function (response) {
            if (response.data == "logout")
                $state.go("login");
        });
    }

});
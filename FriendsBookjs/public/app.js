var app = angular.module("FriendsBook", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home",
            {
                url: "/home",
                views: {
                    body: {
                        templateUrl: "pages/home.html"
                    }
                }
            })
            .state("login",
                {
                    url: "/",
                    views: {
                        body: {
                            templateUrl: "pages/login.html",
                            
                        }
                    }
            })

            .state("friends",
                {
                    url: "/friends",
                    views: {
                        body: {
                            templateUrl: "pages/friends.html",

                        }
                    }
            })
            .state("profile",
                {
                    url: "/profile",
                    views: {
                        body: {
                            templateUrl: "pages/profile.html",

                        }
                    }
            })
            
            .state("messenger",
                {
                    url: "/messenger/:friendname",
                    views: {
                        body: {
                            templateUrl: "pages/messages.html",

                        }
                    }
                })
            .state("notifications",
                {
                    url: "/notifications",
                    views: {
                        body: {
                            templateUrl: "pages/notifications.html",

                        }
                    }
                })
            
           

    });



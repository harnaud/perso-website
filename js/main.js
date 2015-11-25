(function() {
    var app = angular.module('main', ['localization', 'header', 'footer', 'contact', 'photos', 'blog']);

    app.controller('TrackController', function($scope, $http){
        this.postData = function() {
            $http.post('frags/util/track.php', { }
            ).success(function(data, status, headers, config) {
                console.log("tracked with success");
            }).error(function(data, status) {
                console.log("track error");
            });
        };
        this.postData();
    });

    app.directive('homePage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/home.html'
        }
    });
    app.directive('blogPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/blog.html'
        }
    });
    app.directive('resumePage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/resume.html'
        }
    });
    app.directive('portfolioPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/portfolio.html'
        }
    });
    app.directive('photosPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/photos.html'
        }
    });
    app.directive('downloadsPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/downloads.html'
        }
    });
    app.directive('linksPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/links.html'
        }
    });
    app.directive('contactPage', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/pages/contact.html'
        }
    });
    app.directive('photosMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'frags/photos/menu.html'
        }
    });
})();

$(window).scroll( function () {
    $('.sticky-right-menu:visible').animate({ top : $(window).scrollTop()}, 20, function () {});
});


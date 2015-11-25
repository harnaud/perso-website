(function() {
    var app = angular.module('footer', []);

    app.directive('mainFooter', function() {
        return {
            restrict: 'A',
            templateUrl: 'frags/common/footer.html'
        }
    });
})();


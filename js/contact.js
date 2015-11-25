(function() {
    var app = angular.module('contact', []);

    app.controller('FormController', function($scope, $http){
        var that = this;
        this.isSuccessVisible = false;
        this.isFailureVisible = false;

        this.isSuccess = function () {
            return this.isSuccessVisible;
        };

        this.isFailure = function () {
            return this.isFailureVisible;
        };

        this.postData = function() {
            $http.post('frags/util/mail.php', {
                'lastName': $scope.lastName,
                'firstName': $scope.firstName,
                'email': $scope.email,
                'message': $scope.message}
            ).success(function(data, status, headers, config) {
                console.log("success");
                $scope.contactForm.$setPristine();
                that.resetData();
                that.isSuccessVisible = true;
            }).error(function(data, status) {
                console.log("error");
                that.isFailureVisible = true;
            });
        };

        this.resetData = function() {
            $scope.lastName = null;
            $scope.firstName = null;
            $scope.email = null;
            $scope.message = null;
        }
    });

})();
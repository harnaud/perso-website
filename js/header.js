(function() {
    var app = angular.module('header', []);

    app.directive('mainHeader', function() {
        return {
            restrict: 'A',
            templateUrl: 'frags/common/header.html'
        }
    });

    app.controller('TabController', function(){
        this.isInitialized = false;
        this.tab;
        this.pages = pages;

        this.initTabCtrl = function () {
            var directAction = this.parseUrl();

            if (jQuery.inArray(directAction, this.pages) > 0) {
                this.tab = directAction;
            }
            else {
                this.tab = 'home';
            }
        };

        this.getTab = function(){
            if (!this.isInitialized) {
                this.initTabCtrl();
                this.isInitialized = true;
            }
            return this.tab;
        };

        this.setTab = function(newValue){
            this.tab = newValue;
            if (newValue === 'photos') {
                setTimeout(window.initPhotoMap, 200);
            }
        };

        this.isSet = function(tabName){
            return this.getTab() === tabName;
        };

        this.parseUrl = function () {
         	var res, url = $('<a>', { href:document.URL } )[0];
         	var cMarker = "?page=";
         	if (url.href.indexOf(cMarker) > 0) {
         		res = url.href.substr(url.href.indexOf(cMarker) + cMarker.length);
         	}
         	if (res === "index") res = 'home';
         	if (res === "home") res = 'home';
         	if (res === "download") res = 'downloads';
         	if (res === "telechargements") res = 'downloads';
         	if (res === "telechargement") res = 'downloads';
         	if (res === "liens") res = 'links';
         	if (res === "cv") res = 'resume';
         	if (res === "photo") res = 'photos';

         	return res;
        }
    });

    var pages = [
        'home',
        'blog',
        'portfolio',
        'resume',
        'links',
        'downloads',
        'photos',
        'contact'
    ];

})();


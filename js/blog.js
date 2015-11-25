(function() {
    var app = angular.module('blog', []);

    app.controller('ArticleController', function(){
        this.areTravelArticlesVisible = true;
        this.areComputerArticlesVisible = true;
        this.areGameArticlesVisible = true;

        this.isTravelArticleVisible = function(){
            return this.areTravelArticlesVisible;
        };

        this.isComputerArticleVisible = function(){
            return this.areComputerArticlesVisible;
        };

        this.isGameArticleVisible = function(){
            return this.areGameArticlesVisible;
        };
    });

})();

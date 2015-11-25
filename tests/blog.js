(function() {
    var app = angular.module('blog', []);

    /**
     * Constructor for user object
     */
    var BlogArticle = function (date, title, category, text, link, imageURL) {
        this.date = date,
        this.title = title,
        this.category = category,
        this.text = text,
        this.link = link,
        this.imageURL = imageURL
    };

    app.controller('ArticleController', function(){
        this.articles = [];
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

        this.loadJSON = function() {
            var that = this;
            // Read the JSON file using jQuery
            $.getJSON('frags/json/articles2014.json', function (data) {
                $.each(data, function (key, val) {
                    // Create article object
                    var article = new BlogArticle(val.date,
                                                  val.title,
                                                  val.category,
                                                  val.text,
                                                  val.link,
                                                  val.imageURL);
                    that.articles.push(article);
                });
            }).done(function () {
                that.renderArticles();
            })
            .fail(function () {
                console.log("JSON reading error");
            });
        };

        this.renderArticles = function() {
            var container = $("#blog-articles");

            this.hideButton();

            $.each(this.articles, function (index, value) {

                // Create list item
                var articleCt = $('<div>').addClass("panel panel-default")
                                          .attr("ng-show", "articleCtrl.isComputerArticleVisible()");
                var headingCt = $('<div>').addClass("panel-heading clearfix");
                var titleCt = $('<h3>').addClass("panel-title");
                var categoryImg = $('<img>').addClass("category")
                                            .attr('src', "img/blog/voyage.png")
                                            .attr('alt', "voyage");
                var title = $(document.createTextNode(value.title.en));
                titleCt.append(categoryImg);
                titleCt.append(title);
                headingCt.append(titleCt);

                var bodyCt = $('<div>').addClass("panel-body");
                var bodyText = $(document.createTextNode(value.text.en));
                var divImgCt = $('<div>').addClass("blog-img-ct");
                var link = $('<a>').attr("target", '_blank')
                                   .attr("href", value.link);

                var img = $('<img>').addClass("rounded-corner")
                                    .attr('src', value.imageURL)
                                    .attr('alt', "usa road trip");
                var paragraph = $('<p>');
                var linkText = $(document.createTextNode('click the image'));

                paragraph.append(linkText);
                link.append(img);
                link.append(paragraph);

                divImgCt.append(link);
                bodyCt.append(bodyText);
                bodyCt.append(divImgCt);

                articleCt.append(headingCt);
                articleCt.append(bodyCt);
                // add container to item
                container.append(articleCt);

            });
        };

        this.hideButton = function () {
            $("#addMoreBtn").css('display','none');
        };
    });

})();

/*
        <div class="add-more">
            <button id="addMoreBtn"
                    type="button"
                    class="btn btn-default btn-lg"
                    ng-click="articleCtrl.loadJSON()">
                {{locale.getLocalizedString('blog', 'loadMore')}}
            </button>
        </div>
*/

/*
[
  {
    "date" : 1427241600,
    "title" : {
        "en" : "Tick Tack Toe game",
        "fr" : "Le jeu du morpion"
    },
    "category" : "game",
    "text" : {
        "en" : "I wrote a simple single page application which simulates the tick tack toe game. Have fun!",
        "fr" : "J'ai cod&eacute; le jeu du morpion en HTML et JavaScript avec une interface simpliste. Bon jeu!"
    },
    "link" : "http://output.jsbin.com/qetoze",
    "imageURL" : "img/blog/ttt.png"
  },
  {
    "date" : 1421020800,
    "title" : {
      "en" : "CSS interview question: Reproduce button style",
      "fr" : "Question d'entretien en CSS: reproduire le style du bouton"
    },
    "category" : "computer",
    "text" : {
      "en" : "Given this PNG image, write CSS to reproduce as close as possible the style of this button. Source: https://css-tricks.com/interview-questions-css/",
      "fr" : "A partir de cette image PNG, &eacute;crire du CSS pour reproduire au plus proche le style de ce bouton. Source: https://css-tricks.com/interview-questions-css/"
    },
    "link" : "http://output.jsbin.com/yaliqa",
    "imageURL" : "http://i.imgur.com/hwhsYwi.png"
  },
  {
    "date" : 1424390400,
    "title" : {
      "en" : "Numerical Integration Calculator",
      "fr" : "Calculateur d'int&eacute;grateur num&eacute;rique"
    },
    "category" : "computer",
    "text" : {
      "en" : "Given a function, calculates its true area and an estimation of the area using X rectangles.",
      "fr" : "Pour une fonction donn&eacute;es, calculer l'aire de la surface de l'abscisse &agrave; la courbe et son estimation en utilisant X rectangles dans son interval."
    },
    "link" : "http://output.jsbin.com/beside",
    "imageURL" : "img/blog/integration.png"
  },
  {
    "date" : 1424382514,
    "title" : {
      "en" : "Tiny example of tracker",
      "fr" : "Exemple de traqueur"
    },
    "category" : "computer",
    "text" : {
      "en" : "The purpose of this exercise is to create a tracker that will send data about user activity to the server every X period of time to avoid overload.",
      "fr" : "Le but de cet exercice est de cr&eacute;er un traqueur qui va envoyer un object au serveur contenant des informations sur l'activit&eacute; de l'utilisateur. Les informations sont envoy&eacute;s au serveur que tous les intervals X de temps pour &eacute;viter une surcharge de messages."
    },
    "link" : "http://output.jsbin.com/yapefo",
    "imageURL" : ""
  },
  {
    "date" : 1424382514,
    "title" : {
      "en" : "CSS interview question",
      "fr" : "Question d'entretien en CSS"
    },
    "category" : "computer",
    "text" : {
      "en" : "The question is, using CSS, jQuery allowed, write the code that will move the top green container to the right and move the bottom blue container to the left in the same time and change z-index when you click the 'Switch places' link. This is the second state and clicking the link again should transition back to the first state",
      "fr" : "La question est d'&eacute;crire du JavaScript, jQuery autoris&eacute;, pour qu'en cliquant le lien, le conteneur vert du haut bouge vers la droite et le conteneur bleu du bas bouge sur la gauche tout en changeant de z-index. Cela cr&eacute;&eacute; un deuxi&egrave;me &eacute;tat et en cliquant &agrave; nouveau sur le lien, l'on doit revenir &agrave; l'&eacute;tat initial."
    },
    "link" : "http://output.jsbin.com/zidulu",
    "imageURL" : "img/blog/switch.png"
  },
  {
    "date" : 1421020800,
    "title" : {
      "en" : "Simple responsive grid layout",
      "fr" : "Simple affichage en quadrillage responsive"
    },
    "category" : "computer",
    "text" : {
      "en" : "Display 100 products with an ad which is double the size of a product every 15 products after the the 19th product. Avoid blank spaces.",
      "fr" : ""
    },
    "link" : "http://output.jsbin.com/fipuki",
    "imageURL" : "img/blog/grid.png"
  }
]
*/
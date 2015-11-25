(function() {
    var app = angular.module('photos', []);

    app.controller('PhotoAlbumController', function() {
        this.total_page;
        this.slideIndex;
        this.LeftArrowKey = 37;
        this.RightArrowKey = 39;
        this.EnterKey = 13;
        this.isClick = false;

        this.DeckStateSize;
        this.DeckStateSlideIndex;

        this.quitAlbum = function () {
            $("#photo-album").addClass('is-dnone');
            $("#container").removeClass('is-dnone');
            $('body').removeClass('body-photos');
            this.slideIndex = 0;
            this.total_page = 0;
            this.DeckStateSize = 0;
            this.DeckStateSlideIndex = 0;
            $(document).unbind();
        };

        this.showAlbum = function (filename) {
            var that = this;
            $("#container").addClass('is-dnone');
            $('body').addClass('body-photos');
            $("#photo-album").removeClass('is-dnone');
            $("#photos-ct").load( 'frags/photos/album-' + filename + '.html', function () {
                that.initPhotoAlbum();
            });
        };

        this.initPhotoAlbum = function () {
            this.slideIndex = 0;
            this.total_page = 0;
            this.DeckStateSize = 0;
            this.DeckStateSlideIndex = 0;

            this.layoutSlides();
            this.attachListeners();
            prettyPrint();
            $("#current_page").html(this.DeckStateSlideIndex + 1);
        };

        this.layoutSlides = function () {
            var slides = $('section article');
            this.DeckStateSize = slides.length;
            var that = this;
            slides.each(function (i, elm) {
                $(elm).css('left', i * 100 + '%');
                that.total_page = i;
            });
            $("#total_page").html(this.total_page + 1);
        };

        this.goBack = function () {
            this.isClick = true;
            backEvent = new Object();
            backEvent.which = this.LeftArrowKey;
            this.transitionSlides(backEvent);
            this.isClick = false;
        };

        this.goForward = function () {
            this.isClick = true;
            var forwardEvent = new Object();
            forwardEvent.which = this.RightArrowKey;
            this.transitionSlides(forwardEvent);
            this.isClick = false;
        }

        this.attachListeners = function () {
            //angular.element(document).bind('keydown', this.transitionSlides);
            $(document).keydown(jQuery.proxy(this.transitionSlides, this));
        };

        this.transitionSlides = function (evt) {
            var key = evt.which;
            if (key == this.RightArrowKey) {
                this.slideIndex = (this.DeckStateSlideIndex + 1) % this.DeckStateSize;
            }
            else if (key == this.LeftArrowKey) {
                this.slideIndex = this.DeckStateSlideIndex - 1;
                if (this.slideIndex < 0) {
                    this.slideIndex = this.DeckStateSize - 1;
                }
            }
            else if (key >= 96 && key <= 104) {
                this.slideIndex == null;
            }
            else if (key == this.EnterKey) {
                var go_page = $("#go_page").val();
                if (go_page <= this.total_page + 1 && go_page >= 1) {
                    go_page = go_page - go_page % 1;
                    this.slideIndex = go_page - 1;
                }
                else {
                    console.log('return');
                    return;
                }
            }
            if (this.slideIndex != null) {
                this.DeckStateSlideIndex = this.slideIndex;
                var winWidth = $(window).width();
                $('.slides').animate({left : -1 * this.slideIndex * winWidth});
                if (key == this.RightArrowKey || key == this.LeftArrowKey || key == this.EnterKey) {
                    if (!this.isClick) {
                        evt.stopPropagation();
                        evt.preventDefault();
                    }
                }
            }
            $("#current_page").html(this.slideIndex + 1);
        };
    });
})();
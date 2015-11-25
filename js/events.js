$(".anchor-link").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 70
     }, 300, function(){
   });
});
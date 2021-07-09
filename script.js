(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


$(function() {
  var $speed = 200;
  var $class = 'opened';
  var $class_open = '.faq-answer';

  $(document).ready(function() {
    $('.faq-question').on('click', function() {
      $ul = $(this).closest('ul');
      $answer = $(this).closest('li').find($class_open);

      if (!$(this).closest('li').hasClass($class)) {

        $ul.find('li').each(function() {
          if ($(this).hasClass($class))
            $(this).removeClass($class).find($class_open).slideUp($speed);
        });
      }

      $answer
        .slideToggle($speed)
        .closest('li')
        .toggleClass($class);
    });
  });
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.header-nightsky').slideDown(100);
  } else {
    $('.header-nightsky').slideUp(100);
  }

});



 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

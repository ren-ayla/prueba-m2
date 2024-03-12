$(document).ready(function() {
    $("#enviar").click(function() {
        alert("Su mensaje ha sido enviado. Gracias." );
    });
});

$(document).ready(function(){
    $("a").on('click', function(event) {

    if (this.hash !== "") { 
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 900, function(){
        window.location.hash = hash;
        });
      } 
    });
  });
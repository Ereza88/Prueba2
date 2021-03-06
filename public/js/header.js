// Menu scroll
var nav = $('nav');
pos = nav.offset();
 
// Esperamos al DOM
$(window).scroll(function(){
        // Anclamos el menú si el scroll es
        // mayor a la posición superior del tag
    if ( ($(this).scrollTop() >= pos.top)){
        // Añadimos la clase fixes al menú
        nav.addClass('fixed');
        // Añadimos la clase scrolling al contenido **
        $("#content-wrapper").addClass("scrolling");
        // Mostramos la sombre inferior del menú
        $( '#nav-shadow' ).show('size');
    // Eliminamos las clases para volver a la posición original
    } else if ( ($(this).scrollTop() <= pos.top)){
        // Elimina clase fixes
        nav.removeClass('fixed');
        // Elimina clase scrolling
        $("#content-wrapper").removeClass("scrolling");
        // Esconde la sombra
        $( '#nav-shadow' ).hide();
    }
});
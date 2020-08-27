$(document).ready(function () {
    //Efecto para flecha
    var header = $('#header').offset().top;
    $('#flecha-volver').on('click', function () {
        $('html, body').animate({
            'scrollTop': header
        },1500)
    });

    //Efecto para el nav:
    $('.menu a').each(function (index,elemento) {//a cada uno de los enlaces 
        $(this).css({
            'top': '-200px' //ponemos los enlaces arriba
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500)) //index empieza desde 0, luego 1 y así...
    }) 
    
    //Efecto para el header
    if($(window).width() > 800){
        $('header .textos').css({
            'opacity' : '0',
            'marginTop': '0'
        })

        $('header .textos').animate({
            'opacity' : '1',
            'marginTop': '-52px'
        }, 1500)
    }

    //Click en elementos para desplazarme a la sección

    var acercade = $('#acerca-de').offset().top,
        menu = $('#menu-carta').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function () {
        $('html, body').animate({
            'scrollTop': acercade
        }, 500)
    });

    $('#btn-menu').on('click', function () {
        $('html, body').animate({
            'scrollTop': menu
        },1000)
    });

    $('#btn-galeria').on('click', function () {
        $('html, body').animate({
            'scrollTop': galeria 
        }, 1500)
    });

    $('#btn-ubicacion').on('click', function () {
        $('html, body').animate({
            'scrollTop': ubicacion
        }, 2000)
    });
});
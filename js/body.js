function cambio_estilo(){
    //Obtener body por tag
    var fondo = document.body;
    //Alterar estilo fondo
    fondo.classList.toggle('estilo_body');

    //Obtener parrafo por ID
    var parrafo = document.getElementById('prf');
    //Aternar el estilo texto
    parrafo.classList.toggle('estilo_aternativo')

    //Obtener btn por tag
    var boton = document.getElementById('btn');
    //Alterar estilo btn
    boton.classList.toggle('estilo_btn')
}
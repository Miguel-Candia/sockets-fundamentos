var socket = io();

socket.on('connect', function(){
    console.log('conectado al servidor');
});
// escuchar
socket.on('disconnect', function() {

    console.log('perdimos conexcion con el servidor');

});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario:'Miguel',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('respuesta server:', resp);

});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

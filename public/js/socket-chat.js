var socket = io();

let params = new URLSearchParams( window.location.search);

if ( !params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario')
}

let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function( resp ){
        console.log('Usuarios conectados ', resp);
        
    })
}); 

// escuchar
socket.emit('disconnect');


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensajes', function(mensaje) {

    console.log(mensaje);

});

// Escuchar cambios de usuarios
//Cuando un usurario entra o sale del chat

socket.on('listaPersonas', function(personas) {
    console.log('Usuarios conectados', personas);
})

//Mensajes privados
socket.on('mensajePrivado', function(mensaje) {

    console.log('Mensaje Privado: ', mensaje);
    
})
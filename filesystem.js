const fs = require('fs');

function crearArchivo(nombre, contenido) {
    fs.writeFile(nombre, contenido, 'utf8', (error) => {
        if (error) { // {error: 'Todo salio mal'} | false | undefined
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}

function borrar() {

}

function editar() {

}

function leer(file) {
    fs.readFile(file, 'utf8', function(err, data){
        console.log(data);
    });    
}




// crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')
leer('ejercicio.txt');
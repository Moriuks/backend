// const { promises: fs } = require("fs");
const fs = require('fs')
const fsi = require('fs').promises

const readFile = (path, encode = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(path, encode, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (nombre,contenido)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(nombre, contenido, 'utf8', (error) => {
            if (error) { // {error: 'Todo salio mal'} | false | undefined
                console.error(error)
            } else {
                console.log('Se creo el archivo correctamente');
            }
        });
    })
}

const editFile = ()=>{
    return new Promise((resolve,reject)=>{
        
    })
}

const deleteFile = (name)=>{
    return new Promise((resolve,reject)=>{
        fs.rm(name, (err, data) => {
            if (err) reject(err)
            else resolve(`Borrado exitosamente`)
          })
    })
}


const run = async () => {
const file = await writeFile('test.txt','esto es una prueba'); 
// const res = await readFile('ejercicio.txt');
// const deletFile = await deleteFile('test.txt');
console.log(file)
}
// run()
async function execute (){
    try{
        const res = await fsi.mkdir('NewDir');
        fsi.readdir('NewDir');
        fsi.rmdir('NewDir');
    }catch(err){
        console.log(err);
    }
}
execute();

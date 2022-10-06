const fs = require('fs')

class Contenedor {
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
        const ruta = `./${this.nombreArchivo}.JSON`
        const data = "[]"
        fs.promises.
            writeFile(ruta, data)
            .then(()=> {console.log(`Tu archivo ${this.nombreArchivo} se creo correctamente`)})
            .catch((err)=> {console.log("Fallo la creacion del archivo: " + err)}) 
    }
    save(objeto){
        const ruta = `./${this.nombreArchivo}.JSON`
        fs.promises
            .readFile(ruta, "utf-8")
            .catch((err)=>{console.log("Fallo la lectura del archivo: " + err)})
            .then((output) => JSON.parse(output))
            .then((contenido) => {
                console.log(typeof(contenido))
                if(contenido.length === 0){
                    objeto.id = 1
                }else{
                    objeto.id = contenido[contenido.lentgh - 1].id + 1
                }
                const nuevoContenido = contenido.push(objeto)
                console.log(objeto)
                const contenidoGuardado = JSON.stringify(nuevoContenido)
                fs.writeFile(ruta, contenidoGuardado, (err, output) => {
                    if(err){
                        console.log("Error al guardar el objeto: " + err)
                    }else{
                        console.log(`Se guardo tu objeto con id ${objeto.id}`);
                    }
                })
            })    
    }
    getById(number){
        
    }
    getAll(){
        
    }
    deleteById(number){
        
    }
    deleteSAll(){
        
    }
}

prueba = new Contenedor("productos")

prueba.save({titulo: "producto1", price: 123})

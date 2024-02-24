const fs = require('fs');
const colors = require('colors');

const crearTablaTXT = async(base = 5, listar, hasta=10) => {//por defecto pongo base 5 si no es mandada en los parametros
    //En lugar de retornar una promesa usamos Async en la funcion y un bloque try catch para manejo de errores
    try{
        //Creacion de la tabla
        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta ; i++){
            consola +=`${colors.cyan(base)} ${colors.red('x')} ${colors.cyan(i)} ${colors.yellow('=')} ${base*i} \n`;
            salida +=`${base} x ${i} = ${base*i} \n`;
        }
      if(listar){
          console.log(colors.rainbow('==========================================='));
          console.log(`        Tabla del: `, base);
          console.log(colors.rainbow('==========================================='));
          console.log(consola);
      }

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
      
      return `tabla-${base}.txt`;
    }catch(err){
        throw err;//Llamamos el error de la promesa async
    }
}


//Exportacion de la funcion
module.exports = {
    crearTablaTXT //NO hacemos crearTableTXT: crearTablaTXT  ya que aplica redundancia al apuntar al mismo objeto
};
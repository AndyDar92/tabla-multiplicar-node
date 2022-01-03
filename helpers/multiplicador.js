
const fs = require('fs');


const crearArchivo = async (base = 5, listar, hasta) =>{
    
    try{
        const nameFile = `salida/tabla-${base}.txt`;
    
        let secuencia = '';
        for(let i= 1; i<= hasta; i++){
            secuencia += `${base} x ${ i } = ${ base*i }\n`;
        }
    
        if(listar){
            console.log('================================');
            console.log('Tabla de :', base);
            console.log('================================');
    
            console.log(secuencia);
        }

        
        fs.writeFileSync(nameFile, secuencia);
        
        return nameFile;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}

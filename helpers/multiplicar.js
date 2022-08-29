const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.yellow} ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(colors.green('========================'));
            console.log(`Tabla del ${base}`.red);
            console.log('========================'.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}
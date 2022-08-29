const {crearArchivo} = require('./helpers/multiplicar');
const {argv} = require('./yargs/yargs');

console.clear();

console.log(argv);

/*
console.log('========================');
console.log('Tabla del 5');
console.log('========================');
*/

//const [ , ,arg3 = 'base=5'] = process.argv;
//const [ , base] = arg3.split('=')

//const base = 4;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


/*
let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${base} X ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`tabla-${base}.txt creado`);
});
*/
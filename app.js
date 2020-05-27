const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        let base = argv.base;
        let limite = argv.limite;
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado:` + `${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log('Limite', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1]
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descricpion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return console.log(`La temperatura en ${coordenadas.direccionObtenida} es de ${temperatura} grados.`);

    } catch (err) {
        throw new Error(`No se pudo encontrar la temperatura para ${direccion}`);
    };

};

getInfo(argv.direccion);
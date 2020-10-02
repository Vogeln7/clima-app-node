const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodeURL}&key=656b12520c3b47e3ab40cfa082db8b1e`
    });

    const respuesta = await instance.get();

    if (respuesta.data.results.lenght === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    };

    const data = respuesta.data.results[0];
    const direccionObtenida = `${data.components.city} ${data.components.state} ${data.components.country}`;
    const latitud = data.geometry.lat;
    const longitud = data.geometry.lng;

    return {
        direccionObtenida,
        latitud,
        longitud
    };

};

module.exports = {
    getLugarLatLng
};
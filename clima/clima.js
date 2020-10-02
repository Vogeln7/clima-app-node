const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8f8b9fbce01d53966bb1144d2d0a52c1&units=metric`);

    return respuesta.data.main.temp;
};

module.exports = {
    getClima
};
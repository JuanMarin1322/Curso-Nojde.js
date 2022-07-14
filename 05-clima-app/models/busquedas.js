const axios = require('axios');

class Busquedas {


    historial = [];

    constructor () {
        

    }

    get paramasMapBox () {

        return {
                'access_token': process.env.MAPBOX_KEY,
                'limit': 5,
                'language': 'es'
        }
    }

    async ciudad ( lugar = '') {

        try {

            const intance = axios.create({
                baseURL:`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params : this.paramasMapBox
            });

            const resp = await intance.get();
            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Palmira.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoianVhbm1hcm5uIiwiYSI6ImNsNWtqZm8wMzBhbzMzamw2dGRtZ2t2cXAifQ.Elxjzws6ycUUSjI7ydrCJg')
            // console.log('Ciudad', lugar);
            return resp.data.features.map( lugar => ({

                    id: lugar.id,
                    nombre : lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1]
            }))
            
        } catch (error) {
            
        }
    }

}


module.exports = Busquedas;
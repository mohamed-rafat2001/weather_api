let request = require('request')
let pars_2 = (latitude, longtitude, callback) => {
    let url = 'http://api.weatherapi.com/v1/current.json?key=79f144f8677b4df5ad771700220809&q=' + latitude + ',' + longtitude
    request({ url, json: true }, (error, Response) => {
        if (error) {
            callback("url is undefined", undefined)
        }
        else if (Response.body.error) {
            callback(Response.body.error.message, undefined)

        }
        else {
            callback(undefined, Response.body.location.country + " the temp is " + Response.body.current.temp_c)
        }

    }
    )
}
module.exports = pars_2
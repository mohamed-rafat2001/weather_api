let request = require('request')
let pars1 = (country, callback) => {
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + country + '.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'
    request({ url, json: true }, (error, Response) => {
        if (error) {
            callback("url is undefined", undefined)
        }
        else if (Response.body.error) {
            callback(Response.body.error.message, undefined)

        }
        else {
            callback(undefined, { latitude: Response.body.features[0].center[1], longtitude: Response.body.features[0].center[0] })

        }

    }
    )
}
module.exports = pars1
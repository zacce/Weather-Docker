const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=67be5e78ab1f390022cfab7c8b68a0d5&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, (error, {body} ={} )=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + 
            " degrees out. But it feels like "+body.current.feelslike+". Humidity is "+body.current.humidity+" %")

        }
    })
}

module.exports = forecast

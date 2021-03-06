const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d6dc7aafa861048bc3b58aa23b2bc454&query=${latitude},${longitude}&units=f`

  request({url, json: true}, (error,{ body }) => {
    const { temperature, feelslike, weather_descriptions, wind_dir, wind_speed } = body.current
  if (error) {
    callback('Unable to connect to location services.', undefined)
  } else if (body.error) {
    callback('Unable to find a location. Try another search.', undefined)
  } else {
      const currentTemp = temperature
      const feelsLike = feelslike
      const description = weather_descriptions[0]
      callback(undefined,
        `${description}. It is currently ${currentTemp} degrees out. It feels like ${feelsLike} degrees out.
        The wind direction is ${wind_dir} at a speed of ${wind_speed}.`
      )
    }
  })
}

module.exports = forecast

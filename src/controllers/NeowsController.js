const { download } = require('express/lib/response')
const data = require('../data.json')

class NeowsController {
    index (req, res) {
        const asteroids = data.near_earth_objects
        const parsedAsteroidData = []
        
        for (let asteroid in asteroids) {
            asteroids[asteroid].map((value, index) => {
                const diameterMin = value.estimated_diameter.meters.estimated_diameter_min
                const diameterMax = value.estimated_diameter.meters.estimated_diameter_max
                
                const asteroid_average_size = diameterMin + diameterMax / 2

                const asteroidData = {
                    name: value.name,
                    absoluteMagnitude: value.absolute_magnitude_h,
                    estimatedAverageDiameterMeters: asteroid_average_size,
                    hazardousAsteroid: value.is_potentially_hazardous_asteroid,
                }

                parsedAsteroidData.push(asteroidData)
            })
        }

        return res.status(200).json(parsedAsteroidData)
    }
}

module.exports = new NeowsController()
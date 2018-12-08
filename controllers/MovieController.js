const Movie = require('../models/Movie')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Movie.find(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
        
    }
}
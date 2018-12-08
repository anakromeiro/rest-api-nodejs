const Actor = require('../models/Actor')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Actor.find(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
        
    }
}
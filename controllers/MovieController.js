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
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            Movie.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('The resource Movie/' + id + ' does not exists'))
            })
        })    
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Movie.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Movie.findByIdAndUpdate(id, params, {new: true})
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            Movie.findByIdAndRemove(id)
            .then(data => {
                resolve({id: id})
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
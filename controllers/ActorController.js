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
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            Actor.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('The resource Actor/' + id + ' does not exists'))
            })
        })        
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Actor.create(params)
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
            Actor.findByIdAndUpdate(id, params, {new: true})
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
            Actor.findByIdAndRemove(id)
            .then(data => {
                resolve({id: id})
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
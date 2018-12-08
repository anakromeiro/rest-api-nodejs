// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')
// const Actor = require('../models/Actor')
// const Movie = require('../models/Movie')

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	// index.js está exportando esses controladores
	const controller = controllers[resource]
	
	if (controller == null){
		res.json({
			confirmation: 'Fail',
			message: "Invalid request. Resource undefined."
		})
		return
	}

	controller.get()
	.then(data => {
		res.json({
			confirmation: 'Success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'Fail',
			message: err.message
		})
	})
})

// router.get('/movie', (req, res) => {
// 	Movie.find(null)
// 	.then(data => {
// 		res.json({
// 			confirmation: 'Success',
// 			data: data
// 		})
// 	})
// 	.catch(err => {
// 		res.json({
// 			confirmation: 'Fail',
// 			message: err.message
// 		})
// 	})
// })

// router.get('/actor', (req, res) => {
// 	Actor.find(null)
// 	.then(data => {
// 		res.json({
// 			confirmation: 'Success',
// 			data: data
// 		})
// 	})
// 	.catch(err => {
// 		res.json({
// 			confirmation: 'Fail',
// 			message: err.message
// 		})
// 	})
// })



module.exports = router
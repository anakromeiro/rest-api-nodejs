// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')
// const Actor = require('../models/Actor')
// const Movie = require('../models/Movie')

//GET with filters
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const filters = req.query
	// index.js está exportando esses controladores
	const controller = controllers[resource]
	
	if (controller == null){
		res.json({
			confirmation: 'Fail',
			message: "Invalid request. Resource undefined."
		})
		return
	}

	controller.get(filters)
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

//GET by ID
router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	// index.js está exportando esses controladores
	const controller = controllers[resource]
	
	if (controller == null){
		res.json({
			confirmation: 'Fail',
			message: "Invalid request. Resource undefined."
		})
		return
	}

	controller.getById(id)
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

//POST
router.post('/:resource', (req, res) => {
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

	controller.post(req.body)
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

//PUT
router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	// index.js está exportando esses controladores
	const controller = controllers[resource]
	
	if (controller == null){
		res.json({
			confirmation: 'Fail',
			message: "Invalid request. Resource undefined."
		})
		return
	}

	controller.put(id, req.body)
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

//DELETE
router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	// index.js está exportando esses controladores
	const controller = controllers[resource]
	
	if (controller == null){
		res.json({
			confirmation: 'Fail',
			message: "Invalid request. Resource undefined."
		})
		return
	}

	controller.delete(id)
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

module.exports = router
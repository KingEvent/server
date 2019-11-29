"use strict"

const router = require('express').Router();
const eventsController = require('../controllers/events.js')

//show all by location (params = dist, long, lat)
router.get('/', eventsController.showAll)

//show one (params = id), klik detail
router.get('/:id', eventsController.showOne)

//show all by location - filter by category (params = cat)
router.get('/categories/:cat', eventsController.filterCategory)

//show all by location - filter by category (params = date.start/date.end)
router.get('/times/:time', eventsController.filterTime)

//show all search by name
router.get('/search/:value', eventsController.search)

module.exports = router;
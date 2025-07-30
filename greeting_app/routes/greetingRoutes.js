const express = require('express')
const router = express.Router() // create a router object from express library

const greetingController = require('../controllers/greetingController')

router.get('/', greetingController.normalGreeting)
router.get('/formal', greetingController.formalGreeting)
router.get('/:name', greetingController.userGreeting)

module.exports = router
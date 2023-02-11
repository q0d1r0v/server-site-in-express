// imports
const express = require('express')


// pages
const indexPage = require('../pages/index')

// router
const router = express()

// use router
router.use('/', indexPage)

module.exports = router
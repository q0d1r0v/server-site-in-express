// imports
const {RateLimiterMemory} = require('rate-limiter-flexible')

// data
const options = {
    points: 6,
    duration: 1
}
const rateLimiter = new RateLimiterMemory(options)

// middleware
const middleWare = (req, res, next) => {
    rateLimiter.consume('').then((rateLimiterRes) => {
        console.log(rateLimiterRes)
        next()
    }).catch((e) => {
        console.log("catch")
        res.status(429).send({
            message: "Siz 5 sekuntdan keyin so'rov yuboraolasiz!"
        })
    })
}

module.exports = middleWare
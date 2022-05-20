const apiRoute = require('express').Router()
const envelopeRoute = require('./envelope');

apiRoute.use('/envelopes', envelopeRoute);


module.exports = apiRoute
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://carra:q1w2e3r4t5@ds163402.mlab.com:63402/raffle')
// Familia :  module.exports = mongoose.connect('mongodb://carra:q1w2e3r4t5@ds263832.mlab.com:63832/todolist')

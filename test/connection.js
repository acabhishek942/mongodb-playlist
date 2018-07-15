var mongoose = require('mongoose');

// connect to mongo db

mongoose.connect('mongodb://localhost/testdb');

mongoose.connection.once('open', function(){
  console.log('connection has been made, now make fireworks');
}).on('error', function(err){
  console.log('connection erroe', err);
});

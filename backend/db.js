var mongoose = require( 'mongoose' ); 

// Create the database connection 
mongoose.connect('mongodb://127.0.0.1:27017/UsuariosDB', { useNewUrlParser: true });

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection opened');
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 
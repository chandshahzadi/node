const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vu', ()=> {
    console.log('db connected on localhost');
  
});

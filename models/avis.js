var url = "mongodb://127.0.0.1:27017/GCP"; 
const mongoose = require('mongoose');

mongoose.connect(url);
const Aviscolllection = new mongoose.Schema({
    Nom: {
        type: String,
        required: true  
      },
    Email: {
        type: String,
        required: true,
        unique: true
      },
    Avis: {
        type: String,
        required: true
      },
});
  const MyModel2 = mongoose.model('Aviscolllection', Aviscolllection); 
  module.exports = MyModel2;
let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ibullreport:IBRpass2000@clusteribr.e4dky.mongodb.net/contact?retryWrites=true&w=majority", {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  subject:String,
  message:String,
})

module.exports = mongoose.model('ContactDetails', CustomerSchema);
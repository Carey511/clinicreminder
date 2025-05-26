const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  email: String,
  lastVisit: String,
  nextFollowUp: String,
  condition: String,
  doctor: String,
  priority: String,
  status: String,
  preferredContact: String
});
module.exports = mongoose.model('Patient', PatientSchema);
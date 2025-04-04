const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  hourlyRate: { type: String, required: true },
  dateOfJoining: { type: String, required: true },
  position: { type: String },
  salary: { type: Number },
});

module.exports = mongoose.model('Employee', EmployeeSchema);

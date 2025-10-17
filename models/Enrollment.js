const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  enrolledAt: { 
    type: Date, 
    default: Date.now 
  },
});

// To prevent a student from enrolling in the same course more than once,
// we create a unique compound index.
EnrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
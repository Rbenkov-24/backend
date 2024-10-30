import express from 'express';
import Student from '../models/student.model.js';

// Create a new router instance for handling student-related routes
const studentRouter = express.Router(); 

// Route to get all students
studentRouter.get('/', async (req, res) => {
  try {
    const students = await Student.find({}); // Fetch all students from the database
    res.json(students); // Send the list of students as a JSON response
  } catch (error) {
    // Send a 500 status code with an error message if fetching students fails
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// Route to add a new student
studentRouter.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body); // Create a new student from request body data
    await newStudent.save(); // Save the new student to the database
    res.status(201).json(newStudent); // Respond with a 201 status and the new student data
  } catch (error) {
    // Send a 400 status with an error message if saving the student fails
    res.status(400).json({ message: 'Error creating student', error: error.message });
  }
});

// Route to update an existing student by ID
studentRouter.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id, // Find the student by ID
      req.body, // Update with the data provided in request body
      { new: true } // Return the updated student document
    );
    res.json(updatedStudent); // Respond with the updated student data
  } catch (error) {
    // Send a 400 status with an error message if updating fails
    res.status(400).json({ message: 'Error updating student', error: error.message });
  }
});

// Route to delete a student by ID
studentRouter.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id); // Find and delete the student by ID
    res.json({ message: 'Student deleted successfully' }); // Respond with a success message
  } catch (error) {
    // Send a 400 status with an error message if deletion fails
    res.status(400).json({ message: 'Error deleting student', error: error.message });
  }
});
// Export the studentRouter to use in other parts of the application
export default studentRouter; 
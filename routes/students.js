import express from 'express';
import Student from '../models/student.model.js';

// Create a new router instance for handling student-related routes
const studentRouter = express.Router(); 

// Route to get all students
studentRouter.get('/', async (req, res) => {
  try {
    const students = await Student.find({}); // Fetch all students from the database
    res.json(students); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
});

// Route to add a new student; create and save to the database
studentRouter.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body); 
    await newStudent.save(); 
    res.status(201).json(newStudent); 
  } catch (error) {
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
    // Respond with the updated student data
    res.json(updatedStudent); 
  } catch (error) {
    res.status(400).json({ message: 'Error updating student', error: error.message });
  }
});

// Route to delete a student by ID
studentRouter.delete('/:id', async (req, res) => {
  try {
    // Find and delete the student by ID
    await Student.findByIdAndDelete(req.params.id); 
    res.json({ message: 'Student deleted successfully' }); 
  } catch (error) {
    res.status(400).json({ message: 'Error deleting student', error: error.message });
  }
});

// Export the studentRouter to use in other parts of the application
export default studentRouter; 
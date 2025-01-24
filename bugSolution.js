const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate user ID (e.g., check if it's a number and exists in the database)
  if (isNaN(userId) || !isValidUserId(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (rest of the user retrieval logic)
  .catch(error => {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  });
});

function isValidUserId(userId) {
  // Add your database query logic here to verify if the user ID exists
  // Return true if valid, false otherwise
  // Example (replace with your actual database interaction):
  return users.some(user => user.id === parseInt(userId));
}
const users = [
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"}
];
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

// Use the cors middleware to enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

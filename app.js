// server/app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, './public')));

// Sample routes
app.get('/users', (req, res) => {
    res.send('Get all users');
});

app.post('/users', (req, res) => {
    res.send('Create a new user');
});

app.get('/users/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});

app.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

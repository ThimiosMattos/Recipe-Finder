const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = 3000;

// Set up the PostgreSQL client
const pool = new Pool({
    user: 'postgres', // Your PostgreSQL username
    host: 'localhost',
    database: 'recipe_db',
    password: 'postgres', // Your PostgreSQL password
    port: 5432,
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle requests to the 'ikabro' directory
app.get('/ikabro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ikabro', 'ikabro.html'));
});

// Endpoint to fetch recipes
app.get('/recipes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM recipes');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching recipes:', err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
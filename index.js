// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Serve the form page
app.get('/', (req, res) => {
    res.render('form');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Do something with the form data, for example, log it
    console.log(`Received form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

    // Redirect back to the form page or any other page
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

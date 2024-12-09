const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Configure Express to look for views in the root directory
app.set('views', __dirname); // Set views to the root directory where index.ejs is located

// Serve the dynamic index.ejs page with appName
app.get('/', (req, res) => {
    console.log({ appName: process.env.APP_NAME });
    res.render('index', { appName: process.env.APP_NAME }); // Render index.ejs located in the root
});

console.log({ port }, { appName: process.env.APP_NAME });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

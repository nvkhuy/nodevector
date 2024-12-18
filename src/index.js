require('dotenv').config();
const express = require('express');
const app = express();

const port = 3000; // The port our server will run on inside the container

app.get('/', (req, res) => {
    res.send('Hello from Node.js inside Docker!');
});

app.get('/config', (req, res) => {
    // Return some environment variables as JSON
    const config = {
        apiKey: process.env.API_KEY,
        message: process.env.CUSTOM_MESSAGE
    };
    res.send(config);
});

app.listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});

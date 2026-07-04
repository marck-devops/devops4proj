const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('DevOps CI/CD Project Working. Marck completed this project!');
});

app.listen(3000, () => {
    console.log('Running on port 3000');
});

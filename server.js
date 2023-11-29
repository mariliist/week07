const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rke143Data = require('./data/nodejs.json');

app.use(bodyParser.json());

app.post('/rke143', (req, res) => {
    console.log('Recived data:', req.body);

    if (req.body.username !== 'rke' || req.body.password !== '143') {
        res.status(200).json({ message: 'invalid credentials' });
    } else {
        res.status(200).json({ rke143Data });
    }
});

app.listen(3000, () => {
    console.log('Server is running');
});

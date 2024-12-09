const express = require('express');
const bodyParser = require('body-parser');
const { validateForm } = require('./formValidator');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const formData = req.body;
    const validationResult = validateForm(formData);
    if (validationResult.isValid) {
        res.status(200).send('Form submitted successfully');
    } else {
        res.status(400).send(validationResult.errors);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    code parcer
});

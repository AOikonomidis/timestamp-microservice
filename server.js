const express = require('express');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

let app = express();

app.get('/', (req, res) => {
    let filename = path.join(__dirname, 'index.html');

    res.sendFile(filename, (err) => {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log(`Sent: ${fileName}`);
        }
    });
});

app.listen(port, () => console.log(`Started on port ${port}`));

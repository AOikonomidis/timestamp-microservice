const express = require('express');
const moment = require('moment');
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

app.get('/:date', (req, res) => {
    let date;

    if (/^\d{8,}$/.test(req.params.date)) {
        date = moment(req.params.date, 'X');
    } else {
        date = moment(req.params.date, 'MMMM DD, YYYY');
    }

    let info = date.isValid() ? {
        unix: date.format('X'),
        natural: date.format('MMMM DD, YYYY')
    } : {
        unix: null,
        natural: null
    };

    res.send(info);
});

app.listen(port, () => console.log(`Started on port ${port}`));

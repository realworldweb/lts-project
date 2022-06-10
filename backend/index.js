const express = require("express");

const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/data', (req, res) => {

    fs.readFile('./data.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
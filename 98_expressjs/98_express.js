const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
    // res.send('about')
})

app.get('/contact', (req, res) => {
    res.send('contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
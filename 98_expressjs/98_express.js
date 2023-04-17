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


// version: "3"
// services:
//     nginx:
//         image: "jc21/nginx-proxy-manager:latest"
//         container_name: nginx
//         restart: unless-stopped
//         ports:
//             -	"80:80" # Public HTTP Port
//             -	"443:443" # Public HTTPS Port
//             -	"81:81" # Admin Web Port
//         volumes:
//             -	./data:/data
//             -	./letsencrypt:/etc/letsencrypt
//     mario:
//         image: pengbai/docker-supermario
//         container_name: mario
//         ports:
//             - "8600:8080"


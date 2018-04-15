const express = require('express');
const app = express();



//3500-as porton figyel a server
app.listen(3500, () => console.log('Example app listening on port 3500!'))

//üzenet a 3500-as portra
app.get('/', (req, res) => res.send('Hello Family!'))

// válasz egy POST requestre
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

//válasz egy PUT requestre /user routnál
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

//válasz egy DELETE requestre /user routnál
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})
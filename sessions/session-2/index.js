const express = require('express');
const app = express();
const users = require('./routes/users');

// app.get('/', (req, res) => {
//     console.log("Req received: " + req);
//     res.send('Hi');
// });

// app.get('/users', (req, res) => res.send([{name: 'Faiza'}, {name: 'Aslam'}]));

app.use('/users', users);


app.listen(4000, () => console.log('Server running on port 4000'));
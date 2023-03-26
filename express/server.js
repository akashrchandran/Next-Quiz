const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 9000

// connection for mongoDB
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect to vocab:'));
db.on('connected', console.log.bind(console,'MongoDB connected to vocab:', db.name));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://next-quiz-nu.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use('/api', require('./route/request'))
//app.get('/', (req, res) => {
//  res.send('Expressive!')
//})


app.listen(port, () => {
 console.log(`Server Listening on ${port}`)
})
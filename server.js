const express = require('express');
const mongoose = require('mongoose');

const router = require('./router/user.router')

const app = express()

app.use(express.json())
app.use('/user', router);


app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})


mongoose.connect('mongodb://localhost:27017/exampleone', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connnected successfully')
}).catch(err => {
    console.error(err)
})

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'))

const start = async()=>{
    try {
        await mongoose.connect(
            'mongodb+srv://Admin:Qwerty!23@cluster0.xd19r.mongodb.net/todos',
            {
                useNewUrlParser:true, 
                useUnifiedTopology: true 
            }
        )
        console.log('Connect db success');
        app.listen(5050)
    } catch (error) {
        console.log(error);
    }
}

start()
    

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Router');
const cors = require('cors');



require('dotenv').config();

mongoose.set('strictQuery',false)


// tatyanachishkina
// cfnu36BXHQC77Jzj


const PORT = 7000 || process.env.port;
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connected to Mongo"))
.catch((err) => (console.log('err')))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I am listenning on port ${PORT}`)
})
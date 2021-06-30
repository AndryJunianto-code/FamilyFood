const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const foodRoutes = require('./routes/foodRoutes')

const app = express();
dotenv.config()

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    console.log('database connected')
}).catch((err)=> {
    console.log('error')
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT);
app.use(foodRoutes)


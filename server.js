const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')
const foodRoutes = require('./routes/foodRoutes')
const proxy = require('http-proxy-middleware')


const app = express();
app.use(cors())
dotenv.config()


module.exports = function(app) {
  // add other server routes to path array
  app.use(proxy({ target: 'http://localhost:5000' }));
} 

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
app.use("/api",foodRoutes)


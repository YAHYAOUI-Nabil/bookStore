const express =require('express')
const dotenv = require("dotenv").config()
const app = express()
const bodyPareser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const bookRoutes = require('./routes/bookRoutes')

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyPareser.json());

app.use('/api/bookstore/users', userRoutes)
app.use('/api/bookstore/books', bookRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

app.listen(port, () => console.log(`server started on port ${port}`))

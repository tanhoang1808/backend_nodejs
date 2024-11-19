require('dotenv').config()
const path = require('path')
const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT


//config template engine
configViewEngine(app)
app.use(expressLayouts);

//Get form input element
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Config layout template
app.set('layout', path.join(__dirname, 'views', 'layouts', 'layout')); // Layout mặc định

//Route 
app.use('/',webRoutes)





app.listen(port,()=>
{
    console.log(`App listening on port ${port}`)
})
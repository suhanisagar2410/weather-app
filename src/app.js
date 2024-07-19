const express = require ('express')
const path = require ('path')
const hbs = require('hbs')
const port = process.env.PORT || 3001
const app = express()
//public staticpath
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")
app.use(express.static(static_path))
app.set('view engine', 'hbs');
app.set('views',template_path)
hbs.registerPartials(partial_path)
app.get("/", (req, res) => {
    // res.send("Hey here is  my home page")
    res.render('index')
})
app.get("/about", (req, res) => {
    // res.send("Hey suhani is here.....ABOUT PAGE")
    res.render('about')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})
app.get("*", (req, res) => {
    // res.send("404 error page ")
    res.render('404',{
        errorMsg: "OOPS ! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
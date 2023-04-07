const express = require("express");
const app = express();
const path=require("path");
const hbs=require("hbs");
const port = process.env.PORT || 5000;
// Public static path 
const staticPath=path.join(__dirname, "../public");
const tempPath=path.join(__dirname, "../templates/views");
const partialsPath=path.join(__dirname, "../templates/partials");
// to use the handlebrs we have to set it
app.set("view engine","hbs");
app.set("views",tempPath);
// for using partials we have to register it
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
// Routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about/*",(req,res)=>{
    res.render('404err2',{
        errMsg:'Oops! About Page Not Found'
    })
});

app.get("/weather/*",(req,res)=>{
    res.render('404err2',{
        errMsg:'Oops! weather Page Not Found'
    })
});
// this * is for all the other routes
app.get("*",(req,res)=>{
    res.render("404error",{
        errMsg:'Oops! Page Not Found'
    })
});

app.listen(port,()=>{
    console.log(`Listening on the port ${port}...`);
});

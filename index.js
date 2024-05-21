const express = require("express");
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser");
const ejs = require ("ejs")


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));




const port = process.env.PORT || 5000;


let newItems =[];

app.get("/", (req, res) => {

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let newDay = today.toLocaleDateString("en-US", options)

   res.render("alllist",{Day:newDay,allItemsList:newItems})
});

app.post("/",(req,res)=>{
    let newItem = req.body.newItem;

    newItems.push(newItem)

    res.redirect ("/")
})

app.listen(port, () => {
    console.log(`Server is runing on ${port}`)
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('hbs');
const port = 200;
const pPath = path.join(__dirname,"./partials");
const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json());
//Setting View Engine
app.set('view engine','hbs');
hbs.registerPartials(pPath);

//Pubic Folder
app.use('/public',express.static(path.join(__dirname,'public')));

//Image Folder
app.use('/img',express.static(path.join(__dirname,'img')));

//PHP Folder
// app.use('/php',express.static(path.join(__dirname,'php')));

//Pages
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('*',(req,res)=>{
    res.render('404');
});

//Contact
app.post('/send', urlencodedParser ,(req,res)=>{
    const output=`
    <p>You Have Coontact Request</p>
    <h3>Contact Details Are :-</h3>
    <ul>
       <li>Name: ${req.body.name}</li>
       <li>E-mail: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.msg}</p>
    `;

    
});

//Listening To The Port
app.listen(port,()=>{
    console.log(`Listening To The Port ${port}`);
});
// browser
// router manges the request
// controller : performs action /operations
// views: html 
// model: database 
// contact-list in ram 
const path=require('path');
const express=require('express');
const port=8000;
const db = require('./config/mongoose');
const Contact=require('./model/contact');
const app=express();
// set up of views
// locals is a global object
// to render the data entered by user

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true })); 
// use: middleware : urlencoded: converts from browser form accessible (parser){key:value}converts
// app.use(function(req,res,next){
//     console.log("middleware 1",req.name);
//     next();
// })
// app.use(function(req,res,next){
//     console.log("middleware 2");
//     next();
// })
app.use(express.static('assets'));
var contactList=[{
    name: "sandeep",
    phone:9876543210
},{
    name: 'troy',
    phone: 9978768769
}
];

// app.get('/',function(req,res){
//    return res.render('home',{
//      'title':'Contact-Book',
//      contacts: contactList
//    })
// });
// app.get('/snap',function(req,res){
//     return res.render('snap',{
//      'title': "ejs render",
//       'contacts': contactList
//     })
//  });
// app.post('/contact-action',function(req,res){
//     // console.log(req.body)
//     contactList.push(req.body);
//     return res.redirect('/');
// });
app.post('/contact-action', async function (req, res) {
    try {
      const newContact = {
        name: req.body.name,
        phone: req.body.phone,
      };
  
      // Create a new Contact document and save it to the database
      const contact = new Contact(newContact);
      await contact.save();
      console.log(newContact)
      return res.redirect('/');
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).send('Error saving contact.');
    }
  });
// to get the data from the website particular use query params 
// using parms xyz/value
// app.get('/delete-contact/:phone',function(req,res){
//     let phone=req.params.phone;
//  });

//query
// app.get('/delete-contact/',function(req,res){
//     let phone=req.query.phone;
//     let contactIndex=contactList.findIndex(contacts=> contacts.phone ==phone);
//     if(contactIndex!=-1){
//         contactList.splice(contactIndex,1);
//     }
//     return res.redirect('back');
//  });

// Assuming you have already defined the Contact model and connected to the database

app.get('/delete-contact', async function (req, res) {
    const phoneNumber = req.query.phone;
  
    try {
      // Find the contact with the specified phone number and remove it from the database
      await Contact.findOneAndRemove({ phone: phoneNumber });
  
      return res.redirect('/');
    } catch (error) {
      console.error('Error deleting contact:', error);
      return res.status(500).send('Error deleting contact.');
    }
  });
  
// to render the data entered by user
// Fetch all the contacts from the database and render the homepage view
app.get('/', async function (req, res) {
    try {
      const contacts = await Contact.find({});
  
      res.render('home', { 
        'title':'Contact-Book',
        contact_list:contacts
       });
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).send('Error fetching contacts.');
    }
  });
  

// http req: get post } {put (modify data), patch (change content), delete }->ajax
app.listen(port,function(err){
    if(err){
        console.log("error",err);
        return;
    }else{
        console.log("sucess",port);
    }
});

// mongo db= collections->documents->fields
// odm(wrrapper)easy to use library or framework that allows developers to
//  interact with a MongoDB database using object-oriented programming 
//  popular ODMs for MongoDB include: Mongoose (for Node.js):
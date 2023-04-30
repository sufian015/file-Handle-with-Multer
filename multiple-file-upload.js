// Multiple file upload using DiskStorage engine (multer.array)
const express = require('express');
const app = express();
const helmet = require('helmet');
const multer = require('multer');


// middleware

app.use(helmet())
app.use(express.static('views'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Multiple file upload in multer

const storage=multer.diskStorage({

     destination:(req,file,callBack)=>{

          callBack(null,'./views');

     },

     filename:(req,file,callBack)=>{

          callBack(null,file.originalname);

     }


});


const upload=multer({storage}).array('photos',4);

app.post('/multiple', (req,res)=> {
     upload(req,res, (error)=> {
             if(error){
                 res.send("File Upload Fail")
             }
             else{
                 res.send("File Upload Success")
             }
     });
 });
 
 
 app.listen(5000)
 console.log("Server Run Success");


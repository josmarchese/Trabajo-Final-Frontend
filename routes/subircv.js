var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('subircv');
}); 

router.post('/', async (req, res, next) => {

  console.log(req.body) 
  
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var date = req.body.date;
    var address = req.body.address;
    var city = req.body.city;
    var country = req.body.country;
    var dni = req.body.dni;
    var centro = req.body.centro;
    var nivel = req.body.nivel;
    var título = req.body.título;
    var date2 = req.body.date2; 
    var date3 = req.body.date3;
    var check = req.body.check;
    var check2 = req.body.check2;
    var cargo = req.body.cargo; 
    var empresa = req.body.empresa; 
    var país = req.body.país;
    var tareas = req.body.tareas;

  
    var obj = {
    to: 'josefina.marchese@gmail.com',
    subject: 'Carga de CV',
    html: nombre + " " + apellido + address + " se contactó a través de Joma RRHH y envió los siguientes datos: " + "<br> " 
    + email + date + city + country + dni + centro + nivel + título + date2 + date3 + check + check2 + cargo + empresa + país + tareas     
  }
    
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); 
  
  var info = await transport.sendMail(obj);
  
  res.render('subircv', {
    message: 'Mensaje enviado correctamente' 
    });
    
     }); //cierra petición de POST



module.exports = router;

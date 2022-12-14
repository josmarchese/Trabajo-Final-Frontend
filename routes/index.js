var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

console.log(req.body) //estoy capturando datos? 

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
  to: 'josefina.marchese@gmail.com',
  subject: 'Contacto desde Joma RRHH',
  html: nombre + " " + apellido + " se contactó a través de Joma RRHH y quiere más información al siguiente correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje 
  
}
  
var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}) 

var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente', 
  });
  
   }); //cierra petición de POST

module.exports = router;

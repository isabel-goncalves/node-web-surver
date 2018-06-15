const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"))  //pôr as pastas onde esta o ficheiro para criar um rumo em vez de fazer o cdg da app de novo. dirname chama as pastas anteriores todas. Para ver essas pastas correr no terminal: pwd

app.get('/', (request, response)=> {
        response.render('template.hbs', {
            title:"Site",
            text: "Hello express!"
        });
});  

app.get('/about', (request, response)=> {
   response.render('template.hbs', {
       title: "About",
       text: "blablabla"
   });
   
   // response.send("<h1>About: <p> balblablabla</h1> </p>");
});

app.get('/carochao', (request, response)=> {
    var date = new Date().getHours().toString();
   console.log(date);


    var hora;

    if (date >= 6 && date <= 11) {
        hora = "Bom dia!";}
    if (date >= 12 && date <= 19) {
        hora = "Boa tarde!";}
    if (date >= 20 && date <= 5) {
        hora = "Boa noite!";}

    response.render('template.hbs', {
        title: "Current Time",
        text:  `${hora}`
    });
    
     

   // 
    //response.send( `<h1>Current Time</h1><p>${date}</p>`);   //toString é para ele nao achar que é um objeto
});


app.listen(3300);   //Nao podem haver muitos serviços a escutar a mesma porta!! 3000 é a porta que escuta
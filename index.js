
const Hapi = require('hapi');
const colors = require('colors')

//Setup
const Host = 'localhost';
const Port = 8008;


//Create Server
const Server  = Hapi.Server({
    host:Host,
    port:Port
})

//Routes
require('./routes/routes')(Server)


const init =  async () => {
    await Server.start();
    console.log(colors.green("Sever Running on port:"+ Port))
}



init();
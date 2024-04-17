import dotenv from 'dotenv';
// Inicializacion de variables de entorno
dotenv.config();
import Server from './classes/server';
import router from './routes/router';
// 
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Rutas hijas
import users from './routes/users.routes';
import roles from './routes/roles.routes';
import lineas from './routes/lineas.routes';
import articulos from './routes/articulos.routes';
import categorias from './routes/categorias.routes';
import listaprecios from './routes/listaprecios.routes';
import tipocliente from './routes/tipocliente.routes';
import cliente from './routes/cliente.routes';
import preciosxcliente from './routes/preciosxcliente.routes';
import ordentrabajo from './routes/ordentrabajo.routes';
import Ordendetalle from './routes/ordendetalle.routes';
import bom from './routes/bom.routes';
import bomdetalle from './routes/bomdetalle.routes';
import departamento from './routes/departamento.routes';
import planes from './routes/planes.routes';
import plandetalle from './routes/plandetalle.routes';
import materiales from './routes/materiales.routes';
import horashombre from './routes/horashombre.routes';
import almacenpt from './routes/almacenpt.routes';
import tipomovimientos from './routes/tipomovimientos.routes';
import almacenmovimientos from './routes/almacenmovimientos.routes';
import cierres from './routes/cierres.routes';
import ventas from './routes/ventas.routes';
import ventasdetalle from './routes/ventasdetalle.routes';
import ubicaciones from './routes/ubicaciones.routes';
import equipos from './routes/equipos.routes';
import programas from './routes/programas.routes';
import grupostrabajo from './routes/grupotrabajo.routes';
import reportes from './routes/reportes.routes';
import recursohumano from './routes/recursohumano.routes';
import avisostipo from './routes/tipo-avisos.routes';
import avisostatus from './routes/statusavisos.routes';
import avisos from './routes/avisos.routes';
import employee from './routes/employee.routes';
import progsemanal from './routes/progsemanal.routes';
import confirmacion from './routes/confirmacion.routes';
import progsemanaorden from './routes/progsemanaorden.routes';
import divisiones from './routes/divisiones.routes';
import evidencias from './routes/evidencias.routes';
import manuales from './routes/manuales.routes';
import login from './routes/login.routes';
import fileUpload from 'express-fileupload';
import path from 'path';



// BodyParser 
const server = Server.instance;
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', (express.static('public', { redirect: false })));






server.app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))



// Rutas de servicios
server.app.use('/api', router);
server.app.use('/api', users);
server.app.use('/api', roles);
server.app.use('/api', lineas);
server.app.use('/api', articulos);
server.app.use('/api', categorias);
server.app.use('/api', listaprecios);
server.app.use('/api', tipocliente);
server.app.use('/api', cliente);
server.app.use('/api', preciosxcliente);
server.app.use('/api', ordentrabajo);
server.app.use('/api', Ordendetalle);
server.app.use('/api', bom);
server.app.use('/api', bomdetalle);
server.app.use('/api', departamento);
server.app.use('/api', planes);
server.app.use('/api', plandetalle);
server.app.use('/api', materiales);
server.app.use('/api', horashombre);
server.app.use('/api', almacenpt);
server.app.use('/api', tipomovimientos);
server.app.use('/api', almacenmovimientos);
server.app.use('/api', cierres);
server.app.use('/api', ventas);
server.app.use('/api', ventasdetalle);
server.app.use('/api', ubicaciones);
server.app.use('/api', equipos);
server.app.use('/api', programas);
server.app.use('/api', grupostrabajo);
server.app.use('/api', reportes);
server.app.use('/api', recursohumano);
server.app.use('/api', avisostipo);
server.app.use('/api', avisostatus);
server.app.use('/api', avisos);
server.app.use('/api', employee);
server.app.use('/api', progsemanal);
server.app.use('/api', confirmacion);
server.app.use('/api', progsemanaorden);
server.app.use('/api', divisiones);
server.app.use('/api', evidencias);
server.app.use('/api', manuales);
server.app.use('/api', login);



server.app.use('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../public/index.html' ));
    });


server.start(() => {
    console.log(`✅  Server online in port ${server.port}`);
});


//create   services,details 
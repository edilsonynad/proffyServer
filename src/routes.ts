import express from 'express'
import ClassesController from './controllers/ClassesController';
import Connectioncontroller from './controllers/ConnectionController';
import db from './database/connection';
import convertHourToMin from './utils/convertHourToMin';

const routes = express.Router()

const classesController = new ClassesController;
const connectioncontroller = new Connectioncontroller;

//Classes routes
routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

//Connections routes
routes.get('/connections', connectioncontroller.index);
routes.post('/connections', connectioncontroller.create);
export default routes;
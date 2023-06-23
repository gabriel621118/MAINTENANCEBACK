
import { Request, Response } from 'express';
import Almacenmovimientos from '../models/almacenmovimientos.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/almacenmovimientos', (_req: Request, res: Response) => {
    Almacenmovimientos.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

export default app; // el export debe ir despues de las funciones
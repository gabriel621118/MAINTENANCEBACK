
import { Request, Response } from 'express';
import Horashombre from '../models/horashombre.model';


import { router as app } from './router';
const { Op } = require("sequelize");


app.get('/horashombre', (_req: Request, res: Response) => {
    Horashombre.findAll({ })
        .then((data) => res.json({ ok: true, data }))
        .catch((err) => res.status(400).json({ ok: false, err }));
});

export default app; // el export debe ir despues de las funciones
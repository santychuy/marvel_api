import express, { Application, json, urlencoded, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import config from './config';
import colaboratorsRoutes from './routes/colaborators.routes';
import charactersRoutes from './routes/characters.routes';
import { error404 } from './helpers/errorHandlers';

const {
  APP: { NODE_ENV },
} = config;

const app: Application = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
if (NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/marvel/colaborators', colaboratorsRoutes);
app.use('/marvel/characters', charactersRoutes);
app.use((_req, res: Response) => res.status(404).send(error404('Invalid Request')));

export default app;

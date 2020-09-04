/* import { RequestHandler } from 'express';
import { client } from '../database';

export const cacheStrange: RequestHandler = (_req, res, next): void => {
  client.get('Sports', (err, data) => {
    if (err) throw err;
    if (data !== null) {
      const sports = JSON.parse(data);
      res.status(200).json(sports);
    } else {
      next();
    }
  });
};

export const cacheIronMan: RequestHandler = (_req, res, next): void => {}; */

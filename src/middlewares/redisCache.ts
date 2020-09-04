import { RequestHandler } from 'express';
import Client from '../database';

export const cacheColaborations: RequestHandler = (req, res, next): void => {
  const {
    params: { character },
  } = req;

  Client.get(`${character}Colabs`, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      const json = JSON.parse(data);
      res.status(200).json(json);
    } else {
      next();
    }
  });
};

export const cacheCharacters: RequestHandler = (req, res, next): void => {
  const {
    params: { character },
  } = req;

  Client.get(`${character}Characters`, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      const json = JSON.parse(data);
      res.status(200).json(json);
    } else {
      next();
    }
  });
};

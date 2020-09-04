/* eslint-disable comma-dangle */
import { Request, Response } from 'express';
import axios from 'axios';

import FillMarvelURL from '../helpers/fillMarvelURL';

export const ironManColaborators = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const url = FillMarvelURL('characters/1009368');

  const response = await axios.get(url);

  const { status, data } = response;
  return res.status(status).json(data);
};

export const capAmericaColaborators = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const url = FillMarvelURL('characters/1009220');

  const response = await axios.get(url);

  const { status, data } = response;
  return res.status(status).json(data);
};

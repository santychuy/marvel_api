/* eslint-disable comma-dangle */
import { Request, Response } from 'express';
import axios from 'axios';

import FillMarvelURL from '../helpers/fillMarvelURL';
import { error400 } from '../helpers/errorHandlers';

export const ironManCharacters = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const url = FillMarvelURL('characters/1009368');

    const response = await axios.get(url);

    const { status, data } = response;
    return res.status(status).json(data);
  } catch (e) {
    return res.status(400).json(error400(e.message));
  }
};

export const capAmericaCharacters = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const url = FillMarvelURL('characters/1009220');

    const response = await axios.get(url);

    const { status, data } = response;
    return res.status(status).json(data);
  } catch (e) {
    return res.status(400).json(error400(e.message));
  }
};

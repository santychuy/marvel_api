/* eslint-disable comma-dangle */
import { Request, Response } from 'express';
import axios from 'axios';

import FillMarvelURL from '../helpers/fillMarvelURL';
import { error400 } from '../helpers/errorHandlers';
import { formatJSONColaborators } from '../helpers/formatJSON';

export const ironManColaborators = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const url = FillMarvelURL('comics?characters=1009368');

    const response = await axios.get(url);

    const { status, data } = response;

    const {
      data: { results },
    } = data;

    const json = formatJSONColaborators(results);

    return res.status(status).json(json);
  } catch (e) {
    return res.status(400).json(error400(e.message));
  }
};

export const capAmericaColaborators = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const url = FillMarvelURL('comics?characters=1009220');

    const response = await axios.get(url);

    const { status, data } = response;

    const {
      data: { results },
    } = data;

    const json = formatJSONColaborators(results);

    return res.status(status).json(json);
  } catch (e) {
    return res.status(400).json(error400(e.message));
  }
};

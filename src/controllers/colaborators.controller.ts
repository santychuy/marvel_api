import { Request, Response } from 'express';
import axios from 'axios';

import Client from '../database';
import FillMarvelURL from '../helpers/fillMarvelURL';
import { error400, error404 } from '../helpers/errorHandlers';
import { formatJSONColaborators } from '../helpers/formatJSON';
import ValidCharacter from '../helpers/validCharacterId';

export default async (req: Request, res: Response): Promise<Response> => {
  const {
    params: { character },
  } = req;

  const { characterId, valid } = ValidCharacter(character);

  if (valid) {
    try {
      const url = FillMarvelURL(`comics?characters=${characterId}`);

      const response = await axios.get(url);

      const { status, data } = response;

      const {
        data: { results },
      } = data;

      const json = formatJSONColaborators(results);
      const textJson = JSON.stringify(json);

      Client.setex(`${character}Colab`, 3600, textJson);
      return res.status(status).json(json);
    } catch (e) {
      return res.status(400).json(error400(e.message));
    }
  } else {
    return res.status(404).json(error404('Character Id Invalid'));
  }
};

import { Request, Response } from 'express';
import axios from 'axios';

import FillMarvelURL from '../helpers/fillMarvelURL';
import { error400, error404 } from '../helpers/errorHandlers';
import ValidCharacter from '../helpers/validCharacterId';
import { formatJSONCharacters } from '../helpers/formatJSON';

export default async (req: Request, res: Response): Promise<Response> => {
  const {
    params: { character },
  } = req;

  const { characterId, valid } = ValidCharacter(character);

  if (valid) {
    try {
      const url = FillMarvelURL(`comics?sharedAppearances=${characterId}`);

      const response = await axios.get(url);

      const { status, data } = response;

      const {
        data: { results },
      } = data;

      const json = formatJSONCharacters(results);

      return res.status(status).json(json);
    } catch (e) {
      return res.status(400).json(error400(e.message));
    }
  } else {
    return res.status(404).json(error404('Character Id Invalid'));
  }
};

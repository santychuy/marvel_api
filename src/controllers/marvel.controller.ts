import { Request, Response } from 'express';

export const getColaborators = (req: Request, res: Response): Response => {
  const { character } = req.params;

  return res.status(200).json({ character });
};

export const getRelatedCharacters = (req: Request, res: Response): Response => {
  const { character } = req.params;

  return res.status(200).json({ character });
};

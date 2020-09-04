import { Router } from 'express';

import { getColaborators } from '../controllers/marvel.controller';

const router = Router();

router.get('/colaborators/:character', getColaborators);

export default router;

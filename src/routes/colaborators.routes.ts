import { Router } from 'express';

import GetColaborators from '../controllers/colaborators.controller';

const router = Router();

router.get('/:character', GetColaborators);

export default router;

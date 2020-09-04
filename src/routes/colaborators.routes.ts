import { Router } from 'express';

import { cacheColaborations } from '../middlewares/redisCache';
import GetColaborators from '../controllers/colaborators.controller';

const router = Router();

router.get('/:character', cacheColaborations, GetColaborators);

export default router;

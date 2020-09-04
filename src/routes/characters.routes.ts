import { Router } from 'express';

import { cacheCharacters } from '../middlewares/redisCache';
import GetRelatedCharacters from '../controllers/characters.controller';

const router = Router();

router.get('/:character', cacheCharacters, GetRelatedCharacters);

export default router;

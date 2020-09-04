import { Router } from 'express';

import GetRelatedCharacters from '../controllers/characters.controller';

const router = Router();

router.get('/:character', GetRelatedCharacters);

export default router;

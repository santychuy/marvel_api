import { Router } from 'express';

import {
  capAmericaCharacters,
  ironManCharacters,
} from '../controllers/characters.controller';

const router = Router();

router.get('/ironman', ironManCharacters);
router.get('/capamerica', capAmericaCharacters);

export default router;

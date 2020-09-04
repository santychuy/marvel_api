import { Router } from 'express';

import {
  ironManColaborators,
  capAmericaColaborators,
} from '../controllers/colaborators.controller';

const router = Router();

router.get('/ironman', ironManColaborators);
router.get('/capamerica', capAmericaColaborators);

export default router;

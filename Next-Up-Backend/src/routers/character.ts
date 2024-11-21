import { Router } from 'express';
import * as CharacterController from '../controllers/character';

const router = Router();

router.post('/new-character', CharacterController.createCharacter);

export default router;

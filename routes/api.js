import { Router } from 'express';
import { apiController } from '../controllers/api.controller.js'
import { validateId } from '../middleware/validateId.js'
import { checks } from '../middleware/checks.js';
import { validateChecks } from '../middleware/validateChecks.js';

const router = Router();
const { apiGet, apiPost, apiPut, apiDelete, apiGetPokemons } = apiController

router.get('/info', apiGet)
router.get('/pokemons', apiGetPokemons)
router.post('/create', checks, validateChecks, apiPost)
router.put('/update/:id', validateId, checks, validateChecks, apiPut)
router.delete('/delete/:id', validateId, apiDelete)

export default router;
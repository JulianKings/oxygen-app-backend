import express from 'express';
import { delete_unit, get_units, post_add_unit } from '../controllers/unitController';

var router = express.Router();

router.get('/', get_units);
router.post('/add', post_add_unit);
router.delete('/delete', delete_unit);

export default router;
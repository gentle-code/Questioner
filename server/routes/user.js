import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('auth/sign-in');

export default router;

import { Router } from 'express';
import { createUser, getUser } from '../controllers/users';
import { acceptPayment } from '../transaction/AcceptPayment';
import { verifyPayment } from '../transaction/VerifyPayment';

const router = Router();

router.post('/register', createUser);

router.post('/login', getUser);

router.post('/checkout_items', acceptPayment);

router.get('/verify_payment', verifyPayment);

export default router;

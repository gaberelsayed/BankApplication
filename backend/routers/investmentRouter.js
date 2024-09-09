import express from 'express';
import { investInLoan, getLenderInvestments } from '../controllers/investmentController.js';
// import { authenticate } from '../middleware/authenticate.js';

const router = express.Router();

// // Authenticate all routes
// router.use(authenticate);

// Route to invest in a loan
router.post('/', investInLoan);

// Route to get all investments for a lender
router.get('/', getLenderInvestments);

export default router;

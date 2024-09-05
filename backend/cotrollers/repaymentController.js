import Repayment from '../models/repayment.model.js';

export const getRepayments = async (req, res) => {
    try {
        const lenderId = req.user.id; // Assuming req.user contains the authenticated user
        const repayments = await Repayment.findAll({
            where: { lenderId },
        });
        res.status(200).json(repayments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch repayments.' });
    }
};

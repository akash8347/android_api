const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Add Transaction
router.post('/add', async (req, res) => {
 const { amount, account, category, date, note, type } = req.body;
 try {
     const transaction = new Transaction({ amount, account, category, date, note, type });
     await transaction.save();
     res.json(transaction);
 } catch (err) {
     console.error(err.message);
     res.status(500).send('Server error');
 }
});

// Get All Transactions
router.get('/', async (req, res) => {
 try {
     const transactions = await Transaction.find();
     res.json(transactions);
 } catch (err) {
     console.error(err.message);
     res.status(500).send('Server error');
 }
});

module.exports = router;
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Маршрут  баланса
router.post('/set-balance', async (req, res) => {
    try{
        const { initialBalance } = req.body;

    if( !initialBalance || typeof initialBalance === 'number' || initialBalance < 0) {
        return res.status(400).json({message: 'Initial balance is invalid, please enter positive numbe'});
    }
    const user = new User({
        initialBalance,
        currentBalance: initialBalance,
        transactions: [],
    });
    await user.save();

    res.status(201).json({message: 'User created successfully', user});

    } catch (error) {
        res.status(500).json({message: 'Error with creating user', });
    }
});

// Маршрут для пополнения баланса
router.post('/add-balance', async (req, res) => {
    try{
        const { userId, amount } = req.body;

        if(!amount || !userId || typeof amount !== 'number' || amount <= 0 ) {
            return res.status(400).json('Incorrect data')
        }
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }
        user.currentBalance += amount

        user.transactions.push({
            type: 'income',
            amount,
            date: new Date()
        });
        await user.save();

        res.status(200).json({
            message: 'Balance updated successfully',
            user: {
                id: user._id,
                currentBalance: user.currentBalance,
                transactions: user.transactions[user.transactions.length -1]
            }
        })
    } catch (error) {
        res.status(500).json({error: 'Server error'})
    }
})

// Маршрут pеализации добавления расходов
router.post('/add-expense', async (req, res) => {
    try{
        const { userId, amount } = req.body;

        if(!amount || !userId || typeof amount !== 'number' || amount <= 0 ) {
            return res.status(400).json('Incorrect data')
        }

        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({message: 'User not found'});
        }

        user.currentBalance -= amount

        user.transactions.push({
            type: 'expense',
            amount,
            date: new Date()
        });
        
        await user.save();

        res.status(200).json({
            message: 'Balance updated successfully',
            user: {
                id: user._id,
                currentBalance: user.currentBalance,
                transactions: user.transactions[user.transactions.length -1]
            }
        })
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }
});

// Маршрут для pеализация просмотра баланса и истории транзакций
router.get('/balance', async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'userId is required.' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    return res.status(200).json({
      currentBalance: user.currentBalance,
      transactions: user.transactions,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Server error', details: error.message });
  }
});


export default router;
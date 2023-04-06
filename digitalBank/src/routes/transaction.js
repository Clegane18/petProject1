const express = require ('express');
const router = express.Router();
const customers = require ('../index');

// Deposit
router.post('/api/deposit/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');
    
    depositAmount = req.body.depositAmount;
    customer.currentBalance += depositAmount;
    res.send(`Deposit successful. New balance is ${customer.currentBalance}.`);
  });

  // Withdraw
router.post('/api/withdraw/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');
    
    withdrawAmount = req.body.withdrawAmount;
    customer.currentBalance -= withdrawAmount;
    if(withdrawAmount > customer.currentBalance) return res.status(400).send('Not enough balance!');
    else res.send(`Withdraw successful. New balance is ${customer.currentBalance}`);
  });


//Check balance
router.get('/api/balance/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');
    
    res.send(`Customer: ${customer.name}\nYour current balance is: ${customer.currentBalance}`);
});

module.exports = router;
const express = require('express');
const app = express();

const customers = [
    {id: 1,  name: 'John Ross Rivera',     currentBalance: 5000},
    {id: 2,  name: 'John Llyod Dela Cruz', currentBalance: 1000},
    {id: 3,  name: 'Alden Vallestero',     currentBalance: 999999}
];

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const userRouter = require ('./routes/user'); 
const transactionRouter = require ('./routes/transaction');
module.exports = customers;
// "test": "echo \"Error: no test specified\" && exit 1"


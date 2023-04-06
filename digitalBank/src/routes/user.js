const express = require ('express');
const router = express.Router();
const Joi = require ('joi');
const customers = require ('../index');

app.use(express.json());

//Home page
router.get('/', (req, res) => {
    res.send('Digital Bank');
});

//Customer
router.get('/api/customers', (req, res) => {
    res.send(customers);
});

//to add another customer
router.post('/api/customers', (req, res)=>{
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send( error.details[0].message);
  
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        currentBalance: req.body.currentBalance,
    };
    customers.push(customer);
    res.send(customer);
}); 

//Update customer
router.put('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');

    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
        
    customer.name = req.body.name;
    res.send(customer);
});

//To delete
router.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');

    const index = customers.indexOf(customer); 
    customers.splice(index, 1);

    res.send(customer); 
});

//validation
function validateCustomer (customer) {
    const schema = {
        name: Joi.string().min(3).required(),
        currentBalance: Joi.number().min(0).required(),
        accountNo: Joi.number().min(10).required(),
    };

    return Joi.validate(customer, schema);
}

//Find customer using ID
router.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt((req.params.id)));
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer); 
 });
 app.use('/api/customers');
 
 module.export = router;
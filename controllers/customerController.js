const Customer = require('../models/customer');

const customer_create = async (req, res) => {

    console.log(req.body);


    let customer = await new Customer({ name: req.body.name, RTN: req.body.rtn, contact: req.body.salutation });
    await customer
        .save()
        .then((customer) => {
            res.send(customer);
        })
        .catch(function (err) {
            res.status(422).send("customer add failed");
        });
};

const getCustomers = async (req, res) => {

    Customer.find(function (err, customers) {
        res.json(customers);
    }).populate({
        path: 'invoices',
        // Get friends of friends - populate the 'friends' array for every friend
        populate: { path: 'invoices' }
    });;
}


module.exports = {
    customer_create,
    getCustomers
}

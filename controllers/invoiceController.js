const Invoice = require('../models/invoice');

const invoice_create = async (req, res) => {

    console.log(req.body);


    let invoice = await new Invoice({ invoiceNumber: req.body.invoiceNumber, invoiceDate: req.body.invoiceDate, customerID: req.body.customer, amountDue: req.body.total, status: 'unpaid' });
    await invoice
        .save()
        .then((invoice) => {
            res.send(invoice);
        })
        .catch(function (err) {
            res.status(422).send("invoice add failed");
        });
};

const getInvoice = async (req, res) => {
    Invoice.find(function (err, invoice) {
        res.json(invoice);
    }).populate('customerID');
}


module.exports = {
    invoice_create,
    getInvoice
}
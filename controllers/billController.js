const Bill = require('../models/bill');

const bill_create = async (req, res) => {

    console.log(req.body);


    let bill = await new Bill({ status: 'unpaid', date: req.body.billDate, vendorID: req.body.vendor, total: req.body.subTotal, currency: req.body.currency });
    await bill
        .save()
        .then((bill) => {
            res.send(bill);
        })
        .catch(function (err) {
            res.status(422).send("bill add failed");
        });
};

const getBills = async (req, res) => {
    Bill.find(function (err, bills) {
        res.json(bills);
    }).populate('vendorID');
}


module.exports = {
    bill_create,
    getBills
}

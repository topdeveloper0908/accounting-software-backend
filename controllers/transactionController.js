const Transaction = require('../models/transaction');

const transaction_create = async (req, res) => {

    console.log(req.body);
    let status = 'completed';

    let transaction = await new Transaction({
        type: req.body.type,
        account: req.body.account,
        category: req.body.category,
        date: req.body.Date,
        description: req.body.description,
        status: status,
        amount: req.body.amount
    });
    await transaction
        .save()
        .then((transaction) => {
            res.send(transaction);
        })
        .catch(function (err) {
            res.status(422).send("transaction add failed");
        });
};

const getTransactions = async (req, res) => {

    Transaction.find(function (err, transactions) {
        res.json(transactions);
    });
}


module.exports = {
    transaction_create,
    getTransactions
}

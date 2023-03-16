const Account = require('../models/account');

const account_create = async (req, res) => {

    console.log(req.body);


    let account = await new Account({ type: req.body.type, parent: req.body.parent, name: req.body.name, description: req.body.description });
    await account
        .save()
        .then((account) => {
            res.send(account);
        })
        .catch(function (err) {
            res.status(422).send("account add failed");
        });
};

const getAccounts = async (req, res) => {

    Account.find(function (err, accounts) {
        res.json(accounts);
    });
}


module.exports = {
    account_create,
    getAccounts
}

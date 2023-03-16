const Business = require("../models/business");
const User = require("../models/user");

const business_create = async (req, res) => {
    console.log(req.body);

    let business = await new Business({ companyName: req.body.name, currency: req.body.currency, owner: req.body.user });

    await business
        .save()
        .then((business) => {
            res.send(business);
        })
        .catch(function (err) {
            res.status(422).send("business add failed");
        });

};

module.exports = {
    business_create
};

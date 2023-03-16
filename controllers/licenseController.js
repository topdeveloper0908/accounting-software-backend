const License = require('../models/license');

const license_create = async (req, res) => {

    console.log(req.body);


    let license = await new License({ CAI: req.body.CAI, firstInvoice: req.body.firstInvoice, lastInvoice: req.body.lastInvoice, expireDate: req.body.expireDate });
    await license
        .save()
        .then((license) => {
            res.send(license);
        })
        .catch(function (err) {
            res.status(422).send("license add failed");
        });
};

const getLicense = async (req, res) => {
    License.find(function (err, license) {
        res.json(license);
    });
}


module.exports = {
    license_create,
    getLicense
}
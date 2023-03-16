const Vendor = require('../models/vendor');

const vendor_create = async (req, res) => {

    console.log(req.body);


    let vendor = await new Vendor({ name: req.body.name, email: req.body.email, tax: req.body.tax });
    await vendor
        .save()
        .then((vendor) => {
            res.send(vendor);
        })
        .catch(function (err) {
            res.status(422).send("vendor add failed");
        });
};

const getVendors = async (req, res) => {
    Vendor.find(function (err, vendors) {
        res.json(vendors);
    });
}


module.exports = {
    vendor_create,
    getVendors
}

const Product = require('../models/product');

const product_create = async (req, res) => {

    console.log(req.body);


    let product = await new Product({ name: req.body.name, description: req.body.description, price: req.body.price, option: req.body.option, tax: req.body.tax });
    await product
        .save()
        .then((product) => {
            res.send(product);
        })
        .catch(function (err) {
            res.status(422).send("product add failed");
        });
};

const getProducts = async (req, res) => {

    Product.find(function (err, products) {
        res.json(products);
    });
}


module.exports = {
    product_create,
    getProducts
}

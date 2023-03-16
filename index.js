require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const businessRoutes = require("./routes/businessRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const licenseRoutes = require("./routes/licenseRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const billRoutes = require("./routes/billRoutes");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const cookieParser = require('cookie-parser')

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
connection();

// middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use((req, res, next) => {
// 	res.locals.path = req.path;
// 	next();
// });

// routes
app.use("/api/users", userRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/customer", customerRoutes);
app.use('/api/license', licenseRoutes);
app.use('/api/invoice', invoiceRoutes);
app.use("/api/product", productRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/bill", billRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/transaction", transactionRoutes);

//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

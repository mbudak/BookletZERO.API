const express = require('express')


let indexRouter = require("../routes/index");
// var categoriesRouter = require("../routes/category");

module.exports = function(app: any) {
    app.use(express.json());
    app.use("/", indexRouter);
    // app.use("/categories", categoriesRouter);
};


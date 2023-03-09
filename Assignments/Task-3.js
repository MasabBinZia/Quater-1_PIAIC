"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
var dis_cal = function () {
    var prod_price = parseFloat(prompt("Product Price: "));
    var dis_per = parseFloat(prompt("Discount Percentage: "));
    if (dis_per >= 50) {
        console.log("Invalid discount percentage");
        return;
    }
    var dis_amt = prod_price * (dis_per / 100);
    var final_price = prod_price - dis_amt;
    console.log("Original Price: ".concat(prod_price));
    console.log("Discount Percentage: ".concat(dis_per));
    console.log("Discount Amount: ".concat(dis_amt));
    console.log("Final Price: ".concat(final_price));
};
dis_cal();

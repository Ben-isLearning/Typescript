"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_js_1 = __importDefault(require("./products.js"));
let productName = "tote bag";
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = "123 First St, Madeupistan";
const product = products_js_1.default.filter((product) => product.name === productName)[0];
if (product.preOrder === "true") {
    console.log("We'll let you know when its on the way!");
}
if (Number(product.price) > 25) {
    shipping = 0;
    console.log("This item qualifies for free shipping");
}
else {
    shipping = 5;
    console.log("The shipping charge for this item is $5");
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
    //console.log(taxPercent);
}
else {
    taxPercent = 0.05;
    //console.log(taxPercent);
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);

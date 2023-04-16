"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myCallBack1(text) {
    console.log(`Purchased  ${text}`);
}
function myCallBack2(text) {
    console.log(`Purchased  ${text}`);
}
function myCallBack3(text) {
    console.log(`Purchased  ${text}`);
}
function callingFunction1(intialText, callback) {
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText);
    callingFunction1("Pizza", myCallBack2);
}
function callingFunction2(intialText, callback) {
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText);
    callingFunction1("Pizza", myCallBack3);
}
function callingFunction3(intialText, callback) {
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(intialText);
}

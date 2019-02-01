const userActions = require("./userActions");
const addressActions = require("./adrressActions");
const foodActions = require("./foodActions");
const restaurantsActions = require("./restaurantsActions");
const orderActions = require("./ordersActions");
const authActions = require("./authActions");

module.exports={
    ...userActions,
    ...addressActions,
    ...foodActions,
    ...restaurantsActions,
    ...orderActions,
    ...authActions
}
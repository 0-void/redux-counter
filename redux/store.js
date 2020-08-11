const { createStore } = require("redux");

const counterReducer = require("./counterStore/reducer");

const store = createStore(counterReducer);

module.exports = store;

const { ADD, INCREAMENT, DECREAMENT, SUBSTRACT } = require("./actions");

module.exports.increamentAction = () => {
  return {
    type: INCREAMENT,
  };
};
module.exports.decreamentAction = () => {
  return {
    type: DECREAMENT,
  };
};
module.exports.addAction = (value) => {
  return {
    type: ADD,
    payload: value,
  };
};

module.exports.substractAction = (value) => {
  return {
    type: SUBSTRACT,
    payload: value,
  };
};

const { ADD, INCREAMENT, DECREAMENT, SUBSTRACT } = require("./actions");

const initialState = {
  count: 0,
};

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case INCREAMENT:
      return { count: state.count + 1 };
    case DECREAMENT:
      return { count: state.count - 1 };
    case ADD:
      return { count: state.count + action.payload };
    case SUBSTRACT:
      return { count: state.count - action.payload };
  }
  return state;
};

const store = require("./redux/store");
const { consoleLogger, fileLogger } = require("./logger/log4js.config");
const {
  addAction,
  substractAction,
  increamentAction,
  decreamentAction,
} = require("./redux/counterStore/actionCreators");

const unsubscribe = store.subscribe(() => consoleLogger.info(store.getState()));

store.dispatch(increamentAction());
store.dispatch(increamentAction());
store.dispatch(decreamentAction());
store.dispatch(addAction(10));
store.dispatch(substractAction(20));
store.dispatch(substractAction(20));

unsubscribe();

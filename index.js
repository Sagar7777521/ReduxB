const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreatore = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICREAM_REASTOCKED = "ICREAM_REASTOCKED ";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function icecreamOrdered() {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
}

function icecreamRestocked(qty) {
  return {
    type: ICREAM_REASTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICREAM_REASTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(1));

const actions = redux.bindActionCreators(
  { orderCake, restockCake, icecreamOrdered, icecreamRestocked },
  store.dispatch
);
actions.orderCake();
actions.restockCake(10);
actions.icecreamOrdered();
actions.icecreamRestocked(10);

unsubscribe();

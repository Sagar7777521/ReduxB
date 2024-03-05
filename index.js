const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators; // Bind Actio Creator (To Bind all of the Actions in Reducers )
const combineReducers = redux.combineReducers; // Combine Reducers to combine all States of mutiple  Reducers into one State

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICREAM_REASTOCKED = "ICREAM_REASTOCKED ";

// Action  Creators of Cake State
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

// Action  creator for Icecream state
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

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

// Initial State of Each the Redux Store

// Cake Store
const initialCakeState = {
  numOfCakes: 20,
};

// Icecream Store
const initialIcecreamState = {
  numOfIceCream: 20,
};

// Individual  Reducer  Functions of Cake
const cakeReducer = (state = initialCakeState, action) => {
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

    default:
      return state;
  }
};

// Individual  Reducer  Functions of Icecream

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
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

// Combining all reducers (i.e Cake Reducer and Icecream Reducer into Root Reducer)

const rootReducer = combineReducers({
  cake: cakeReducer,
  icream: icecreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(1));

// Defining Actions  for Icecream and Cake using Bind Action Creators
const actions = redux.bindActionCreators(
  { orderCake, restockCake, icecreamOrdered, icecreamRestocked },
  store.dispatch
);
actions.orderCake();
actions.restockCake(10);
actions.icecreamOrdered();
actions.icecreamRestocked(20);

unsubscribe();

const redux = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Sagar",
  address: {
    street: "A-34 Hindustan Antibiotics Colony",
    city: "Pune",
    state: "Maharashtra",
  },
};

const STREE_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREE_UPDATED,
    payload: street,
  };
}

const streetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREE_UPDATED:
      //   return {
      //     ...state,
      //     adress: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default: {
      return state;
    }
  }
};

const store = redux.createStore(streetReducer);
console.log("Intial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(updateStreet("New Updated Address1323232"));
unsubscribe();

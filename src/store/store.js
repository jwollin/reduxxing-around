export const initialState = {
  count: 0
};

export function reducer(state = initialState, action) {
  console.log("STATE IS: ", state);

  switch (action.type) {
    case 'INCREMENT':
      return { ...state.count + 1 };
    case 'DECREMENT':
      return state.count - 1;
    default:
      return state;
  }
}
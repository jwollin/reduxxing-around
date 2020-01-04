export const initialState = {
  count: 0
};

export function reducer(state = initialState, action) {
  const { count } = state;

  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      return count;
  }
}
const initialState = {
  events: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_EVENT': {
      return [...state.events, state.event]
    }

    default: {
      return state
    }
  }
}

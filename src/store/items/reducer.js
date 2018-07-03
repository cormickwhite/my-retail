const initialState = {
  item: {}
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ITEM': {
      const { payload } = action;

      const newState = {
        ...state,
        item: payload
      };

      return newState;
    }

    default:
      return initialState;
  }
}

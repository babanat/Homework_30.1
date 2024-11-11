import { FETCH_CHARACTER_SUCCESS, CLEAR_DATA } from './actions';

const initialState = {
  characters: [], 
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_SUCCESS:
      return { ...state, characters: [...state.characters, action.payload] };
    case CLEAR_DATA:
      return { ...state, characters: [] };
    default:
      return state;
  }
};

export default characterReducer;


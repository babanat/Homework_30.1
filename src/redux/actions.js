import axios from 'axios';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchCharacterSuccess = (character) => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: character,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const fetchCharacter = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`);
    dispatch(fetchCharacterSuccess(response.data));
  } catch (error) {
    console.error("Ошибка при получении данных о персонаже", error);
  }
};


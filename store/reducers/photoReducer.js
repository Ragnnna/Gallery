import { FETCH_PHOTO_SUCCESS } from "../contants"

const initialState = {
  photo: []
}

export const photoReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTO_SUCCESS:
      return { ...state, photo: [...action.payload] }
    default:
      return state
  }
}
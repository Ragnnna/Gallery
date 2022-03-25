import { LOADING_START, LOADING_STOP } from "../contants"

const initialState = {
  loading: false
}

export const loaderReducer = (state = initialState, action) => {
  switch(action.type){
    case LOADING_START:
      return { ...state, loading: true }
    case LOADING_STOP:
      return { ...state, loading: false }
    default:
      return state
  }
}
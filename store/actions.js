import { FETCH_PHOTO_SUCCESS, LOADING_START, LOADING_STOP } from "./contants"

const fetchPhotoSuccess = photo => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: photo
})

const startLoading = () => ({type: LOADING_START})
const stopLoading = () => ({type: LOADING_STOP})

export const fetchPhoto = () => {
  return async (dispatch) => {
    try {
      dispatch(startLoading())
      const response = await fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043')
      const data = await response.json()
      dispatch(fetchPhotoSuccess(data))
      dispatch(stopLoading())
    } catch (e) {
      return e
    }
  }
}
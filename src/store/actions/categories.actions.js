import { categoriesActionTypes } from '../../constants'
import { categoriesService } from '../../services'

export const handleGetCategories = () => async(dispatch, getState) => {
    dispatch({ type: categoriesActionTypes.REQUEST_GET_CATEGORIES })
    const result = await categoriesService.getCategories()
    dispatch({ type: categoriesActionTypes.REQUEST_GET_CATEGORIES_FINISHED, payload: result, error: result.error })
}
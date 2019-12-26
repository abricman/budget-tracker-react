import { categoriesActionTypes } from '../../constants'

const INITIAL_STATE = []

export default (categories = INITIAL_STATE, action = {}) => {
    if (action.error) return categories
    
    switch (action.type) {
        case categoriesActionTypes.REQUEST_GET_CATEGORIES_FINISHED: 
            return action.payload
        default: 
            return categories
    }
}
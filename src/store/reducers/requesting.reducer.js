const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action = {}) => {
    const isRequestType = action.type.includes('REQUEST_')
  
    if (isRequestType === false) {
        return state
    }
  
    const isFinishedRequestType = action.type.includes('_FINISHED')
    const requestName = action.type.replace('_FINISHED', '')
  
    return {
        ...state,
        [requestName]: isFinishedRequestType === false,
    }
}
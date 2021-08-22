const initState = {
  appLoaded: false
}

const defaultReducer = (
  state = initState,
  action: any
) => {
  switch(action.type) {
    case 'APP_LOADED':
      console.log('app loaded reduder, ', action.payload)
      return { ...state, appLoaded: action.payload}
    default:
      console.log('reducer default')
      return state
  }
}

export default defaultReducer
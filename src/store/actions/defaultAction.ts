

const defaultAction = (actionType: string, appLoaded: boolean) => {
  if (actionType === 'APP_LOADED') {
    console.log('action case')
    return {
      type: 'APP_LOADED',
      payload: appLoaded
    }
  }
  console.log('action default')
  return {
    type: actionType
  }
}

export default defaultAction
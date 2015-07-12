import * as constants from '../constants'

const initialState = {
  scanner: '',
  bg: 'TEST'
}

const actionsMap = {
  [constants.SET_SCANNER]: (state, action) => ({ scanner: action.scanner }),
  [constants.SET_BG]: (state, action) => ({ bg: action.bg })
}

export default function filters (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action))
}

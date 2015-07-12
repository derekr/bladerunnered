import * as constants from '../constants'

export function init () {
  return dispatch => {
    type: constants.INIT_FILTERS
  }
}

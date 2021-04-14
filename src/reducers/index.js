import { combineReducers } from 'redux'
import tpss from './tpss'
import paslons from './paslons'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    tpss,
    paslons,
    form: formReducer
})
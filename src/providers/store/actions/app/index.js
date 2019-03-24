import { MutationTypes, ActionTypes } from '../../constants'

export default {
    [ActionTypes.APP_MULTIPLY] : ({ commit }, arg) => setTimeout(_ => commit(MutationTypes.APP_MULTIPLY, arg), 1000)
}
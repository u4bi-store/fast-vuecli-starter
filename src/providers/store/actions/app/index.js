import { MutationTypes, ActionTypes } from '../../constants'

export default {
    [ActionTypes.APP_MULTIPLY_ACTION] : ({ commit }, arg) => setTimeout(_ => commit(MutationTypes.APP_Multiply_MUTATION, arg), 1000)
}
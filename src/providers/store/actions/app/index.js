import { MutationTypes, ActionTypes } from '../../constants'

export default {
    [ActionTypes.APP_MULTIPLY] : async ({ commit }, arg) => {

        const asyncFunc = arg => new Promise(resolve => setTimeout(_ => resolve(arg), 1000))

        const data = await asyncFunc(arg)

        commit(MutationTypes.APP_MULTIPLY, data)

    }
}
import { MutationTypes } from '../../constants'

export default {
    [MutationTypes.APP_MULTIPLY] : ({ app }, arg) => app.tick *= arg 
}
import { MutationTypes } from '../../constants'

export default {
    [MutationTypes.APP_Multiply_MUTATION] : ({ app }, arg) => app.tick += arg 
}
import { GetterTypes } from '../../constants'

export default {
    [GetterTypes.APP_GET_TICK] : ({ app }) => app.tick
}
import { GetterTypes } from '../../constants'

export default {
    [GetterTypes.APP_TICK_GETTER] : ({ app }) => app.tick
}
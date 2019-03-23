<template>
    <div id='app'>
        <Card title="A title" />

        <h5>mapState - tick : {{ tick }}</h5>
        <h5>mapGetters - appTickGetter : {{ appTickGetter }}</h5>

        <button @click="appMultiplyMutation(tick)">appMultiplyMutation</button>
        <button @click="appMultiplyAction(appTickGetter)">appMultiplyAction</button>

        <router-view />

    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { MutationTypes, ActionTypes, GetterTypes } from './providers/store/constants'

import Card from './components/Card.vue'

export default {
    name: 'app',
    components: {
        Card
    },
    methods: {
        ...mapMutations([ MutationTypes.APP_Multiply_MUTATION ]),
        ...mapActions([ ActionTypes.APP_MULTIPLY_ACTION ])
    },
    computed: {
        ...mapGetters([ GetterTypes.APP_TICK_GETTER ]),
        ...mapState({
            tick : ({ app }) => app.tick
        })
    },
    mounted: () => {
        console.log('mounted event')
    }
}
</script>

<style lang='scss'>
#app {

}
</style>

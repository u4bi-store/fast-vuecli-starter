<template>
    <div id='app'>
        <Card title="A title" />

        <h5>mapState - tick : {{ tick }}</h5>
        <h5>mapGetters - getTick : {{ getTick }}</h5>

        <button @click="handleMutation(2)">handleMutation</button>
        <button @click="handleAction(2)">handleAction</button>

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
        ...mapMutations({
            handleMutation : MutationTypes.APP_MULTIPLY
        }),
        ...mapActions({ 
            handleAction : ActionTypes.APP_MULTIPLY
        })
    },
    computed: {
        ...mapGetters({
            getTick : GetterTypes.APP_GET_TICK
        }),
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

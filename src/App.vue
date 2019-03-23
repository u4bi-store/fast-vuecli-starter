<template>
    <div id='app'>
        <Card title="A title" />

        <router-view />

    </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
name: 'app',
    components: {
        Card
    }
}
</script>

<style lang='scss'>
#app {

}
</style>

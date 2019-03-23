<template>
    <div class='card'>
        <h5>Card {{ title }}</h5>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String
    }
}
</script>

<style scoped>
h5 {
    color: red;
}
</style>

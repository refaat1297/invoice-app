<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <button @click="showMessage">click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        showMessage () {
        }
    }
}
</script>

<style scoped>

</style>

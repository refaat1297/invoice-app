<template>
    <div style="margin-bottom: 4rem">
        <h1>invoices head</h1>
        <button class="btn btn-primary" @click="getInvoicesData">new invoice</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: "InvoicesHead",
    methods: {
        ...mapActions(['getInvoicesData'])
    }
}
</script>

<style scoped>

</style>

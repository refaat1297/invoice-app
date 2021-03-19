<template>
    <section class="invoices">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-11">
                    <AppInvoicesHead />

                    <AppInvoiceCard v-for="invoice in invoices" :key="invoice.id" :invoice="invoice" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState(['invoices'])
    }
}
</script>

<style lang="scss" scoped>
.invoices {
    padding: 5rem 0;
}
</style>

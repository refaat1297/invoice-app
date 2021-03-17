<template>
    <section class="invoice-card">
        <div class="id">#{{ invoice.id }}</div>
        <div class="date">{{ invoice.invoice_date }}</div>
        <div class="clientName">{{ invoice.bill_to.clientName }}</div>
        <div class="total">$14,800,88</div>
        <div class="status">
            <button class="btn btn-primary">{{ invoice.invoice_status }}</button>
        </div>
        <div class="link">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    name: "InvoiceCard",
    props: {
        invoice: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>

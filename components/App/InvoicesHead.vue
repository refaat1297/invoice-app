<template>
    <div style="margin-bottom: 4rem">
        <h1>invoices head</h1>
        <button class="btn btn-primary" @click="addNewInvoice">new invoice</button>
    </div>
</template>

<script>
export default {
    name: "InvoicesHead",
    methods: {
        async addNewInvoice () {
            const newInvoice = {
                "payment_terms": 'net_70_days',
                "name": "test",
                "bill_from": {
                    "city": "new city",
                    "street": "new street",
                    "country": "new country",
                    "postCode": "new post code"
                },
                "bill_to": {
                    "clientName": "new name",
                    "clientEmail": "newemail@email.com",
                    "city": "new city",
                    "street": "new street",
                    "country": "new country",
                    "postCode": "new post code",
                },
                "invoice_date": "03/12/2021",
                "project_description": "new description",
                "item_list": [
                    {
                        "price": 200,
                        "total": 400,
                        "itemName": "Banner Design",
                        "quantity": 2
                    },
                    {
                        "price": 34,
                        "total": 55,
                        "itemName": "Banner Design",
                        "quantity": 5
                    },
                ]
            }

            try {
                await this.$axios.$post('https://a-invoice-app-refaat.herokuapp.com/invoices', newInvoice)
                    .then(res => {
                        console.log(res)
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <h1>{{ $route.params.id }}</h1>
        <button @click="deleteInvoiceHandler">
            <span v-if="loading">loading</span>
            <span v-else>click me</span>
        </button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data () {
        return {
            loading: false
        }
    },
    methods: {
        ...mapActions(['deleteInvoice']),
        async deleteInvoiceHandler () {
            this.loading = true
            await this.deleteInvoice(this.$route.params.id)
                .then(() => {
                    this.$router.push('/')

                    this.$notify({
                        message: "Invoice deleted successfully..",
                        type: "success",
                        top: true,
                        bottom: false,
                        left: false,
                        right: true
                    })

                    this.loading = false

                })

        }
    }
}
</script>

<style scoped>

</style>

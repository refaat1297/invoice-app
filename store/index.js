import $axios from '@nuxtjs/axios'

export const state = () => ({
    invoices: []
})

export const getters = {

}

export const mutations = {
    UPDATE_INVOICES (state, invoices) {
        state.invoices = invoices
    }
}

export const actions = {
    async getInvoicesData ({ state, commit }, ctx) {
        if (state.invoices.length) return

        try {
            await this.$axios.get('https://a-invoice-app-refaat.herokuapp.com/invoices')
                .then(res => commit('UPDATE_INVOICES', res.data))
        } catch (error) {
            console.log(error)
        }
    }
}

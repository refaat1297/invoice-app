// import {db} from '@/plugins/firebase'


export const state = () => ({
    invoices: [],
})

export const getters = {
    invoicesCount (state) {
        return state.invoices.length
    }
}

export const mutations = {
    UPDATE_INVOICES (state, invoices) {
        state.invoices = invoices
    },
}

export const actions = {
    async getInvoicesData ({ state, commit }, ctx) {
        if (state.invoices.length) return

        try {
            await this.$axios.$get('https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices.json')
                .then(response => {
                    let invoices = Object.entries(response).map(invoice => {
                        return Object.assign({}, invoice[1], {
                            id: invoice[0]
                        })
                    })

                    commit('UPDATE_INVOICES', invoices)
                })
        } catch (error) {
            console.log(error)
        }
    },
    async addNewInvoice ({ state, commit }, payload) {
        try {
            await this.$axios
                .$post('https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices.json', payload)
                .then(response => {
                    commit('UPDATE_INVOICES', [
                        ...state.invoices,
                        {
                            ...payload,
                            response
                        }
                    ])
                })
        } catch (error) {
            console.log(error)
        }
    },
    async updateInvoice ({ state, commit }, {id, payload}) {
        try {
            await this.$axios
                .$put(`https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices/${id}.json`, payload)
                .then(response => {

                    let invoices = state.invoices.map(invoice => {
                        if (invoice.id !== id) {
                            return invoice
                        } else {
                            return Object.assign({}, payload, {
                                id: id
                            })
                        }
                    })

                    commit('UPDATE_INVOICES', invoices)
                })
        } catch (error) {
            console.log(error)
        }
    },
    async deleteInvoice ({ state, commit }, id) {
        try {
            await this.$axios.$delete(`https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices/${id}.json`)
                .then(res => {
                   let invoices = state.invoices.filter(invoice => invoice.id !== id)
                    commit('UPDATE_INVOICES', invoices)
                })
        } catch (error) {
            console.log(error)
        }
    }
}

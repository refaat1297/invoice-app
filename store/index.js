import $axios from '@nuxtjs/axios'

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
            await this.$fire.firestore.collection('invoices')
                .get()
                .then(snapShot => {
                    let invoices = snapShot.docs.map(doc => {
                        return Object.assign({}, doc.data(), {
                            id: doc.id
                        })
                    })

                    commit('UPDATE_INVOICES', invoices)
                })
            // await this.$axios.get('https://a-invoice-app-refaat.herokuapp.com/invoices')
            //     .then(res => commit('UPDATE_INVOICES', res.data))
        } catch (error) {
            console.log(error)
        }
    },
    async addNewInvoice ({ state, commit }, payload) {
        try {
            await this.$fire.firestore.collection('invoices').add(payload).then(docRef => {
                const newInvoice = Object.assign({}, payload, {
                    id: docRef.id
                })

                commit('UPDATE_INVOICES', [
                    ...state.invoices,
                    newInvoice
                ])
            })
        } catch (error) {
            console.log(error)
        }
    },
    async updateInvoice ({ state, commit }, {id, payload}) {
        try {
            await this.$fire.firestore.collection('invoices').doc(id).update(payload)
        } catch (error) {
            console.log(error)
        }
    }
}

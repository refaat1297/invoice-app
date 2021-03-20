<template>
    <div class="invoice-page">
       <div class="container">
           <div class="row">
               <div class="col-12 col-lg-11" >
                   <div class="invoice-head">
                       <h2>
                           <span>#</span><span>{{ this.$route.params.id }}</span>
                       </h2>

                       <div class="actions">
                           <nuxt-link :to="`/invoice/${$route.params.id}/edit`">Edit</nuxt-link>
                           <button @click="deleteInvoiceHandler">
                               <b-spinner
                                   v-if="loading"
                                   variant="white"
                               ></b-spinner>
                               <span v-else>delete</span>
                           </button>
                       </div>
                   </div>

               </div>
           </div>
       </div>
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

<style lang="scss" scoped>
.invoice-page {
    padding: 5rem 0;

    .invoice-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        h2 {
            margin-bottom: 0;

            span {
                &:first-of-type {
                    font-size: 2rem;
                    color: var(--gray-color);
                }

                &:last-of-type {
                    text-transform: uppercase;
                    font-size: 1.5rem;
                }
            }
        }

        .actions {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            a {
                height: 50px;
                background-color: #252946;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                user-select: none;
                cursor: pointer;
                width: 110px;
                text-decoration: none;
                border-radius: 25px;
                text-transform: capitalize;
            }


            button {
                width: 110px;
                height: 50px;
                background-color: #ff4757;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 25px;
                user-select: none;
                cursor: pointer;
                border: none;
                text-transform: capitalize;
                margin-left: .5rem;

                &:focus {
                    outline: none;
                }
            }
        }
    }
}
</style>

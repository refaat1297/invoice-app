<template>
    <section class="invoices-head">
        <div class="info">
            <h2>Invoices</h2>
            <p>there are {{ invoicesCount }} total invoices</p>
            <p>{{ invoicesCount }} invoices</p>
        </div>
        <div class="actions">
            <nuxt-link to="/new" class="new-invoice">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                <p>new <span>invoice</span></p>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "InvoicesHead",
    computed: {
        ...mapGetters(['invoicesCount'])
    },
    methods: {
        ...mapActions(['getInvoicesData'])
    }
}
</script>

<style lang="scss" scoped>
.invoices-head {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-transform: capitalize;

    .info {
        h2 {
            font-size: 1.9rem;

            @media (max-width: 767px) {
                font-size: 1.6rem;
            }
        }

        p {
            font-size: .7rem;
            color: #CECFE3;
            display: none;
            margin-bottom: 0;

            &:first-of-type {
                @media (min-width: 768px) {
                    display: block;
                }
            }

            &:last-of-type {
                @media (max-width: 767px) {
                    display: block;
                }
            }
        }
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .new-invoice {
            color: var(--main-color);
            background-color: #7C5DF9;
            padding: .5rem .7rem;
            border-radius: 2rem;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            @media (max-width: 767px) {
                padding: .3rem .5rem;
            }

            &:focus {
                outline: none;
            }

            svg {
                width: 35px;
                height: 35px;

                @media (max-width: 767px) {
                    width: 30px;
                    height: 30px;
                }
            }

            p {
                display: inline-block;
                margin-left: .4rem;
                font-size: 1rem;
                text-transform: capitalize;
                margin-bottom: 0;

                @media (max-width: 767px) {
                    font-size: .9rem;
                }

                span {
                    @media (max-width: 767px) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div class="new-invoice">
        <div class="container" >
            <div class="row justify-content-center">
                <div class="col-12 col-lg-11" v-if="Object.keys(selectedInvoice).length > 0">
                    <h2 class="invoice-title">
                        edit <span>#</span><span>{{ $route.params.id }}</span>
                    </h2>

                    <form @submit.prevent="submitForm">

                        <div class="form-section">
                            <h3>bill from</h3>

                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="bill_from_street">Street</label>
                                        <input type="text" class="form-control" id="bill_from_street"
                                               v-model="$v.selectedInvoice.billFrom.street.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_city">city</label>
                                        <input type="text" class="form-control" id="bill_from_city"
                                               v-model="$v.selectedInvoice.billFrom.city.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_post_code">post code</label>
                                        <input type="text" class="form-control" id="bill_from_post_code"
                                               v-model="$v.selectedInvoice.billFrom.postCode.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_country">country</label>
                                        <input type="text" class="form-control" id="bill_from_country"
                                               v-model="$v.selectedInvoice.billFrom.country.$model">
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="form-section">
                            <h3>bill to</h3>

                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_client_name">client name</label>
                                        <input type="text" class="form-control" id="bill_to_client_name"
                                               v-model="$v.selectedInvoice.billTo.clientName.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_client_email">client email</label>
                                        <input type="email" class="form-control" id="bill_to_client_email"
                                               v-model="$v.selectedInvoice.billTo.clientEmail.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_street">street</label>
                                        <input type="text" class="form-control" id="bill_to_street"
                                               v-model="$v.selectedInvoice.billTo.street.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_city">city</label>
                                        <input type="text" class="form-control" id="bill_to_city"
                                               v-model="$v.selectedInvoice.billTo.city.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_post_code">post code</label>
                                        <input type="text" class="form-control" id="bill_to_post_code"
                                               v-model="$v.selectedInvoice.billTo.postCode.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_country">country</label>
                                        <input type="text" class="form-control" id="bill_to_country"
                                               v-model="$v.selectedInvoice.billTo.country.$model">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_invoice_date">invoice date</label>
                                        <date-picker class="form-control" id="bill_to_invoice_date" v-model="$v.selectedInvoice.billTo.invoiceDate.$model" valueType="format"></date-picker>

<!--                                        <input type="text" class="form-control" id="bill_to_invoice_date"-->
<!--                                               v-model="$v.selectedInvoice.billTo.invoiceDate.$model">-->
                                    </div>
                                </div>

                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="bill_to_project_description">project description</label>
                                        <input type="text" class="form-control" id="bill_to_project_description"
                                               v-model="$v.selectedInvoice.billTo.projectDescription.$model">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>item list</h3>
<!--                            <pre style="color: #fff">-->
<!--                                {{ // (Object.keys($v.selectedInvoice.itemList.$each.$iter).map((key) => {return [Number(key), $v.selectedInvoice.itemList.$each.$iter[key]] }))[0].quantity }}-->
<!--                            </pre>-->

                            <div class="row align-items-center" v-for="(item,k) in $v.selectedInvoice.itemList.$each.$iter" :key="k">
                                <div class="col-12 col-md-6 col-lg-5">
                                    <div class="form-group">
                                        <label for="item_name">item name</label>
                                        <input type="text" class="form-control" id="item_name" v-model="item.name.$model"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-2">
                                    <div class="form-group">
                                        {{item.quantity.integer}}
                                        <label for="item_quantity">Qty.</label>
                                        <input type="text" class="form-control" id="item_quantity"
                                               v-model.number="item.quantity.$model"/>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-2">
                                    <div class="form-group">
                                        <label for="item_price">price</label>
                                        <input type="text" class="form-control" id="item_price" v-model="item.price.$model"/>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-2">
                                    <div class="form-group">
                                        <label for="item_total">total</label>
                                        <input type="text" disabled class="form-control disabled" id="item_total" :value="(item.price.$model* item.quantity.$model) ? (item.price.$model* item.quantity.$model).toFixed(2) : 0.00"/>
                                    </div>
                                </div>
                                <div class="col-6 col-md-2 col-lg text-right">
                                    <svg @click="deleteItem(k)" v-show="k || ( !k && selectedInvoice.itemList.length > 1)"
                                         class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </div>

                                <div class="col-12">
                                    <div class="add-item-btn" @click.prevent="addItem(k)" v-show="k == selectedInvoice.itemList.length-1">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                        <span>Add item</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-section">
                            <div class="form-group">
                                <label for="status">status</label>
                                <select id="status" v-model="$v.selectedInvoice.status.$model" class="form-control select">
                                    <option value="draft">draft</option>
                                    <option value="pending">pending</option>
                                    <option value="paid">paid</option>
                                </select>
                            </div>
                        </div>


                        <div class="actions-btn">
                            <button  type="submit" :disabled="loading">
                                <b-spinner
                                    variant="light"
                                    v-if="loading"
                                ></b-spinner>
                                <span v-else>Save</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md-4" v-else>
                    <b-spinner
                        variant="white"
                        type="grow"
                        style="width: 3rem; height: 3rem;"
                    ></b-spinner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, integer, minLength, between } from 'vuelidate/lib/validators'
import {mapActions, mapState} from 'vuex'

export default {
    data() {
        return {
            selectedInvoice: {},
            loading: false
        }
    },
    async fetch () {
        await this.$axios.$get(`https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices/${this.$route.params.id}.json`)
            .then(response => {
                this.selectedInvoice = response
            })
    },
    validations: {
        selectedInvoice: {
            billFrom: {
                street: {
                    required
                },
                city: {
                    required
                },
                postCode: {
                    required
                },
                country: {
                    required
                },
            },
            billTo: {
                clientName: {
                    required
                },
                clientEmail: {
                    required
                },
                invoiceDate: {
                    required
                },
                projectDescription: {
                    required
                },
                street: {
                    required
                },
                city: {
                    required
                },
                postCode: {
                    required
                },
                country: {
                    required
                },
            },
            itemList: {
                $each: {
                    name: {
                        required,
                    },
                    quantity: {
                        required,
                        integer
                    },
                    price: {
                        required,
                        integer
                    }
                }
            },
            status: {
                required
            }
        }
    },
    computed: {
        ...mapState(['invoices'])
    },
    methods: {
        ...mapActions(['updateInvoice']),
        async submitForm() {
            if (this.$v.selectedInvoice.$invalid) {
                this.$notify({
                    message: "Please fill in all inputs",
                    type: "error",
                    top: true,
                    bottom: false,
                    left: false,
                    right: true,
                    closeDelay: 3000
                })
                this.$notify({
                    message: "Note: Price and Quantity inputs must be number..",
                    type: "info",
                    top: true,
                    bottom: false,
                    left: false,
                    right: true,
                    closeDelay: 6000,
                    offset: 40,
                })

            } else {
                this.loading = true

                await this.updateInvoice({
                    id: this.$route.params.id,
                    payload: this.selectedInvoice
                }).then(() => {
                    this.loading = false

                    this.$store.commit('UPDATE_INVOICES', this.invoices.map(item => {
                        if (item.id === this.$route.params.id) {
                            return Object.assign({}, item, this.selectedInvoice)
                        }

                        return  item
                    }))

                    this.$notify({
                        message: "Invoice updated successfully..",
                        type: "success",
                        top: true,
                        bottom: false,
                        left: false,
                        right: true
                    })

                    this.$router.push('/')
                })
            }
        },
        addItem() {
            this.selectedInvoice.itemList.push({
                name: '',
                price: '',
                quantity: 1
            });
        },
        deleteItem(index) {
            this.selectedInvoice.itemList.splice(index, 1);
        }
    },
}
</script>

<style lang="scss">
.new-invoice {
    padding: 5rem 0;

    .invoice-title {
        text-transform: capitalize;
        font-size: 1.8rem;
        border-bottom: 1px solid var(--gray-color);
        padding-bottom: 1rem;
        margin-bottom: 2.5rem;

        @media (max-width: 767px) {
            font-size: 1.5rem;
        }

        span {
            &:first-of-type {
                font-size: 2.1rem;
                color: var(--gray-color);

                @media (max-width: 767px) {
                    font-size: 1.7rem;
                }
            }

            &:last-of-type {
                text-transform: uppercase;
            }
        }
    }

    form {
        h3 {
            color: #7C6AD6;
            margin-bottom: 1.3rem;
            text-transform: capitalize;
        }

        .form-section {
            //margin-top: 1.6rem;
            //margin-bottom: 1.6rem;
            padding: 1.6rem 0;
            border-bottom: 2px solid var(--gray-color);

            .form-group {
                margin-bottom: 1.5rem;

                label {
                    text-transform: capitalize;
                    font-size: 1.1rem;

                    @media (max-width: 767px) {
                        font-size: 1rem;
                    }
                }

                .form-control {
                    background-color: #1F213A;
                    color: #fff;
                    font-weight: 600;
                    border-color: transparent;
                    height: 50px;
                    border-radius: 7px;

                    &.mx-datepicker {
                        display: block;
                        width: 100%;
                        padding: 0;

                        .mx-input-wrapper {
                            height: 50px;

                            .mx-input {
                                height: 50px !important;
                                background-color: transparent !important;
                                color: #fff !important;
                                border-color: transparent;

                                &:focus {
                                    box-shadow: 0 0 0 transparent;
                                    border-color: #7C6AD6;
                                }

                            }

                            i {
                                svg {
                                    color: #fff;
                                    width: 25px;
                                    height: 25px;
                                }
                            }
                        }


                        //background-color: transparent;
                    }

                    &.disabled {
                        background-color: transparent;
                        padding-left: 0;
                        padding-right: 0;
                    }

                    &.select {
                        text-transform: capitalize;
                    }

                    &:focus {
                        box-shadow: 0 0 0 transparent;
                        border-color: #7C6AD6;
                    }
                }
            }


            .add-item-btn {
                width: 100%;
                height: 55px;
                background-color: #252946;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: .5rem;
                user-select: none;
                cursor: pointer;

                svg {
                    color: #fff;
                    width: 25px;
                    height: 25px;
                    display: inline-block;
                    margin-right: .4rem;
                }

                span {
                    color: #fff;
                    text-transform: capitalize;
                }
            }

            svg {
                width: 32px;
                height: 32px;
                color: var(--gray-color);
                cursor: pointer;
            }

            .total {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .actions-btn {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            button {
                margin-top: 2rem;
                background-color: #9278FF;
                border: 1px solid #9278FF;;
                color: #fff;
                user-select: none;
                min-width: 150px;
                text-align: center;
                height: 50px;
                border-radius: 25px;

                &:disabled {
                    cursor: not-allowed;
                }

                &:focus {
                    outline: none;
                }

            }
        }
    }
}
</style>

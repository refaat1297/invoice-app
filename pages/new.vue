<template>
    <div class="new-invoice">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-11">
                    <br><br><br><br><br><br><br><br>
                    <form @submit.prevent="submitForm">

                        <div>
                            <h2>bill from</h2>
                            <div class="row">
                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="bill_from_street">Street</label>
                                        <input type="text" class="form-control" id="bill_from_street"
                                               v-model="newInvoice.billFrom.street">
                                    </div>
                                </div>

                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_city">city</label>
                                        <input type="text" class="form-control" id="bill_from_city"
                                               v-model="newInvoice.billFrom.city">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_post_code">post code</label>
                                        <input type="text" class="form-control" id="bill_from_post_code"
                                               v-model="newInvoice.billFrom.postCode">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_from_country">country</label>
                                        <input type="text" class="form-control" id="bill_from_country"
                                               v-model="newInvoice.billFrom.country">
                                    </div>
                                </div>

                            </div>

                        </div>

                        <br><br>

                        <div>
                            <h2>bill to</h2>

                            <div class="row">
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_client_name">client name</label>
                                        <input type="text" class="form-control" id="bill_to_client_name"
                                               v-model="newInvoice.billTo.clientName">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_client_email">client email</label>
                                        <input type="email" class="form-control" id="bill_to_client_email"
                                               v-model="newInvoice.billTo.clientEmail">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_street">street</label>
                                        <input type="email" class="form-control" id="bill_to_street"
                                               v-model="newInvoice.billTo.street">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_city">city</label>
                                        <input type="text" class="form-control" id="bill_to_city"
                                               v-model="newInvoice.billTo.city">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="form-group">
                                        <label for="bill_to_post_code">post code</label>
                                        <input type="text" class="form-control" id="bill_to_post_code"
                                               v-model="newInvoice.billTo.postCode">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_country">country</label>
                                        <input type="text" class="form-control" id="bill_to_country"
                                               v-model="newInvoice.billTo.country">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="form-group">
                                        <label for="bill_to_invoice_date">invoice date</label>
                                        <input type="text" class="form-control" id="bill_to_invoice_date"
                                               v-model="newInvoice.billTo.invoiceDate">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="bill_to_project_description">project description</label>
                                        <input type="text" class="form-control" id="bill_to_project_description"
                                               v-model="newInvoice.billTo.projectDescription">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br><br>

                        <div>
                            <h2>item list</h2>

                            <div class="row align-items-center" v-for="(item,k) in newInvoice.itemList" :key="k">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="item_name">item name</label>
                                        <input type="text" class="form-control" id="item_name" v-model="item.name"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="item_quantity">Qty.</label>
                                        <input type="text" class="form-control" id="item_quantity" v-model="item.quantity" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="item_price">Qty.</label>
                                        <input type="text" class="form-control" id="item_price" v-model="item.price"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <span>156.00</span>
                                </div>
                                <div class="col">
                                    <svg @click="deleteItem(k)" v-show="k || ( !k && newInvoice.itemList.length > 1)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </div>

                                <span class="btn btn-success btn-block" @click.prevent="addItem(k)" v-show="k == newInvoice.itemList.length-1">Add item</span>
                            </div>
                        </div>

                        <br><br>

                        <div class="form-group">
                            <label for="status">status</label>
                            <select id="status" v-model="newInvoice.status" class="form-control">
                                <option value="draft">draft</option>
                                <option value="pending">pending</option>
                                <option value="paid">paid</option>
                            </select>
                        </div>


                        <button class="btn btn-success" type="submit">Save</button>
                    </form>
                    <br><br><br><br><br><br><br><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "new",
    data() {
        return {
            itemList: {
                name: null,
                price: null,
                quantity: null,
            },
            newInvoice: {
                billFrom: {
                    street: '',
                    city: '',
                    country: '',
                    postCode: ''
                },
                billTo: {
                    clientEmail: '',
                    clientName: '',
                    country: '',
                    city: '',
                    invoiceDate: '',
                    postCode: '',
                    projectDescription: '',
                    street: ''
                },
                itemList: [
                    {
                        name: '',
                        price: '',
                        quantity: ''
                    }
                ],
                status: 'draft'
            }
        }
    },
    methods: {
        ...mapActions(['addNewInvoice']),
        async submitForm() {
            await this.addNewInvoice(this.newInvoice).then(() => {
                this.$router.push('/')
            })
        },
        addItem () {
            this.newInvoice.itemList.push({
                name: '',
                price: '',
                quantity: ''
            });
        },
        deleteItem (index) {
            this.newInvoice.itemList.splice(index, 1);
        }
    }
}
</script>

<style scoped>

</style>

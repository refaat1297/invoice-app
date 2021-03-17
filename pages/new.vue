<template>
    <div class="new-invoice">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-11">
                    <form>

                        <div>
                            <h2>bill from</h2>
                            <div class="form-group">
                                <label for="bill_from_street">Street</label>
                                <input type="text" id="bill_from_street" >
                            </div>

                            <div class="form-group">
                                <label for="bill_from_city">city</label>
                                <input type="text" id="bill_from_city" >
                            </div>

                            <div class="form-group">
                                <label for="bill_from_post_code">post code</label>
                                <input type="text" id="bill_from_post_code" >
                            </div>

                            <div class="form-group">
                                <label for="bill_from_country">country</label>
                                <input type="text" id="bill_from_country" >
                            </div>
                        </div>

                        <br><br>

                        <div>
                            <h2>bill to</h2>

                            <div class="form-group">
                                <label for="bill_to_client_name">client name</label>
                                <input type="text" id="bill_to_client_name" >
                            </div>

                            <div class="form-group">
                                <label for="bill_to_client_email">client email</label>
                                <input type="email" id="bill_to_client_email" >
                            </div>

                            <div class="form-group">
                                <label for="bill_to_street">street</label>
                                <input type="email" id="bill_to_street" >
                            </div>

                            <div class="form-group">
                                <label for="bill_to_city">city</label>
                                <input type="text" id="bill_to_city" >
                            </div>

                            <div class="form-group">
                                <label for="bill_to_post_code">post code</label>
                                <input type="text" id="bill_to_post_code" >
                            </div>

                            <div class="form-group">
                                <label for="bill_to_country">country</label>
                                <input type="text" id="bill_to_country" >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "new"
}
</script>

<style scoped>

</style>

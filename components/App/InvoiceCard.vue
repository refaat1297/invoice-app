<template>
    <section class="invoice-card">
        <nuxt-link :to="`/invoice/${invoice.id}/edit`" class="id">
            <span>#</span><span>{{ invoice.id.substring(0, 5) }}...</span>
        </nuxt-link>
        <div class="date">{{ invoice.billTo.invoiceDate.substring(0, 7)}}..</div>
        <div class="clientName">{{ invoice.billTo.clientName.substring(0, 7) }}..</div>
        <div class="total">$14,800,88</div>
        <div class="status" :class="invoice.status">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
            <span>{{ invoice.status }}</span>
        </div>
        <nuxt-link :to="`/invoice/${invoice.id}`" class="link">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </nuxt-link>
    </section>
</template>

<script>
export default {
    name: "InvoiceCard",
    props: {
        invoice: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.invoice-card {
    background-color: #1F2035;
    display: grid;
    grid-template-columns: 1.5fr 2fr 1.5fr 2fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    place-items: center;
    padding: 1.4rem 0;
    border-radius: .6rem;


    @media (max-width: 767px) {
        grid-template-columns: 1.5fr 2fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 17px;
    }

    @media (max-width: 517px) {
        grid-template-columns: 1.5fr 2fr;
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 17px;
    }

    &:not(:last-of-type) {
        margin-bottom: 1.3rem;
    }

    .id {
        text-decoration: none;
        color: var(--main-color);

        span {
            &:first-of-type {
                color: var(--gray-color);
                font-size: 1.4rem;
                font-weight: bold;
            }
        }
    }

    .date {

    }

    .clientName {

    }

    .total {

    }

    .status {
        display: flex;
        justify-content: center;
        align-items: center;
        //background-color: rgba(var(--main-color), .3);
        padding: .7rem 1rem;
        border-radius: .5rem;
        width: 125px;

        &.draft {
            background-color: rgba(#fff, .2);
            color: #fff;
        }

        &.pending {
            background-color: rgba(#ED962C, .2);
            color: #ED962C;
        }

        &.paid {
            background-color: rgba(#2ED5A1, .2);
            color: #2ED5A1;
        }

        svg {
            width: 20px;
            height: 20px;
            margin-right: .4rem;
            display: inline-block;
        }

        span {
            text-transform: capitalize;
        }
    }

    .link {
        text-decoration: none;

        svg {
            width: 25px;
            height: 25px;
            color: #7C5DF9;
        }
    }
}

</style>

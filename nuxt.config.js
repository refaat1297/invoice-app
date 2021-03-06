// import $fire from '@nuxtjs/firebase'
// import axios from 'axios'



export default {
    // Target: https://go.nuxtjs.dev/config-target
    // target: 'universal',

    ssr: true,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'invoice-app',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Recursive:wght@400;600;700&display=swap'},
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [

        // '~/plugins/getInvoices.js',
        // '~/plugins/firebase.js',
        '~/plugins/notification.js',
        '~/plugins/vuelidate.js',
        '~/plugins/vue2-datepicker.js',
        // '~/plugins/moment.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/moment',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // generate: {
    //     routes () {
    //         return axios.get('https://a-invoice-app-refaat-default-rtdb.firebaseio.com/invoices.json')
    //             .then(res => {
    //                 const routes = []
    //
    //                 for (const id in res.data) {
    //                     routes.push(`/invoice/${id}`)
    //                     routes.push(`/invoice/${id}/edit`)
    //                 }
    //
    //                 return routes
    //             })
    //     }
    // },


    pageTransition: 'page'
}

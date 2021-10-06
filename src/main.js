import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
const app = createApp(App);
//import Carousel from 'primevue/carousel';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


// bootstrap
import 'bootstrap/dist/js/bootstrap.min'

import 'bootstrap/dist/css/bootstrap.css'



// app.component('Carousel');
app.use(PrimeVue);

createApp(App).mount('#app')

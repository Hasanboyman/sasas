import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


import Login from './components/LoginComponent.vue'
import Product from './components/ProductComponent.vue'
import Error from './ErrorComponent.vue'

const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/products', component: Product, name: 'products' },
    { path: '/:pathMatch(.*)*', component: Error, name: 'Error 404' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'border-b border-blue-500 text-blue-700 hover:text-blue-700 focus:border-blue-500 ',
});


const app = createApp(App);
app.use(router);
app.mount('#app');
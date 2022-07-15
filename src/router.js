// Import functions of vue router from vue-router dependencie
import { createRouter, createWebHistory } from 'vue-router';

// List of components using with router
import Home from "./components/Home.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
// Define the path 
const routes = [
    { path: '/', component: Home },
    { path: '/products', component: ProductList },
    { path: '/panier', component: Cart },
    
]

// Instance with createRouter
const router = createRouter({
    // classics url
    history: createWebHistory(),
    routes, 
});
// Export instance
export default router;
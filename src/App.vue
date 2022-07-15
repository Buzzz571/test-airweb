<template>
  <div>
  <Header></Header>
  <!-- <ProductList></ProductList> -->
  <RouterView> </RouterView> 
  

  <!-- <Cart></Cart> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue"


export default {
  data() {
    return {};
  },
  // declaration of external components using in current components
  components: {
    Header,  
    ProductList,  
    Cart
    
  },
}
</script>

<style>

</style>
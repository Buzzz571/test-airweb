<template>
 <!--TITLE CATEGORY NAME ? -->
    <section class="category-name">
        <h1>Titre de transport</h1>
    
    <div>
     <ProductExcerpt
      
      v-for="currentProduct in productList"
      :key="currentProduct.id"
      :productData="currentProduct"
    >
    </ProductExcerpt>
    </div>
    </section>
</template>




<script>
import ProductExcerpt from "../components/ProductExcerpt.vue";
import productService from "../services/productService.js";
export default {
  data() {
    return {
      productList: [],
    };
  },
  components:{
      ProductExcerpt
  },
  methods: {
    loadProducts() {
      productService
        .getAllProducts()
        .then((response) => {
          this.productList = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
  },  
  mounted() {
    //loading from API
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>



</style>
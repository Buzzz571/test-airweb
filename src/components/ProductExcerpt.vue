<template>
  <body>
  
    <!--CARD PRODUCT-->
    <section class="product-list">
        <div class="left-card">
            <div class="product-card">
                <!-- {{productData.thumbnail_url}} not work -->
                <img class="product-picture" src="https://picsum.photos/256/256">
            </div>
        </div>
        <div class="center-card">
            <div class="title">
                <h2>{{productData.label}} </h2>
                <p> {{productData.description}}</p>
            </div>
        </div>
        <div class="rigth-card">
            <span class="product-price">
                <p>{{productData.price }} €</p>
            </span>
            <span class="icon-cart-add">
                <i class="fa-solid fa-cart-plus"></i>
            </span>
        </div>
    </section>
    
</body>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ["productData"],
  
 
};
</script>

<style lang="scss" scoped>
/* CATEGORY NAME */ 
.category-name{
    color: #fff;
    background: black;
    width: 190px;
    border-radius: 5px;
}
.category-name h1{
    padding: 2px;   
    text-align: center;
}
  
/* PRODUCT PART */

.product-list{
    width: 95%;    
    border-radius: 10px;
    box-shadow: 0 1px 0.5px 0.5px rgba(42, 42, 43, 0.2);
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 25px;
    justify-content: space-between;
    
}
.product-picture{
    margin-top: 25px;
    margin-left: 10px ;
    margin-right: 10px;
    margin-bottom: 25px;
    width: 60px;
    height: 60px;
    border-radius: 50px;
}

.product-price p{
    text-align: center;
    background: #EDEDED;
    padding: 17px;
    margin-top: 0;
    margin-bottom: 15px;
    border-radius: 0 15px 0 15px;
}
.icon-cart-add{
    background: #535353;
    border-radius: 10px;
    padding: 12px;
    margin-left: 10px;
    margin-top: 10px;
    color: #fff;
}


</style>
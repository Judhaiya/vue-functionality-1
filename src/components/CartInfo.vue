<template>
    <div class="purchase-info">
      <div class="cart-grid">
      <div v-for="cartItem in apple" :key="cartItem.id" class="cart-items">
      <p>{{cartItem.category}}</p>
      <p>{{cartItem.price}}</p>
      <p>{{cartItem.Product}}</p>
    
    <img  class="product-image" :src="cartItem.img" alt="">

    
    
      </div>
      </div>
    </div>
</template>
<script>


export default {
 data(){
     return{
    
     }
 },
methods:{

},
computed:{
    apple(){
   return this.$store.state.apple
 },
 

}
}
</script>
<style >
.cart-grid{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.product-image{
  width:200px;
  height:200px;
  object-fit: cover;
}
</style>

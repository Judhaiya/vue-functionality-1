<template>
    <div class="cart-wrapper">
 
   <nav>
     <li class="cart-link"><router-link to="/cart"><i class="fas fa-shopping-cart"></i> <span class="item-no"> {{apple.length}} </span></router-link></li>
     
   </nav>
    <div class="product-grid">
   <div class="products" v-for="(products) in Birthday" :key="products.id">
     <p>{{products.category}}</p>
     <p>{{products.Product}}</p>
    <p v-html="products.star"></p>
    <img class="product-image" :src="products.img" alt="">
   <br>
  <button v-on:click="add(products.id)" class="add">Add</button>
    <div class="incre">
   <button v-on:click="getRid(products.id)" class="minus">Remove</button>
    </div>
   </div>
    </div>
  


  
    </div>
    
</template>
<script>


export default {
   data(){
       return{
           
      
      counter:0,
    
          
       }
   },
   methods:{

   add:function(num){
        const productUpdate = this.Birthday.find(item => item.id === num);
        
        this.apple.push(productUpdate)
        
   },
getRid:function(num){
  const eachProduct = this.Birthday.find(item => item.id === num);
  this.apple.splice(eachProduct)
},



},
computed:{
  Birthday(){
    return this.$store.state.BirthdayReminders
  },
 apple(){
   return this.$store.state.apple
 }
}
}
</script>
<style>
.cart-wrapper{
  margin-top:2rem;
}
.product-grid{
  display:grid;
  grid-template-columns:1fr 1fr 1fr ;
}
.product-image{
  width:200px;
  height:200px;
  object-fit: cover;
}
 a{
  text-decoration: none !important;
}
.cart-link{
  position:relative;
  list-style-type: none;

}
.fa-shopping-cart{
    text-align: center;
}
.item-no{
  background: deeppink;
  position:absolute;
  width:22px;
  height:22px;
  top:-14px;
  left:13px;
  text-align: center;
  border-radius:50%;
  padding-top:2px;
  font-size:16px;

}


</style>
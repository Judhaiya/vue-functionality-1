import Vue from 'vue'
import Vuex from 'vuex'
import madras from '../assets/madras.jpg'
import Orange from '../assets/Orange.jpg'
import eyeshadow from '../assets/eyeshadow.jpg'


Vue.use(Vuex)
 const store = new Vuex.Store({
    state:{
        hotel:[
            {
           HotelName:"JU's Cocktail",
           feedback:"DJ is mindblowing,music quality can be improved plus additional disco lights can be added",
           price:1200,
           star:'<h2 class="star">hello</h2>',
           quantity:0
          },
            {
           HotelName:"udi Resort",
           feedback:"Fantabulous",
           price:400,
           quantity:1
          },
            {
           HotelName:"Beach side Bar",
           feedback:"can never forget d taste.such a mushy memories",
           price:600,
           quantity:1
          }],
          BirthdayReminders:[
            {   img:madras,
                category:'cosmetics',
                Product:"Madras kappi",
                price:300,
                id:2,
                star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                quantity:1
           },
             {
                img:Orange,
                category:'lipstick',
                Product:"Orange Country",
                price:200,
                id:4,
                star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                quantity:1
               
           },
             {  img:eyeshadow,
                category:'eyeliner',
                Product:"Glamporous colour eye pencil",
                price:500,
                id:6,
                star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
                quantity:1
           },
           {
            img:Orange,
            category:'lipstick',
            Product:"sun rise",
            price:200,
            id:10,
            star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
            quantity:1
           
       },
           {  img:eyeshadow,
            category:'eyeliner',
            Product:"Glamporous ocean blue",
            price:500,
            id:8,
            star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
            quantity:1
       },
       {
        img:Orange,
        category:'lipstick',
        Product:"Orange peach",
        price:200,
        id:12,
        star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
        quantity:1
       
   },
       {  img:eyeshadow,
        category:'eyeliner',
        Product:"Glamporous colour eye dragon shde",
        price:500,
        id:14,
        star:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
        quantity:1
   },
        ],
        apple:[]
       },

    
})
export default store
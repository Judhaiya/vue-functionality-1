import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 const store = new Vuex.Store({
    state:{
        hotel:[
            {
           HotelName:"JU's Cocktail",
           feedback:"DJ is mindblowing,music quality can be improved plus additional disco lights can be added"
          },
            {
           HotelName:"udi Resort",
           feedback:"Fantabulous"
          },
            {
           HotelName:"Beach side Bar",
           feedback:"can never forget d taste.such a mushy memories"
          }]
    }
})
export default store
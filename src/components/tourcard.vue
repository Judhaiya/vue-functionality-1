<template>
    <div class="tour-card">
        <p >{{hotel.HotelName}}</p>
        <p >{{hotel.feedback}}</p>
    </div>
</template>
<script>


export default {
    name:"tourcard",
    props:{
     hotel:Object
    }
}
</script>


<template>
    <div>
      <!-- add your settings content here -->
      <Statistics/>

      <div class="pop-ups">
        <IllnessesDash/>
        <SideShootDash/>

      </div>

    </div>
    <div class="top-padding">
        <imageRecognition/>
    </div>
  </template>
  
  <script>
  import imageRecognition from '../components/imageRecognition.vue';
  import Statistics from '../components/Statistics.vue';
  import IllnessesDash from '../components/Illnesses-dash.vue';
  import SideShootDash from '../components/sideshoots-dash.vue';

  export default {
    name: 'Dashboard',
    components: {
    imageRecognition,
    Statistics,
    IllnessesDash,
    SideShootDash
  }
  }
  </script>
  
<style>
.top-padding{
  padding-top: 40px;
}

.pop-ups{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
}
</style>
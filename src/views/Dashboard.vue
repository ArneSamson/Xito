<template>
    <div>
      <!-- add your settings content here -->
      <Statistics/>
      <IllnessesDash/>
    </div>
    <div class="top-padding">
        <imageRecognition/>
    </div>
  </template>
  
  <script>
  import imageRecognition from '../components/imageRecognition.vue';
  import Statistics from '../components/Statistics.vue';
  import IllnessesDash from '../components/Illnesses-dash.vue';

  export default {
    name: 'Dashboard',
    components: {
    imageRecognition,
    Statistics,
    IllnessesDash
  }
  }
  </script>
  
<style>
.top-padding{
  padding-top: 40px;
}
</style>
<template>
    <div>
      <h1>Dashboard</h1>
      <!-- add your settings content here -->
      <Statistics/>
    </div>
    <div class="top-padding">
        <imageRecognition/>
    </div>
  </template>
  
  <script>
  import imageRecognition from '../components/imageRecognition.vue';
  import Statistics from '../components/Statistics.vue';

  export default {
    name: 'Dashboard',
    components: {
    imageRecognition,
    Statistics
  }
  }
  </script>
  
<style>
.top-padding{
  padding-top: 40px;
}
</style>
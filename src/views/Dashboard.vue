<template>
    <div>
      <h1>Dashboard</h1>
      <!-- add your settings content here -->
    </div>
    <div>
        <imageRecognition/>
    </div>
  </template>
  
  <script>
  import imageRecognition from '../components/imageRecognition.vue';

  export default {
    name: 'Dashboard',
    components: {
    imageRecognition
  }
  }
  </script>
  
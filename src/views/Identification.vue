<template>

    <div>
      <h1>Identification</h1>
      <!-- add your settings content here -->
    </div>

    <div class="pop-ups">
      <IllnessesFolddown/>
    </div>

  </template>
  
  <script>
  import IllnessesFolddown from '../components/Illnesses-folddown.vue';

  export default {
    name: 'Identification',
    components: {
    IllnessesFolddown
    }
  }
  </script>
  
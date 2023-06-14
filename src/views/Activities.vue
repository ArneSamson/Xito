<template>
    <div>
      <!-- add your settings content here -->
      <div class="All">
        <Tasks/>
      </div>
      <div class="My">

      </div>
    </div>
  </template>
  
  <script>
  import Tasks from '../components/Tasks.vue';

  export default {
    name: 'Activities',
    components: {
      Tasks
    }
  }
  </script>
  
  <style scoped>
  .All {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  </style>
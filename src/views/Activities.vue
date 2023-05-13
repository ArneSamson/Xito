<template>
    <div>
      <h1>Activities</h1>
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
  
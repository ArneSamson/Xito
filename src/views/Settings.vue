<template>
    <div>
      <h1>Settings Page</h1>
      <!-- add your settings content here -->
      <settingscomp />
    </div>
  </template>
  
<script>
  import settingscomp from '../components/Settings-comp.vue'

  export default {
    name: 'Settings',
    components: {
      settingscomp,
    }
  }
  </script>
  
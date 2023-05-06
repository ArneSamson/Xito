<template>

    <div>
      <h1>Identification</h1>
      <!-- add your settings content here -->
    </div>

    <div class="pop-ups">
      <IllnessesFolddown/>
      <SideshootsFolddown/>
      <UnpollinatedFolddown/>
    </div>

  </template>
  
  <script>
  import IllnessesFolddown from '../components/Illnesses-folddown.vue';
  import SideshootsFolddown from '../components/Sideshoots-folddown.vue';
  import UnpollinatedFolddown from '../components/Unpollinated-folddown.vue';

  export default {
    name: 'Identification',
    components: {
    IllnessesFolddown,
    SideshootsFolddown,
    UnpollinatedFolddown
    }
  }
  </script>
  
<style>
.top-padding{
  padding-top: 40px;
}

.pop-ups{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 40px;
}
</style>
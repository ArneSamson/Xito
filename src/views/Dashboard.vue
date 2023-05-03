<template>
    <div>
      <!-- add your settings content here -->
      <Statistics/>
      <div>
        <Timeline/>
        <GreenhouseLayout/>
      </div>

      <div class="pop-ups">
        <IllnessesDash/>
        <SideShootDash/>
        <Unpollinated/>
        <Harvestable/>

      </div>


    </div>
    <div class="top-padding">
        <!-- <imageRecognition/> -->
    </div>
  </template>
  
  <script>
  import imageRecognition from '../components/imageRecognition.vue';
  import Statistics from '../components/Statistics.vue';
  import IllnessesDash from '../components/Illnesses-dash.vue';
  import SideShootDash from '../components/sideshoots-dash.vue';
  import Unpollinated from '../components/Unpollinated.vue';
  import Harvestable from '../components/Harvestable.vue';
  import Timeline from '../components/Timeline.vue';
  import GreenhouseLayout from '../components/greenhouse-layout.vue';

  export default {
    name: 'Dashboard',
    components: {
    imageRecognition,
    Statistics,
    IllnessesDash,
    SideShootDash,
    Unpollinated,
    Harvestable,
    Timeline,
    GreenhouseLayout
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
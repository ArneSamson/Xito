<template>
    <div>
      <!-- add your settings content here -->
      <Timeline/>
      <Statistics/>
      <div>
        <GreenhouseLayout/>
      </div>

      <div class="pop-ups">
        <div class="pop ">
          <IllnessesDash/>
          <SideShootDash/>
        </div>
        <div class="pop2">
          <Unpollinated/>
          <Harvestable/>
        </div>
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
  import Unpollinated from '../components/Unpollinated.vue';
  import Harvestable from '../components/Harvestable.vue';
  import Timeline from '../components/Timeline.vue';
  import GreenhouseLayout from '../components/Greenhouse-Layout.vue';

  export default {
    name: 'Dashboard',
    components: {
    Statistics,
    IllnessesDash,
    SideShootDash,
    Unpollinated,
    Harvestable,
    GreenhouseLayout,
    Timeline
  }
  }
  </script>
  
<style scoped>
.top-padding{
  padding-top: 20px;
}

.statistics{
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 0px;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.pop-ups{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pop{
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  margin: 0 auto;
}
.pop2{
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: 0 auto;
}
</style>
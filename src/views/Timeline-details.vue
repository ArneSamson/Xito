<template>
    <div>
      <!-- add your settings content here -->
      <h1>Details of {{ Selectday }}</h1>
      <div>
        <Statistics/>
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
  import IllnessesDash from '../components/Illnesses-dash.vue';
  import SideShootDash from '../components/sideshoots-dash.vue';
  import Unpollinated from '../components/Unpollinated.vue';
  import Harvestable from '../components/Harvestable.vue';
  import Statistics from '../components/Statistics.vue';


  export default {
    name: 'Timeline-details',
    components: {
    IllnessesDash,
    SideShootDash,
    Unpollinated,
    Harvestable,
    Statistics

  },
  computed:{
    Selectday(){
      return this.$route.params.day || ' ';
    }
  }
  }
  </script>
  
<style scoped>
.top-padding{
  padding-top: 40px;
}

h1 {
  font-size: 40px;
  font-family: "Proxima Soft SemiBold";
  font-size: 2rem;
  color: #1B1818;
  margin-bottom: 20px;
}

.pop-ups{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
}
</style>
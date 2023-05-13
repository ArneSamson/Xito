<template>
    <div>
        <h1>Unpollinated</h1>

        <div class="unpollinated">
            <div class="unpollinate" v-for="greenhouse in greenhouses" :key="greenhouse.id">
                <div class="pollination-header">
                <h3>{{ greenhouse.name }}</h3>
                </div>
                <div class="pollination-content">
                    <div class="row">
                        <div class="column" v-for="plant in greenhouse.unpollinatedPlants" :key="plant.id">
                        <!-- <h4>Greenhouse {{ greenhouse.id }}</h4> -->
                            <div class="unpollinated-plants">
                                <div class="plant">
                                <img :src="plant.image" alt="unpollinated plant">
                                <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                                </div>
                            </div>
                        </div>
                        <p class="no-unpollinated-plants" v-if="!greenhouse.unpollinatedPlants.length">No unpollinated plants</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Unpollinated',
    data() {
      return {
        greenhouses: [],
      };
    },
    created() {
      this.greenhouses = [
        {
          id: 1,
          name: 'Greenhouse 1',
          unpollinatedPlants: []
        },
        {
          id: 2,
          name: 'Greenhouse 2',
          unpollinatedPlants: []
        }
      ];
    }
  };
  </script>  
  
  <style scoped>
  .unpollinated {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    background-color: #F1E9E9;
    margin: 60px 48px 0px 48px;
    padding: 32px;
    border-radius: 20px;
  }
  
  .unpollinate {
    width: 48%;
    margin-bottom: 20px;
    /* background-color: #F1E9E9; */
  }
  
  .pollination-header {
    background-color: #F1E9E9;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
  }
  .plant img{
    height: 50px;
  }

  </style>
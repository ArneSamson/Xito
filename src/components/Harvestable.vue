<template>
    <div>
        <h1>Ready For Harvest</h1>

        <div class="harvestable">
            <div class="harvest" v-for="greenhouse in greenhouses" :key="greenhouse.id">
                <div class="harvest-header">
                <h3>{{ greenhouse.name }}</h3>
                </div>
                <div class="harvest-content">
                    <div class="row">
                        <div class="column" v-for="plant in greenhouse.unpollinatedPlants" :key="plant.id">
                        <!-- <h4>Greenhouse {{ greenhouse.id }}</h4> -->
                            <div class="harvestable-plants">
                                <div class="plant">
                                <img :src="plant.image" alt="unpollinated plant">
                                <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                                </div>
                            </div>
                        </div>
                        <p class="no-harvestable-plants" v-if="!greenhouse.harvestablePlants.length">No harvestable plants</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Harvestable',
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
          harvestablePlants: []
        },
        {
          id: 2,
          name: 'Greenhouse 2',
          harvestablePlants: []
        }
      ];
    }
  };
  </script>  
  
  <style scoped>
  .harvestable {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    background-color: #F1E9E9;
    margin: 60px 48px 0px 48px;
    padding: 32px;
    border-radius: 20px;
  }
  
  .harvest {
    width: 48%;
    margin-bottom: 20px;
    /* background-color: #F1E9E9; */
  }
  
  .harvest-header {
    background-color: #F1E9E9;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
  }
  .plant img{
    height: 50px;
  }

  </style>
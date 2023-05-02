<template>
    <div>
        <h1>Sideshoots</h1>

        <div class="sideshoots">
            <div class="sideshoot" v-for="greenhouse in greenhouses" :key="greenhouse.id">
                <div class="sideshoot-header">
                <h3>{{ greenhouse.name }}</h3>
                </div>
                <div class="sideshoot-content">
                    <div class="row">
                        <div class="column" v-for="plant in greenhouse.sideshootPlants" :key="plant.id">
                        <!-- <h4>Greenhouse {{ greenhouse.id }}</h4> -->
                            <div class="sideshoot-plants">
                                <div class="plant">
                                <img :src="plant.image" alt="plant with side shoot">
                                <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                                </div>
                            </div>
                        </div>
                        <p class="no-side-shoot" v-if="!greenhouse.sideshootPlants.length">No side shoots</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideShootDash',
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
          sideshootPlants: [
            {
              id: 1,
              image: '/src/assets/tomato-images/1.jpg',
              row: 1,
              block: 1
            },
            {
              id: 2,
              image: '/src/assets/tomato-images/3.jpg',
              row: 1,
              block: 2
            }
        ]
        },
        {
          id: 2,
          name: 'Greenhouse 2',
          sideshootPlants: [
            {
              id: 3,
              image: '/src/assets/tomato-images/3.jpg',
              row: 2,
              block: 1
            },
            {
                id: 3,
                image: '/src/assets/tomato-images/1.jpg',
                row: 2,
                block: 1
            }
          ]
        }
      ];
    }
  };
  </script>  
  
  <style scoped>
  .sideshoots {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    background-color: #F1E9E9;
    margin: 60px 48px 0px 48px;
    padding: 32px;
    border-radius: 20px;
  }
  
  .sideshoot {
    width: 48%;
    margin-bottom: 20px;
    /* background-color: #F1E9E9; */
  }
  
  .sideshoot-header {
    background-color: #F1E9E9;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
  }
  .plant img{
    height: 50px;
  }

  </style>
<template>
    <div class="diseases">
      <div class="disease" v-for="greenhouse in greenhouses" :key="greenhouse.id">
        <div class="disease-header">
          <h3>{{ greenhouse.name }}</h3>
        </div>
        <div class="disease-content">
          <div class="row">
            <div class="column" v-for="plant in greenhouse.infectedPlants" :key="plant.id">
              <!-- <h4>Greenhouse {{ greenhouse.id }}</h4> -->
              <div class="infected-plants">
                <div class="plant">
                  <img :src="plant.image" alt="Infected plant">
                  <p>Disease: {{ plant.disease }}</p>
                  <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                </div>
                <p class="no-infected-plants" v-if="!greenhouse.infectedPlants.length">No infected plants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IllnessesDash',
    data() {
      return {
        greenhouses: [],
      };
    },
    created() {
      // Fetch the diseases and greenhouses data here
      // and set the values of the data properties
      this.greenhouses = [
        {
          id: 1,
          name: 'Greenhouse 1',
          infectedPlants: [
            {
              id: 1,
              image: '/src/assets/tomato-images/1.jpg',
              disease: 'Anthracnose',
              row: 1,
              block: 1
            },
            {
              id: 2,
              image: '/src/assets/tomato-images/3.jpg',
              disease: 'Bacterial Spot',
              row: 1,
              block: 2
            },
            {
                id: 3,
                image: '/src/assets/tomato-images/1.jpg',
                disease: 'Powdery Mildew',
                row: 2,
                block: 1
            }
          ]
        },
        {
          id: 2,
          name: 'Greenhouse 2',
          infectedPlants: [
            {
              id: 3,
              image: '/src/assets/tomato-images/3.jpg',
              disease: 'Powdery Mildew',
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
  .diseases {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    background-color: #F1E9E9;
    margin: 60px 48px 0px 48px;
    padding: 32px;
    border-radius: 20px;
  }
  
  .disease {
    width: 48%;
    margin-bottom: 20px;
    /* background-color: #F1E9E9; */
  }
  
  .disease-header {
    background-color: #F1E9E9;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
  }
  .plant img{
    height: 50px;
  }

  </style>
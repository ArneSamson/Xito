<template>
    <div class="diseases">
        <div class="disease" v-for="disease in diseases" :key="disease.id">
            <div class="disease-header">
                <h3>{{ disease.name }}</h3>
        </div>
        <div class="disease-content">
            <div class="row">
            <div class="column" v-for="greenhouse in greenhouses" :key="greenhouse.id">
                <h4>Greenhouse {{ greenhouse.id }}</h4>
                <div class="infected-plants">
                    <div class="plant" v-for="plant in disease.infectedPlants.filter(p => p.greenhouseId === greenhouse.id)" :key="plant.id">
                        <img :src="plant.image" alt="Infected plant">
                        <p>Disease: {{ disease.name }}</p>
                        <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                    </div>
                <p class="no-infected-plants" v-if="!disease.infectedPlants.filter(p => p.greenhouseId === greenhouse.id).length">No infected plants</p>
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
    props: {
      greenhouses: {
        type: Array,
        required: true
      },
      diseases: {
        type: Array,
        required: true
      }

      
    }
    
  }
  </script>
  
  <style scoped>
  .diseases {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .disease {
    width: 48%;
    margin-bottom: 20px;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .disease-header {
    background-color: #f2f2f2;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .disease-content {
    padding: 10px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  
  .column {
    flex: 1;
  }
  
  h4 {
    margin-top: 0;
  }
  
  .infected-plants {
    display: flex;
    flex-wrap: wrap;
  }
  
  .plant {
    flex-basis: calc(33.33% - 10px);
    margin: 5px;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .plant img {
    max-width: 100%;
    max-height: 150px;
  }
  
  .no-infected-plants {
    margin-top: 10px;
  }
  </style>
  
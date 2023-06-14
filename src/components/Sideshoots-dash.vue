<template>
  <div>
    <div class="diseases">
      <h1>Illnesses</h1>
      <div class="class">
        <div class="disease" v-for="greenhouse in greenhouses" :key="greenhouse.id">
          <div class="disease-header">
            <h3>{{ greenhouse.name }}</h3>
          </div>
          <div class="disease-content">
            <div class="row">
              <div class="column" v-for="plant in greenhouse.infectedPlants" :key="plant.id">
                <div class="infected-plants">
                  <div class="plant">
                    <img :src="plant.image" alt="Infected plant">
                    <p>Disease: {{ plant.disease }}</p>
                    <p>Location: Row {{ plant.row }}, Block {{ plant.block }}</p>
                  </div>
                </div>
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
    this.greenhouses = [
      {
        id: 1,
        name: 'Greenhouse 1',
        infectedPlants: [
          {
            id: 1,
            image: 'https://arnesamson.be/img-lib/tomato-images/1.jpg',
            disease: 'Anthracnose',
            row: 1,
            block: 1
          },
          {
            id: 2,
            image: 'https://arnesamson.be/img-lib/tomato-images/3.jpg',
            disease: 'Bacterial Spot',
            row: 1,
            block: 2
          },
          {
            id: 3,
            image: 'https://arnesamson.be/img-lib/tomato-images/1.jpg',
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
            image: 'https://arnesamson.be/img-lib/tomato-images/3.jpg',
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
  flex-direction: column;
  background-color: #F1E9E9;
  margin: 60px 48px 0px 48px;
  padding: 32px;
  border-radius: 20px;
}

.class {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.disease {
  width: 48%;
  margin-bottom: 20px;
  padding: 20px;
}

h1 {
  font-family: "Proxima Soft SemiBold";
  font-size: 1.875rem;
  margin: 0;
  padding: 0;
}

.disease-header {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Medium";
  font-size: 0.875rem;
}

.plant img {
  height: 50px;
}

.disease-content {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Light";
  font-size: 0.75rem;
}

.no-infected-plants {
  font-family: "Poppins Light";
  font-size: 0.75rem;
  color: #808080;
}
</style>

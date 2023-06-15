<template>
  <div>
    <div class="unpollinated">
      <h1>Unpollinated</h1>
      <div class="class">
          <div class="unpollinate" v-for="greenhouse in greenhouses" :key="greenhouse.id">
            <div class="pollination-header">
              <h3>{{ greenhouse.name }}</h3>
            </div>
            <div class="pollination-content">
              <div class="row">
                <div class="column" v-for="plant in greenhouse.unpollinatedPlants" :key="plant.id">
                  <div class="unpollinated-plants">
                    <div class="plant">
                      <img :src="plant.image" alt="Unpollinated plant">
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
  background-color: #F1E9E9;
  margin: 60px 48px 0px 48px;
  padding: 32px;
  border-radius: 20px;
}

.unpollinate {
  width: 48%;
  margin-bottom: 20px;
  padding: 20px;
}

.class {
  display: flex;
  flex-direction: row;
  width: 100%;
}

h1 {
  font-family: "Proxima Soft SemiBold";
  font-size: 1.875rem;
  margin: 0;
  padding: 0;
}

.pollination-header {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Medium";
  font-size: 0.875rem;

}

.pollination-content {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Light";
  font-size: 0.75rem;
}

.plant img {
  height: 50px;
}

.no-unpollinated-plants {
  font-family: "Poppins Light";
  font-size: 0.75rem;
  color: #181818;
}
</style>

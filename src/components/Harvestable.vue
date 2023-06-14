<template>
  <div>
    <div class="harvestable">
      <h1>Ready For Harvest</h1>
      <div class="class">
        <div class="harvest" v-for="greenhouse in greenhouses" :key="greenhouse.id">
        <div class="harvest-header">
          <h3>{{ greenhouse.name }}</h3>
        </div>
        <div class="harvest-content">
          <div class="row">
            <div class="column" v-for="plant in greenhouse.harvestablePlants" :key="plant.id">
              <div class="harvestable-plants">
                <div class="plant">
                  <img :src="plant.image" alt="Harvestable plant">
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

h1 {
  font-family: "Proxima Soft SemiBold";
  font-size: 1.875rem;
  margin: 0;
  padding: 0;
}

.harvest {
  width: 48%;
  margin-bottom: 20px;
}

.harvest-header {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Medium";
  font-size: 0.875rem;

}

.harvest-content {
  background-color: #F1E9E9;
  padding: 10px;
  font-family: "Poppins Light";
  font-size: 0.75rem;
}

.plant img {
  height: 50px;
}

.no-harvestable-plants {
  font-family: "Poppins Light";
  font-size: 0.75rem;
  color: #181818;
}
</style>

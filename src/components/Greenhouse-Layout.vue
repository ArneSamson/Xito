<template>
  <div class="greenhouse-container">
    <div class="filters">
      <select v-model="selectedFilter">
        <option value="illnesses">Illnesses</option>
        <option value="sideshoots">Sideshoots</option>
        <option value="unpollinated">Unpollinated</option>
        <option value="harvestable">Harvestable</option>
      </select>
    </div>
    <div class="greenhouse" v-for="greenhouse in greenhouses" :key="greenhouse.id">
      <div class="walkway"></div>
      <div class="column" v-for="column in greenhouse.columns" :key="column.id">
        <div 
        class="block" 
        v-for="block in column.blocks" 
        :key="block.id" 
        :style="{ backgroundColor: block.color }"
        :class="getBlockClass(block)"
        >
        </div>
      </div>
      <div class="walkway"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreenhouseLayout",
  data() {
    return {
      greenhouses: [
        {
          id: 1,
          columns: [
            {
              id: 1,
              blocks: [
                { id: 1, color: "green", illnesses: 0, sideshoots: 1, unpollinated: 0, harvestable: 0 },
                { id: 2, color: "green", illnesses: 0, sideshoots: 1, unpollinated: 0, harvestable: 0 },
                { id: 3, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0 },
                { id: 22, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0}
              ],
            },
            {
              id: 2,
              blocks: [
                { id: 4, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0  },
                { id: 5, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0  },
                { id: 6, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0  },
                { id: 21, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0 }
              ],
            },
            {
              id: 3,
              blocks: [
                { id: 7, color: "yellow", illnesses: 0, sideshoots: 2, unpollinated: 1, harvestable: 0  },
                { id: 8, color: "red", illnesses: 2, sideshoots: 0, unpollinated: 0, harvestable: 0  },
                { id: 9, color: "green", illnesses: 0, sideshoots: 1, unpollinated: 0, harvestable: 0  },
                { id: 20, color: "green", illnesses: 0, sideshoots: 1, unpollinated: 0, harvestable: 0 }
              ],
            },
          ],
        },
        {
          id: 2,
          columns: [
            {
              id: 1,
              blocks: [
                { id: 10, color: "yellow", illnesses: 0, sideshoots: 1, unpollinated: 1, harvestable: 0  },
                { id: 11, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0  },
                { id: 12, color: "green", illnesses: 0, sideshoots: 0, unpollinated: 0, harvestable: 0  }
              ],
            },
            {
              id: 2,
              blocks: [
                { id: 13, color: "red", illnesses: 3, sideshoots: 1, unpollinated: 0, harvestable: 0  },
                { id: 14, color: "red", illnesses: 2, sideshoots: 1, unpollinated: 1, harvestable: 0  },
                { id: 15, color: "green", illnesses: 0, sideshoots: 1, unpollinated: 0, harvestable: 0  }
              ],
            },
          ],
        },
      ],
      selectedFilter: "illnesses"
    };
  },
  methods: {
    getBlockClass(block) {
      const params = ["illnesses", "sideshoots", "unpollinated", "harvestable"];
      for (const param of params) {
        if (param === this.selectedFilter && block[param] > 0) {
          return "highlight";
        }
      }
      return "";
    },
  },
};
</script>

<style scoped>
  .greenhouse-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
    background-color: #F1E9E9;
    border-radius: 20px;
  }

  .greenhouse {
    display: flex;
    flex-direction: row;
  }

  .walkway {
    width: 20px;
    background-color: #c4c4c4;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .block {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 1px solid #c4c4c4;
  }
  .highlight{
    border-color: blue;
    border-width: 5px;
  }
</style>
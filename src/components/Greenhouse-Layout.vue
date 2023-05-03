<template>
    <div class="greenhouse-container">
      <div class="greenhouse" v-for="greenhouse in greenhouses" :key="greenhouse.id">
        <div class="walkway"></div>
        <div class="column" v-for="column in greenhouse.columns" :key="column.id">
          <div class="block" v-for="block in column.blocks" :key="block.id" :style="{ backgroundColor: block.color }"></div>
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
                  { id: 1, color: "green" },
                  { id: 2, color: "green" },
                  { id: 3, color: "green" },
                  { id: 22, color: "green"},
                ],
              },
              {
                id: 2,
                blocks: [
                  { id: 4, color: "green" },
                  { id: 5, color: "green" },
                  { id: 6, color: "green" },
                  { id: 21, color: "green"}
                ],
              },
              {
                id: 3,
                blocks: [
                  { id: 7, color: "yellow" },
                  { id: 8, color: "red" },
                  { id: 9, color: "green" },
                  { id: 20, color: "green"}
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
                  { id: 10, color: "yellow" },
                  { id: 11, color: "green" },
                  { id: 12, color: "green" },
                ],
              },
              {
                id: 2,
                blocks: [
                  { id: 13, color: "red" },
                  { id: 14, color: "red" },
                  { id: 15, color: "green" },
                ],
              },
            ],
          },
        ],
      };
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
  </style>
  
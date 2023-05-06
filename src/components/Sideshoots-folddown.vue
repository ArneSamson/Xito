<template>
    <div class="fold-down-menu">
        <div class="menu-header">
            <h1>Side Shoots {{ totalCards }}</h1>
            <button @click="toggleMenu">{{ buttonText }}</button>
        </div>
      <div class="menu-content" v-if="show">
        <div v-for="(greenhouse, index) in greenhouses" :key="index">
          <h3>{{ greenhouse.name }}</h3>
          <ul>
            <li v-for="(card, index) in greenhouse.cards" :key="index">
              <img :src="card.image" :alt="card.name" />
              <p>Row {{ card.row }}, Block {{ card.block }}</p>
              <p>{{ card.date }}, {{ card.time }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        buttonText: "Show Illnesses",
        greenhouses: [
          {
            name: "Greenhouse 1",
            cards: [
              {
                name: "Card 1",
                image: "/src/assets/tomato-images/1.jpg",
                row: 1,
                block: 2,
                date: "2023-05-06",
                time: "12:00 PM",
              },
              {
                name: "Card 2",
                image: "/src/assets/tomato-images/1.jpg",
                row: 3,
                block: 4,
                date: "2023-05-07",
                time: "2:00 PM",
              },
            ],
          },
          {
            name: "Greenhouse 2",
            cards: [
              {
                name: "Card 3",
                image: "/src/assets/tomato-images/1.jpg",
                row: 2,
                block: 5,
                date: "2023-05-08",
                time: "10:00 AM",
              },
            ],
          },
        ],
      };
    },
    methods: {
      toggleMenu() {
        this.show = !this.show;
        this.buttonText = this.show ? "Hide Illnesses" : "Show Illness";
      },
    },
    computed: {
      totalCards() {
        let total = 0;
        for (let i = 0; i < this.greenhouses.length; i++) {
          total += this.greenhouses[i].cards.length;
        }
        return total;
      },
    },
  };
  </script>
  
  <style scoped>
  .fold-down-menu {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    margin: 48px;
    margin-bottom: 0;
    background-color: #F1E9E9;
    padding: 24px;
    border-radius: 20px;
}
  .menu-toggle {
    position: absolute;
    top: 0;
    left: 0;
  }
  .menu-content {
    display: flex;
    flex-wrap: wrap;
    margin: 48px;
    margin-top: 0;
    background-color: #F1E9E9;
    padding: 24px;
    border-radius: 20px;
  }
  .menu-content.show {
    display: block;
  }
  .greenhouse-column {
    display: inline-block;
    margin-right: 20px;
  }
  li img{
    width: 100px;
    height: auto;
  }
  ul{
    list-style-type: none;
  }
  </style>
  
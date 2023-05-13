<template>
    <div class="greenhouses-container">
      <div v-for="greenhouse in greenhouses" :key="greenhouse.id">
        <h2>Greenhouse {{ greenhouse.id }} - {{ greenhouse.status }}</h2>
        <div class="status-circle">
          <svg viewBox="0 0 36 36" class="donut">
            <circle class="donut-hole" cx="18" cy="18" r="15.91549430918954" fill="#fff"></circle>
            <circle class="donut-ring" cx="18" cy="18" r="15.91549430918954" fill="transparent" :stroke-dasharray="circumference" :stroke-dashoffset="(circumference * (100 - greenhouse.health)) / 100" :class="{ 'low-health': greenhouse.health < 50 }"></circle>
          </svg>
          <div class="percent">{{ greenhouse.health }}%</div>
        </div>
        <div class="indicators">
          <div class="icon"><span class="indicator-title">Harvestable fruit:</span> {{ greenhouse.harvestableFruit }}</div>
          <div class="icon"><span class="indicator-title">Pollination:</span> {{ greenhouse.pollination ? 'Good' : 'Bad' }}</div>
          <div class="icon"><span class="indicator-title">Side shoots:</span> {{ greenhouse.sideShoots }}</div>
          <div class="icon"><span class="indicator-title">Illnesses:</span> {{ greenhouse.illnesses }}</div>
          <div class="icon"><span class="indicator-title">Unripe fruit:</span> {{ greenhouse.unripeFruit }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greenhouses: [
          { id: 1, status: 'healthy', health: 94, harvestableFruit: 0, pollination: true, sideShoots: 5, illnesses: 0, unripeFruit: 2 },
          { id: 2, status: 'danger', health: 45, harvestableFruit: 0, pollination: false, sideShoots: 5, illnesses: 2, unripeFruit: 10 }
        ],
        radius: 15.91549430918955
      }
    },
    computed: {
      circumference() {
        return this.radius * 2 * Math.PI;
      }
    }
  }
  </script>
  
<style>
    .greenhouses-container {
    display: flex;
    justify-content: space-around; /* this will evenly distribute the greenhouse components horizontally */
    background-color: #F1E9E9;
    margin: 60px 48px 0px 48px;
    padding: 32px;
    border-radius: 20px;
    }

    .status-circle {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    }

    .donut {
    transform: rotate(-90deg);
    width: 150px;
    height: 150px;
    }

    .donut-hole {
    fill: #fff;
    }

    .donut-ring {
    fill: transparent;
    stroke-width: 3px;
    }
    .donut-ring.low-health {
    stroke: #EF4732;
    }

    .donut-ring:not(.low-health) {
    stroke: #63B76D;
    }

    .percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-weight: bold;
    }

    .indicators {
    display: inline-block;
    vertical-align: top;
    }

    .icon {
    display: block;
    margin: 5px 0;
    padding: 5px;
    /* background-color: gray; */
    color: #1B1818;
    /* border-radius: 5px; */
    font-size: 24px;
    }

    .indicator-title {
    font-weight: bold;
    }
</style>
  
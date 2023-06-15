<template>
    <div class="timeline">
      <div class="timeline-days">
        <div class="timeline-day" v-for="(day, index) in days" :key="index">
            <RouterLink :to="{ name: 'Timeline-details', params: { day: day } }" class="navbar-link">
          {{ day }}
            </RouterLink>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Timeline',
    data() {
      return {
        days: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20']
      };
    },
    methods: {

    }
  };
</script>
  
<style scoped>
  .navbar-link{
    margin: 0;
    text-decoration: none;
    color: #1B1818;

  }
  
  .timeline {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.timeline-days {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

  .timeline-day {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: calc(100% / 20);
    height: 50px;
    padding: 10px;
    background-color: #000;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: 5px;
    margin-right: 5px;
    font-family: "Poppins Medium";
    font-size: 0.875rem;
    background-color: #A8D160;
    text-decoration: none;
  }

  
  .timeline-day:hover {
    color: #F1E9E9;
    background-color: #EF4732;
  }

  .navbar-link:hover {
    color: #F1E9E9;
  }
  
  .timeline-day.active {
    background-color: #0077ff;
    color: #fff;
  }
  
  @media (max-width: 600px) {
    .timeline-day {
      height: 30px;
      font-size: 12px;
    }
  }
</style>
  
<template>
    <div class="Tasks">
      <div class="All">
        <h2>All Tasks</h2>
        <div v-for="(team, index) in All" :key="index" class="divider">
          <h2>{{ team.team }}</h2>
          <div v-for="(task, index) in team.tasks" :key="index" class="task">
            <h3>{{ task.title }}</h3>
            <p>{{ task.message }}</p>
            <p>Row {{ task.row }}, Block {{ task.block }}</p>
            <p>{{ task.date }}, {{ task.time }}</p>
            <p>{{ task.person }}</p>
            <div class="status-circle">
              <div class="status-dot" :style="{ backgroundColor: getStatusColor(task.status) }"></div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="My">
        <h2>My Tasks</h2>
        <div v-for="(task, index) in My.tasks" :key="index" class="task">
          <h3>{{ task.title }}</h3>
          <p>{{ task.message }}</p>
          <p>Row {{ task.row }}, Block {{ task.block }}</p>
          <p>{{ task.date }}, {{ task.time }}</p>
          <p>{{ task.person }}</p>
          <div class="status-circle">
            <div class="status-dot" :style="{ backgroundColor: getStatusColor(task.status) }"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        All: [
            {
                team: "Team 1",
                tasks: [
                    {
                        title: "Remove infected tomato plant.",
                        message: "There is a sick tomato plant in desperate need of being removed. It has caught a virus and could spread it to the rest of the crops.",
                        row: 1,
                        block: 2,
                        date: "2023-05-06",
                        time: "12:00 PM",
                        person: "Juan Juanovan",
                        status: "red",
                    },
                    {
                        title: "Sunscald - Cover up plant.",
                        message: "A tomato plant has been struck by sunscald. Cover it up to recover as much of the plant as possible.",
                        row: 3,
                        block: 4,
                        date: "2023-05-07",
                        time: "2:00 PM",
                        person: "Juan Juanovan",
                        status: "yellow",
                    },
                ],
            },
            {
                team: "Team 2",
                tasks: [
                {
                    title: "Remove infected tomato plant.",
                    message: "There is a sick tomato plant in desperate need of being removed. It has caught a virus and could spread it to the rest of the crops.",
                    row: 2,
                    block: 5,
                    date: "2023-05-08",
                    time: "10:00 AM",
                    person: "Juan Juanovan",
                    status: "red",
                },
                ],
            },
        ],
        My: 
            {
                tasks: [
                    {
                        title: "Remove infected tomato plant.",
                        message: "There is a sick tomato plant in desperate need of being removed. It has caught a virus and could spread it to the rest of the crops.",
                        row: 1,
                        block: 2,
                        date: "2023-05-06",
                        time: "12:00 PM",
                        person: "Jon Jonovon",
                        status: "red",
                    },
                    {
                        title: "Sunscald - Cover up plant.",
                        message: "A tomato plant has been struck by sunscald. Cover it up to recover as much of the plant as possible.",
                        row: 3,
                        block: 4,
                        date: "2023-05-07",
                        time: "2:00 PM",
                        person: "Jon Jonovon",
                        status: "yellow",
                    },
                ],
            },
                
        
      };
    },
    methods: {
    getStatusColor(status) {
        switch (status) {
            case "red":
            return "red";
            case "yellow":
            return "yellow";
            case "green":
            return "green";
            default:
            return "gray";
        }
    },
},
    computed: {
     
    },
  };
  </script>
  
  <style scoped>
    .Tasks {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .All {
        display: flex;
        flex-direction: column;
        margin-right: 5rem;
    }
    .My {
        display: flex;
        flex-direction: column;
    }

    .Tasks h2{
        font-family: "Proxima Soft SemiBold";
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .Tasks h3{
        font-family: "Proxima Soft SemiBold";
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .Tasks p{
        font-family: "Poppins Light";
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }


  ul{
    list-style-type: none;
  }
  /* .divider{

  } */.status-circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

/* Define your status colors */
.status-dot.red {
  background-color: red;
}

.status-dot.yellow {
  background-color: yellow;
}

.status-dot.green {
  background-color: green;
}

.status-dot.gray {
  background-color: gray;
}



  </style>
  
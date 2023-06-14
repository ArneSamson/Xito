<template>
    <div class="Tasks">
      <div class="All">
        <h1 class="tasks">All Tasks</h1>
        <div v-for="(team, index) in All" :key="index" class="divider">
          <h2>{{ team.team }}</h2>
          <div v-for="(task, index) in team.tasks" :key="index" class="task">
            <h2>{{ task.title }}</h2>
            <p>{{ task.message }}</p>
            <div class='info'>
                <div class="status-circle">
                    <div class="status-dot" :style="{ backgroundColor: getStatusColor(task.status) }"></div>
                </div>
                    <p>{{ task.person }}</p>
                    <p>Row {{ task.row }}, Block {{ task.block }}</p>
                <p>{{ task.date }}, {{ task.time }}</p>                
            </div>
          </div>
        </div>
      </div>
  
      <div class="My">
        <h1 class="tasks">My Tasks</h1>
        <div class="status">
          <h2>Upcoming</h2>
          <div v-for="(task, index) in My.tasks" :key="index" class="task">
          <h2>{{ task.title }}</h2>
          <p>{{ task.message }}</p>
          <div class='info'>
                <div class="status-circle">
                    <div class="status-dot" :style="{ backgroundColor: getStatusColor(task.status) }"></div>
                </div>
                    <p>{{ task.person }}</p>
                    <p>Row {{ task.row }}, Block {{ task.block }}</p>
                <p>{{ task.date }}, {{ task.time }}</p>                
            </div>
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
        margin-right: 1rem;
        margin-left: 2rem;
        background-color: #F1E9E9;
        margin-top: 2rem;
        padding: 1.5rem;
        border-radius: 20px;
    }
    .My {
      display: flex;
        flex-direction: column;
        margin-right: 2rem;
        margin-left: 1rem;
        background-color: #F1E9E9;
        margin-top: 2rem;
        padding: 2rem;
        border-radius: 20px;
    }
    .Tasks h1{
        font-family: "Proxima Soft SemiBold";
        font-size: 1.875rem;
        margin-top: 0rem;
        
    }
    .Tasks h2{
        font-family: "Proxima Soft SemiBold";
        font-size: 1.375rem;
        margin-top: 0rem;
        
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
  .task{
    margin-top: 1rem;
    margin-bottom: 2rem;
    background-color: #A8D160;
    padding-bottom: 1rem;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 20px;  
  }
  
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
 .info p{
    margin-right: 1rem;
    font-family: "Poppins Medium";
    font-size: 1rem;
  }

  .status-circle {
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
  
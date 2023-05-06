<template>
    <div class="Tasks">
        <div>
            <div>
                <h2>All Tasks</h2>
                <div v-for="(team, index) in All" :key="index" class="divider">
                    <h2>{{ team.team }}</h2>
                    <div v-for="(task, index) in team.tasks" :key="index">
                        <h3>{{ task.title }}</h3>
                        <p>{{ task.message }}</p>
                        <p>Row {{ task.row }}, Block {{ task.block }}</p>
                        <p>{{ task.date }}, {{ task.time }}</p>
                        <p>{{ task.person }}</p>
                        <div class="status-circle" :style="{ 'background-color': getStatusColor(task.status) }"></div>
                    </div>
                </div>
            </div>

            <div>
                <h2>My Tasks</h2>
                <div v-for="(task, index) in My.tasks" :key="index">
                    <h3>{{ task.title }}</h3>
                    <p>{{ task.message }}</p>
                    <p>Row {{ task.row }}, Block {{ task.block }}</p>
                    <p>{{ task.date }}, {{ task.time }}</p>
                    <p>{{ task.person }}</p>
                    <div class="status-circle" :style="{ 'background-color': getStatusColor(task.status) }"></div>
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
  ul{
    list-style-type: none;
  }
  /* .divider{

  } */
  .status-circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
  </style>
  
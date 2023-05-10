<template>
    <div>
        <div class="user-setting">
            <h1>User</h1>
            <div>
                <p> username: {{User.username}} </p>
                <p> email: {{User.email}} </p>
                <p> 2FA: {{User.method}} </p>
            </div>
        </div>

        <div class="weather-settings">
            <h1>Weather</h1>
            <p>location: {{User.location}} </p>
        </div>

        <div class="notification-settings">
            <h1>Notifications</h1>
            <p>notifications: {{User.notificationChoice}}</p>
            <label class="switch">
                <input type="checkbox" v-model="User.notificationSound">
                <span class="slider round"></span>
            </label>
        </div>

        <div class="team-settings">
            <h1>Team</h1>
            
        </div>
    </div>

</template>

<script>

export default {
name: 'settings-comp',
props: {
    User: {
        type: Object,
        default: () => ({
            username: 'Jon',
            email: 'email@email.email.com',
            '2FA': true,
            method: 'SMS',
            location: 'Maasmechelen',
            notificationChoice: 'email',
            notificationSound: false,
        })
    },
    Teams: {
        type: Array,
        default: () => [
            
        ]
    }
}

}

</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
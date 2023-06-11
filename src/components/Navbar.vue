<template>
  <nav class="navbar">
    <!-- Left side of navbar -->
    <div class="navbar-left">
      <router-link to="/" class="navbar-logo">
        <img src="../assets/logo.png" alt="Logo">
      </router-link>
      <router-link to="/dashboard" class="navbar-link">dashboard</router-link>
      <router-link to="/identification" class="navbar-link">identification</router-link>
      <router-link to="/activities" class="navbar-link">activities</router-link>
      <router-link to="/live" class="navbar-link">live</router-link>
    </div>

    <!-- Right side of navbar -->
    <div class="navbar-right">
      
      <div class="icons">
        <button class="navbar-btn weather" @click="showPopup"><span class="weather-icon"></span></button>
        <button class="navbar-btn" @click="showNotifications"><span class="notif-icon"></span></button>
      </div>

      <router-link to="/settings" class="navbar-link">Settings</router-link>
      <router-link to="/profile" class="navbar-user">
        <span class="navbar-user-greeting">Welcome, {{ username }}</span>
        <span class="navbar-user-function">{{ userFunction }}</span>
      </router-link>
    </div>

    <!-- Popup component -->
    <Popup v-if="showingPopup" @close="showingPopup = false">
      <h2>Popup Content</h2>
      <p>Here's some content for the popup</p>
    </Popup>

    <!-- Notifications component -->
    <Notifications v-if="showingNoti" @close="showingNoti = false">
      <h2>Notifications</h2>
      <p>Here's some content for the notifications</p>
    </Notifications>

  </nav>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Popup from './Pop-up.vue'
  import Notifications from './Notifications.vue'

  export default {
    components: {
      Popup,
      Notifications
    },
    data() {
      return {
        username: "Jon", // Replace with actual username
        userFunction: "Team Leader", // Replace with actual user function
        showingPopup: false,
        popupOpen: false,
        showingNoti: false,
      };
    },
    methods: {
      showPopup() {
        this.showingPopup = true;
      },
      showNotifications() {
        // Add code to show notifications
        this.showingNoti = true;
      }
    },
    }
</script>
  
<style scoped>

@font-face {
  font-family: "Proxima Soft SemiBold";
  src: url('../public/fonts/Proxima Soft/ProximaSoft-SemiBold.ttf') format('truetype');
}
.navbar {
    position: fixed; /* Set position to fixed */
    top: 0; /* Stick to top of viewport */
    left: 0; /* Stick to left side of viewport */
    right: 0; /* Stick to right side of viewport */
    z-index: 100; /* Set z-index to make sure navbar is on top of other elements */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #63B76D; 
    color: #F1E9E9;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  margin-right: 2rem;
}

.navbar-logo img {
  height: 3rem;
  width: auto;
}

.navbar-link {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  
  margin-right: 30px;
  border-radius: 20px;
  background-color: #A8D160;
  color: #1B1818;
  text-decoration: none;
  font-family: "Proxima Soft SemiBold";
  font-size: 23px;
}

.navbar-link:hover {
  color: #F1E9E9;
  background-color: #EF4732;
}

.navbar-right {
  display: flex;
  align-items: center;
}
.icons {
  padding-top: 10px;
  padding-bottom: 10px;
  
  margin-right: 30px;
  border-radius: 20px;
  background-color: #A8D160;
  color: #1B1818;
  text-decoration: none;
  font-family: "Proxima Soft SemiBold";
  font-size: 23px;
}
.navbar-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #333;
  cursor: pointer;
}
.weather-icon {
  display: inline-block;
  width: 1.5rem; /* Adjust the size of the icon */
  height: 1.5rem; /* Adjust the size of the icon */
  background: url('../assets/icons/sun.svg') center center no-repeat;
  background-size: contain;

}
.notif-icon {
  display: inline-block;
  width: 1.5rem; /* Adjust the size of the icon */
  height: 1.5rem; /* Adjust the size of the icon */
  background: url('../assets/icons/bell.svg') center center no-repeat;
  background-size: contain;

}
.navbar-btn:hover {
}

.navbar-user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.navbar-user-greeting {
  font-size: 1.25rem;
}

.navbar-user-function {
  font-size: 0.75rem;
  color: #ccc;
}

</style>
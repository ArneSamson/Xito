<template>
    <nav class="navbar">
        <!-- Left side of navbar -->
        <div class="navbar-left">
        <router-link to="/" class="navbar-logo">
            <img src="../assets/logo.png" alt="Logo">
        </router-link>
        <router-link to="/dashboard" class="navbar-link">Dashboard</router-link>
        <router-link to="/identification" class="navbar-link">Identification</router-link>
        <router-link to="/activities" class="navbar-link">Activities</router-link>
        </div>

        <!-- Right side of navbar -->
        <div class="navbar-right">
        <button class="navbar-btn" @click="showPopup">Popup</button>
        <button class="navbar-btn" @click="showNotifications">Notifications</button>
        <router-link to="/settings" class="navbar-link">Settings</router-link>
        <router-link to="/profile" class="navbar-user">
            <span class="navbar-user-greeting">Welcome, {{ username }}</span>
            <span class="navbar-user-function">{{ userFunction }}</span>
        </router-link>
        </div>
    </nav>
</template>

<script>

    import { RouterLink } from 'vue-router'

    export default {
    data() {
        return {
        username: "John", // Replace with actual username
        userFunction: "Team Leader" // Replace with actual user function
        };
    },
    methods: {
        showPopup() {
        // Add code to show popup
        },
        showNotifications() {
        // Add code to show notifications
        }
    }
    };
</script>
  
<style>
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
    margin-bottom: 200px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-logo {
  margin-right: 2rem;
}

.navbar-logo img {
  height: 2.5rem;
  width: auto;
}

.navbar-link {
  margin-right: 2rem;
  color: #F1E9E9;
  text-decoration: none;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-btn {
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #F1E9E9;
  color: #333;
  cursor: pointer;
}

.navbar-btn:hover {
  background-color: #eee;
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
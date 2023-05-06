<template>
        <div class="navbar-popup">
            <div class="navbar-popup-header">
                <h2>Weather</h2>
                <button @click="closePopup">Close</button>
            </div>
            <ul class="navbar-popup-list">
                <li v-for="notification in notifications" :key="notification.id">
                    {{ notification.text }}
                </li>
            </ul>
        </div>
</template>

<script>
  export default {
    props: {
      notifications: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      }
    }
  }
</script>
  
<style scoped>
  .navbar-popup {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-right: 330px;
  }
  
  .navbar-popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .navbar-popup-header h2 {
    margin: 0;
  }
  
  .navbar-popup-header button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .navbar-popup-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar-popup-list li {
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  
  .navbar-popup-list li:last-child {
    border-bottom: none;
  }
</style>
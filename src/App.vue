<template>
  <div>
    <Navbar />
    <div id="top-padder-for-content">
      <router-view/>
      <RouterLink to="/dashboard" class="logo">
        <img src="../assets/logo.png" alt="logo" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ImageRecognition from './components/imageRecognition.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ImageRecognition
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

#top-padder-for-content {
  padding-top: 64px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

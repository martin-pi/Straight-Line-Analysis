<template>
  <div id="app">
    
    <sui-container class="navigation">
      <h1>Straight Line Journey Analysis Tool</h1>
      <sui-menu pointing secondary>
        <router-link to="/"><sui-menu-item :active="this.$route.name === 'Home'">Analysis</sui-menu-item></router-link>
        <router-link to="/about"><sui-menu-item :active="this.$route.name === 'About'">About</sui-menu-item></router-link>
      </sui-menu>
    </sui-container>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navigation {
  margin-top: 2em;
}
</style>

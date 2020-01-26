<template>
 <div id="app">
   <MenuItem></MenuItem>
   <router-view></router-view>
 </div>
</template>

<script>
import MenuItem from './components/MenuItem.vue'
export default {
  name: "app",
  components: {
    MenuItem
  },
  methods: {
    toScroll() {
      document.getElementById("").scrollIntoView(true);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%; /* IE on Windows Phone用 */
  -webkit-text-size-adjust: 100%; /* iOS用 */
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 62.5%; /*font-size 1rem=10px */
  background-color: black;
  text-align: center;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>

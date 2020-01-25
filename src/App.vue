<template>
  <div id="app">
    <div class="mainheader"><MainHeader /></div>
    <div class="top"><Top /></div>
    <div class="yamagatagyu"><Yamagatagyu /></div>
    <div class="kinkabuta"><Kinkabuta /></div>
    <div class="yonezawabuta"><Yonezawabuta /></div>
    <div class="shopinfo"><ShopInfo /></div>
    <div class="mainfooter"><MainFooter /></div>
  </div>
</template>

<script>
// import MainHeader from './components/MainHeader.vue'
import MainHeader from "./components/MainHeader.vue";
import Top from "./views/Top.vue";
import Yamagatagyu from "./views/Yamagatagyu.vue";
import Kinkabuta from "./views/Kinkabuta.vue";
import Yonezawabuta from "./views/Yonezawabuta.vue";
import ShopInfo from "./views/ShopInfo.vue";
// import OnlineShop from './views/OnlineShop.vue'
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "app",
  components: {
    MainHeader,
    Top,
    Yamagatagyu,
    Kinkabuta,
    Yonezawabuta,
    ShopInfo,
    // OnlineShop,
    MainFooter
  },
  methods: {
    toScroll() {
      document.getElementById('').scrollIntoView(true)
    }
  }
}
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

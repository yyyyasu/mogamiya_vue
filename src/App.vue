<template>
  <div id="app">
    <MainHeader></MainHeader>
    <Top></Top>
    <Yamagatagyu></Yamagatagyu>
    <Kinkabuta></Kinkabuta>
    <Yonezawabuta></Yonezawabuta>
    <ShopInfo></ShopInfo>
    <OnlineShop></OnlineShop>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import Top from "./views/Top.vue";
import Kinkabuta from "./views/Kinkabuta.vue";
import OnlineShop from "./views/OnlineShop.vue";
import ShopInfo from "./views/ShopInfo.vue";
import Yamagatagyu from "./views/Yamagatagyu.vue";
import Yonezawabuta from "./views/Yonezawabuta.vue";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "app",
  components: {
    Top,
    Kinkabuta,
    OnlineShop,
    ShopInfo,
    Yamagatagyu,
    Yonezawabuta,
    MainHeader,
    MainFooter
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

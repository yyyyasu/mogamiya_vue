<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainHeader></MainHeader>
    <br><img alt="Vue logo" src="./assets/cover2.jpg">
    <Top></Top>
    <Kinkabuta></Kinkabuta>
    <OnlineShop></OnlineShop>
    <ShopInfo></ShopInfo>
    <Yamagatagyu></Yamagatagyu>
    <Yonezawabuta></Yonezawabuta>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import Top from './views/Top.vue'
import Kinkabuta from './views/Kinkabuta.vue'
import OnlineShop from './views/OnlineShop.vue'
import ShopInfo from './views/ShopInfo.vue'
import Yamagatagyu from './views/Yamagatagyu.vue'
import Yonezawabuta from './views/Yonezawabuta.vue'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'


export default {
  name: 'app',
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
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: black;
}
</style>

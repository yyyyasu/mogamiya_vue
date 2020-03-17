<template>
  <div id="app">
    <MainHeader />
    <router-view></router-view>
    <MainFooter />
    <transition name="fade">
      <div id="pagetop" v-show="scY > 10" @click="toTop">
        <a>トップへ</a>
      </div>
    </transition>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"

export default {
  name: "app",
  components: {
    MainHeader,
    MainFooter
  },
  data() {
    return {
      scTimer: 0,
      scY: 0
    };
  },

  created() {
    //scイベント登録
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    //ページトップへスクロール
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    //スクロール
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    }
  }
};
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  max-height: auto;
  margin: 0 auto;
}

#app {
  width: 100%;
  margin: 0 auto;
  font-family: "游明朝", "HGP明朝E", serif; /*"Avenir", Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased; /* フォントのアンチエイリアス */
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%; /* IE on Windows Phone用 */
  -webkit-text-size-adjust: 100%; /* iOS用 */
}

#pagetop {
  position: fixed;
  bottom: 10px;
  right: 10px;
  opacity: 0.8;
  background: #3f98ef;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  a {
    color: white;
    font-size: 14px;
    line-height: 64px;
    text-align: center;
    vertical-align: middle;
  }
}
</style>

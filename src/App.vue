<template>
  <div id="app">
    <router-view></router-view>
    <transition name="fade">
      <button id="pagetop" @click="toTop()">
        トップへ戻る
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0
    };
  },

  mounted() {
    //ハンドラーを登録
    window.addEventListener("scroll", this.handleScroll());
  },
  methods: {
    handleScroll() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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

img {
  display: block;
  max-width: 100%;
  height: auto;
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
  margin: 0 auto;
  text-align: justify;
}

#pagetop {
  font-size: 1rem;
  color: green;
  position: fixed;
  top: 1rem;
  left: 1rem;
}
</style>

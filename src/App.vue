<template>
  <div id="app">
    <router-view></router-view>
    <transition name="fade">
      <div id="pagetop" v-show="scY > 650" @click="toTop">
        <button>トップへ戻る</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      scTimer: 0,
      scY: 0
    }
  },

  created() {
    //scイベント登録
    window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    //ページトップへスクロール
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    //スクロール
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
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
  position: fixed;
  top: 1rem;
  left: 1rem;
  border: 1px solid #15aeec;
  background-color: #49c0f0;
  background-image: -webkit-linear-gradient(top, #49c0f0, #2cafe3);
  background-image: linear-gradient(to bottom, #49c0f0, #2cafe3);
  border-radius: 4px;
  color: #fff;
  line-height: 50px;
  -webkit-transition: none;
  transition: none;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
}

#pagetop:hover {
  border:1px solid #1090c3;
  background-color: #1ab0ec;
  background-image: -webkit-linear-gradient(top, #1ab0ec, #1a92c2);
  background-image: linear-gradient(to bottom, #1ab0ec, #1a92c2);
}

#pagetop:active {
  background: #1a92c2;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .2);
  color: #1679a1;
  text-shadow: 0 1px 1px rgba(255, 255, 255, .5);
}

</style>

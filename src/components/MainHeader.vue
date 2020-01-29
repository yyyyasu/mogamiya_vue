<template>
  <v-app class="main">
    <header class="content">
      <div class="header-logo">
        <img alt="Vue logo" src="../assets/店舗ロゴ背景透明化.png" />
      </div>
      <div class="menu">
        <router-link tag="li" to="/about" class="menu__btn"
          >こだわり
        </router-link>
        <router-link tag="li" to="/yamagatagyu" class="menu__btn"
          >総称山形牛
        </router-link>
        <router-link tag="li" to="/kinkabuta" class="menu__btn kinkabuta"
          >純粋金華豚
        </router-link>
        <router-link tag="li" to="/yonezawabuta" class="menu__btn yonezawabuta"
          >米澤豚
        </router-link>
        <router-link tag="li" to="/shopinfo" class="menu__btn shopinfo"
          >店舗情報
        </router-link>
        <li class="menu__btn onlineshop">
          <a href="http://www.110298.com/" target="_blank" style="color: white;"
            >OnlineShop</a
          >
        </li>
      </div>
    </header>
  </v-app>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  background-color: white;
  width: 100%;
  height: 100%;
}

.header-logo {
  width: 50%;
  margin: 8rem auto;
  animation-name: slidein;
  animation-duration: 3s;
}

li {
  display: inline-block;
  width: 7rem;
}

.menu__btn {
  font-size: 1rem;
  margin: 0 0.2rem;
  margin-bottom: 20px;
  border: none;
  color: #fff;
  background: #921414;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
}

.menu {
  width: 100%;
  animation-name: fadein;
  animation-duration: 4s;
  text-align: center;
}

@keyframes slidein {
  from {
    opacity: 0;
    transform: translateX(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translate(0);
  }
  to {
    opacity: 1;
    transform: translate(1);
  }
}

// トランジション
.fade-enter {
  // 現れる時の最初の状態
  opacity: 0;
}
.fade-enter-active {
  // 現れる時のトランジションの状態
  transition: opacity 1s;
}
.fade-enter-to {
  // 現れる時の最後の状態
  opacity: 1;
}
.fade-leave {
  // 消える時の最初の状態
  opacity: 1;
}
.fade-leave-active {
  // 消える時のトランジションの状態
  transition: opacity 0.5s;
}
.fade-leave-to {
  // 消える時の最後の状態
  opacity: 0;
}
</style>

<template>
  <div class="test">
    <h3>Home</h3>
    <hr />
    <button @click="toUsers">Usersのページに行く</button>
    <router-link to="/onlineshop/明智光秀">コンテンツ１</router-link>
    <router-link to="/onlineshop/小野妹子">コンテンツ２</router-link>
    <router-link to="/onlineshop/織田信長">コンテンツ3</router-link>
    <div>
    <h1>コンテンツ {{ id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineShop",
  methods: {
    toUsers() {
      this.$router.push({
        path: "mainfooter"
      });
    }
  },
  props: ['id']
};
</script>

<style scoped>
button {
  color: white;
  background: red;
  border-radius: 1rem;
  display: inline-block;
}
.test {
  color: white;
}
</style>

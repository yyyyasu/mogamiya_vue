<template>
<div>
  <MainHeader></MainHeader>
  <router-view></router-view>
  <MainFooter></MainFooter>
</div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style scoped>
</style>
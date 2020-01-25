<template>
  <div class="footer">
    <div class="footer__shopinfo">
      <p class="shop-name">
        最上屋
        <span class="margin">〒562-0035 大阪府箕面市船場東3-10−28</span>
        <span class="margin">TEL: 072-729-1551</span>
        <span class="margin">FAX: 072-729-1561</span>
      </p>
      <h2>haro- {{ id }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  props: ['id']
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: red;
}

.footer__shopinfo {
  color: white;
  font-size: 1rem;
  width: 100%;
  height: 100%;
}

.margin {
  margin-left: 1rem;
}
</style>

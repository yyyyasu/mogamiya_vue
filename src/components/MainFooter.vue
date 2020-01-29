<template>
  <div class="footer">
    <div class="footer__shopinfo">
      <p class="shop-name">
        最上屋
      </p>
      <p class="margin">〒562-0035 大阪府箕面市船場東3-10−28</p>
      <p class="margin">TEL: 072-729-1551</p>
      <p class="margin">FAX: 072-729-1561</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #921414;
  text-align: center;
}

.footer__shopinfo {
  color: white;
  font-size: 1rem;
  width: 100%;
}

.margin {
  margin-left: 1rem;
}
</style>

<template>
  <div class="footer">
      <div class="footer__shopinfo">
        <p class="shop-name">最上屋
        <span class="margin">〒562-0035 大阪府箕面市船場東3-10−28</span>
        <span class="margin">TEL: 072-729-1551</span>
        <span class="margin">FAX: 072-729-1561</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter"
};
</script>

<style lang="scss">
.footer {
  background-color: red;
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

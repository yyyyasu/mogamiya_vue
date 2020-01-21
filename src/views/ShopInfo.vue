<template>
  <v-app>
    <v-container class="content">
      <h2 class="head__ttl">店舗情報</h2>
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <table>
            <tr  >
              <td>店名</td>
              <td>最上屋</td>
            </tr>
            <tr>
              <td>会社名</td>
              <td>山形牛 最上屋</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>〒562-0035 大阪府箕面市船場東3-10-28</td>
            </tr>
            <tr>
              <td>電話番号</td>
              <td>072-729-1551</td>
            </tr>
            <tr>
              <td>FAX番号</td>
              <td>072-729-1561</td>
            </tr>
            <tr>
              <td>Eメールアドレス</td>
              <td>mogamiya@110298.com</td>
            </tr>
            <tr>
              <td>営業時間</td>
              <td>午前10時00分～午後7時00分</td>
            </tr>
            <tr>
              <td>定休日</td>
              <td>木曜日 ※祝日の場合は営業</td>
            </tr>
            <tr class="shop-map">
              <td>地図</td>
              <td>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.406237958676!2d135.48937101522932!3d34.82087728040375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fb00b80e1989%3A0x111b754e9b783d0a!2z44CSNTYyLTAwMzUg5aSn6Ziq5bqc566V6Z2i5biC6Ii55aC05p2x77yT5LiB55uu77yR77yQ4oiS77yS77yY!5e0!3m2!1sja!2sjp!4v1579314844292!5m2!1sja!2sjp" 
                        width="100%"
                        height="100%" 
                        frameborder="0" 
                        style="border:0;" 
                        allowfullscreen="" 
                        class="google-map">
                </iframe> 
              </td>
            </tr>
          </table>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <div class="shopPhotos">
            <img src="../assets/店舗外観.jpg" alt="店舗外観の写真" />
            <img src="../assets/店内全体.jpg" alt="店内全体の写真" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.content {
  color: white;
  width: 100%;
  font-size: 1rem;
}

table {
  border: solid 1px white;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  height: 100%;
  tr{
    border: solid 1px white;
    height: 5%;
  }
  td{
    border: solid 1px white;
    text-align: left;
  }
}

.head__ttl {
  text-align: center;
  font-size: 1.5rem;
}

.shop-map {
  height: 30%;
}

.google-map {
  display: block;
}
</style>

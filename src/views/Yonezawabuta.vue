<template>
  <v-container fluid class="content">
    <h2 class="head__ttl">米澤豚一番育ち</h2>
    <div class="section1">
      <h3 class="section1__ttl">
        おいしい！ヘルシー！米澤豚一番育ち
      </h3>
      <p class="section1__txt">
        豚肉は、おいしい、値段も手頃、その上、ビタミン、ミネラル
        <br />
        豊富です。
        <br />
        お肉の消費量第一位で、「とんかつ」、「豚しゃぶ」
        <br />
        など年齢を問わず皆様に愛させております。
        <br />
        老化予防や疲労回復にも効果があると言われて
        <br />
        おり、女性にも人気があります。
      </p>
      <p class="section1__txt">
        当店ではそのような豚肉の中でも
        <br />
        「こだわりの豚肉=米澤豚一番育ち」を取り扱っております。
        <br />
        お中元、お歳暮、記念日の贈答用として、満足して頂ける一品です。
      </p>
    </div>
    <div class="section2">
      <h3 class="section2__ttl">
        老化防止・美肌効果ビタミンEをたっぷり
      </h3>
      <p class="section2__txt">
        抗酸化作用のあるビタミンEは血行をよくしたり、美肌や若さを保つ働きがあるといわれています。また、豚肉そのものの酸化が抑制され鮮度も長く保たれ旨味が長持ちします。
      </p>
    </div>
    <v-row class="section3" align="center">
      <v-col cols="12" sm="6" class="section3__img">
        <img src="../assets/米澤豚一番育ち成分比較.png" class="section3_img"/>
      </v-col>
      <v-col cols="12" sm="6" class="section3__about">
        <h3 class="section3__about__ttl">①飼育環境へのこだわり</h3>
        <p class="section3__about__txt">
          きれい好きな動物の豚は、清潔な豚舎づくりが最も重要なポイントです。女性スタッフによる、心配りのゆき届いた管理体制、清潔、消毒などに厳しい目を配り健康な豚に育てています。
          <br />
          女性特有の感性と優しい愛情で、ストレスを与えず穏和に育てることが、よい豚肉、おいしい肉づくりのポイントです。
        </p>
        <h3 class="section3__about__ttl">②飼料へのこだわり</h3>
        <p class="section3__about__txt">
          肉の甘みを引き出すトウモロコシ、麦類、ビタミンをたくさん含んだ海藻など、最高の肉質に仕上げるため、独自にブレンドしたこだわりの飼料で育てられています。
          <br />
          豚肉の質は、その豚が日々食べている飼料で決まるといっても過言ではありません。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Yonezawabuta"
};
</script>

<style lang="scss" scoped>
.content {
  background-color: black;
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  width: 100%;
  margin: 0 auto;
}

.head__ttl {
  font-size: 1.5rem;
  text-align: left;
  border-bottom: solid 1px;
}

.section1 {
  margin-bottom: 8rem;
}

.section1__ttl {
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.section1__txt {
  text-align: left;
  font-size: 1rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.section2__ttl {
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.section2__txt {
  text-align: left;
  font-size: 1rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.section3__about__ttl {
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.section3__about__txt {
  text-align: left;
  font-size: 1rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.section3_img {
  margin: 0 auto;
}

@media screen and (min-width: 800px) {
  .content {
    background-image: url(../assets/米澤豚一番育ち-background.png);
    background-position: right top;
    background-repeat: no-repeat;
  }
}
</style>

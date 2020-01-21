<template>
  <v-app>
    <v-container class="content">
      <h2 class="head__ttl">純粋金華豚</h2>
      <div class="section1">
        <h3 class="section1__ttl">
          国内で限られた生産量（1日2～3頭）「純粋金華豚」ってどういう豚？
        </h3>
        <p class="section1__txt">
          1988年に平田牧場が中国より導入しました。 <br />
          もともと純粋金華豚は中国浙江省金華が原産の豚で、 <br />
          最高級中華食材「金華ハム」の原料として知られています。 <br />
          掛合せた平牧金華豚ではありません！ <br />
          掛合せていない金華豚、それが <em>「純粋金華豚」</em>です。
        </p>
        <h3 class="section1__ttl">
          高価で希少、幻と言われる豚
        </h3>
        <p class="section1__txt">
          頭と尻尾だけが黒い独特の風貌は金華豚純粋種の証です。 <br />
          パークシャー種（黒豚）よりもさらに小さく、さらに成熟日数も多く <br />
          かかる品種であることが、高価で希少、幻と言われる由縁です。 <br />
          身体が小さく成熟日数も長くかかるため経済効率が悪く、 <br />
          非常に割高な豚肉になってしまいます。 <br />
          おこめ育ち金華豚は、普通の豚肉と比べ優れた味わいを持っていますので、
          <br />
          格段の違いを実感して頂けることでしょう。
        </p>
      </div>
      <div class="section2">
        <img src="../assets/純粋金華豚1.jpg" class="section2__img" />
        <img src="../assets/純粋金華豚2.jpg" class="section2__img" />
        <img src="../assets/純粋金華豚3.jpg" class="section2__img" />
      </div>
      <v-row class="section3">
        <v-col cols="12" sm="6" md="6" class="section3__about">
          <h3 class="section3__about__ttl">①飼育環境へのこだわり</h3>
          <p class="section3__about__txt">
            一般的な豚よりも長めに、純粋金華豚は約230日、肥育しています（一般豚約160日）。
            <br />
            開放豚舎で、のびのびとゆっくり育てることで、ストレスを感じない健康な豚が育ちます。
            <br />
            衛生環境のよい豚舎で育てることで、豚特有の臭みがありません。
          </p>
          <h3 class="section3__about__ttl">②飼料へのこだわり</h3>
          <p class="section3__about__txt">
            餌には遺伝子組み換えのない（NON-GMO）、トウモロコシ、大豆粕、大麦、飼料用米を与えています。
            <br />
            NON-GMOの選別は現代では大変難しくなってきています。さらにトウモロコシはポストハーベストフリー（PHF）（収穫後、無農薬）のものを使用。
          </p>
          <h3 class="section3__about__ttl">③飼料用米について</h3>
          <p class="section3__about__txt">
            山形県の使っていない田んぼ（休耕田）を利用して餌の米を作ることによって、日本の食糧自給率の向上へも貢献しています。
            <br />
            食味もさらにアップ！脂が甘くなります。
          </p>
        </v-col>
        <v-col cols="12" sm="6"  md="5" offset-md="1">
          <img
            src="../assets/金華豚証明書.jpg"
            alt="最上屋は「平田牧場純粋金華豚」の正規取扱店です。"
            class="section3__img"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.content {
  background-image: url(../assets/純粋金華豚-background.jpg);
  background-position: right top;
  background-repeat: no-repeat;
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  width: 100%;
  margin-bottom: 12rem;
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

.section2 {
  margin-bottom: 8rem;
}

.section2__img {
  display: inline-block;
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
</style>

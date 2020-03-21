<template>
  <div class="wrap">
    <div class="main">
      <h2 class="headding">純粋金華豚</h2>
      <div class="content">
        <h3 class="content__ttl">
          国内で限られた生産量（1日2～3頭）「純粋金華豚」ってどういう豚？
        </h3>
        <p class="content__txt">
          1988年に平田牧場が中国より導入しました。 <br />
          もともと純粋金華豚は中国浙江省金華が原産の豚で、 <br />
          最高級中華食材「金華ハム」の原料として知られています。 <br />
          掛合せた平牧金華豚ではありません！ <br />
          掛合せていない金華豚、それが「純粋金華豚」です。
        </p>
        <h3 class="content__ttl">
          高価で希少、幻と言われる豚
        </h3>
        <p class="content__txt">
          頭と尻尾だけが黒い独特の風貌は金華豚純粋種の証です。 <br />
          パークシャー種（黒豚）よりもさらに小さく、さらに成熟日数も多く <br />
          かかる品種であることが、高価で希少、幻と言われる由縁です。 <br />
          身体が小さく成熟日数も長くかかるため経済効率が悪く、 <br />
          非常に割高な豚肉になってしまいます。 <br />
          おこめ育ち金華豚は、普通の豚肉と比べ優れた味わいを持っていますので、<br />
          格段の違いを実感して頂けることでしょう。
        </p>
      </div>
      <div class="content__img">
        <p>
          <img src="../assets/純粋金華豚1.jpg" alt="金華豚ロースの写真" />
        </p>
        <p>
          <img src="../assets/純粋金華豚2.jpg" alt="金華豚切落しの写真" />
        </p>
        <p>
          <img src="../assets/純粋金華豚3.jpg" alt="金華豚の写真" />
        </p>
      </div>
      <div class="content">
        <h3 class="content__ttl">①飼育環境へのこだわり</h3>
        <p class="content__txt">
          一般的な豚よりも長めに、純粋金華豚は約230日、肥育しています（一般豚約160日）。
          <br />
          開放豚舎で、のびのびとゆっくり育てることで、ストレスを感じない健康な豚が育ちます。
          <br />
          衛生環境のよい豚舎で育てることで、豚特有の臭みがありません。
        </p>
        <h3 class="content__ttl">②飼料へのこだわり</h3>
        <p class="content__txt">
          餌には遺伝子組み換えのない（NON-GMO）、トウモロコシ、大豆粕、大麦、飼料用米を与えています。
          <br />
          NON-GMOの選別は現代では大変難しくなってきています。さらにトウモロコシはポストハーベストフリー（PHF）（収穫後、無農薬）のものを使用。
        </p>
        <h3 class="content__ttl">③飼料用米について</h3>
        <p class="content__txt">
          山形県の使っていない田んぼ（休耕田）を利用して餌の米を作ることによって、日本の食糧自給率の向上へも貢献しています。
          <br />
          食味もさらにアップ！脂が甘くなります。
        </p>
      </div>
      <div class="kinkabuta-certificate">
        <img
          src="../assets/金華豚証明書.jpg"
          alt="最上屋は「平田牧場純粋金華豚」の正規取扱店です。"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  background: black;
}

.main {
  background-color: black;
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  width: 90%;
  margin: 0 auto;
}

.headding {
  font-size: 1.5rem;
  text-align: left;
  border-bottom: solid 1px;
}

.content {
  margin: {
    bottom: 5rem;
  }
}

.content__ttl {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.content__txt {
  margin: {
    right: 1rem;
    bottom: 2rem;
    left: 1rem;
  }
  font-size: 1rem;
}

.content__img {
  display: flex;
  justify-content: center;
  margin: {
    right: 0;
    bottom: 5rem;
    left: 0;
  }
}

.kinkabuta-certificate {
  padding: {
    bottom: 8rem;
  }
}

@media screen and (min-width: 900px) {
  .main {
    background-color: black;
    background-image: url(../assets/純粋金華豚-background.jpg);
    background-position: right top;
    background-repeat: no-repeat;
  }
}
</style>

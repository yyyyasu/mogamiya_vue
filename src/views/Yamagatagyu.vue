<template>
  <div class="wrap">
    <div class="main">
      <h2 class="heading">総称山形牛</h2>
      <div class="content">
        <img
          src="../assets/soushou_yamagatagyu1.jpg"
          alt="山形牛ロースの写真"
          class="content__img--big"
        />
        <div>
          <h3 class="content__ttl">
            “味の山形牛”とも言われる最上級のブランド黒毛和牛
          </h3>
          <p class="content__txt">
            総称山形牛は、山形県内において最も長く育成・飼育された黒毛和種であり、社団法人日本食肉格付協会の定める肉質等級4以上のものであることが、
            出荷に対して基準として設けられています。<br />
            通常は月齢8~11ヶ月の子牛から育て、出荷は30~36ヶ月。しかし寒暖の差が大きい山形県では、じっくりゆっくり増体するため、出荷までもう少しかかります。
            そのため、肉質はきめ細やかでサシ(脂肪交雑)も非常に良い状態に仕上がるのです。<br />
            そして、山形県は清流の宝庫であり、その良質な水が良い肉牛になるための好条件なのです。<br />
            <br />
            当店では、その山形牛の中から特に上質の“A4・A5ランクの雌牛（処女牛）”を厳選して仕入れています。
          </p>
        </div>
      </div>
      <div class="content">
        <img
          src="../assets/総称山形牛2.jpg"
          alt="山形牛切落しの写真"
          class="content__img--small"
        />
        <div class="content__inner">
          <h3 class="content__ttl">
            ①家柄よし
          </h3>
          <p class="content__txt">
            産地、生産者が確かなので安全・安心です。<br />
            飼料の安全性をはじめ、産地や生産者が確かな山形牛だけに設定しています。<br />
            個体識別番号以外にも、子牛登記証明書、産地証明書、牛肉安全確認証などがついています。
          </p>
          <h3 class="content__ttl">
            ②育ちよし
          </h3>
          <p class="content__txt">
            良質な肉質を育む自然環境です。<br />
            昼と夜の寒暖差と、夏と冬の厳しさがキメ細やかな肉目を作ります。<br />
            絹のような霜降りと口の中でとろける上品な味わいは、その気候風土と愛情の恵みです。
          </p>
        </div>
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
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.heading {
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

@media screen and (min-width: 900px) {
  .content {
    display: flex;
  }

  .content__img--small {
    order: 2;
  }

  img {
    align-self: flex-start; /* flexで並べた時の画像の伸び縮みの対処 */
  }
}
</style>

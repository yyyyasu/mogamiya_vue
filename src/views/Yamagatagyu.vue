<template>
  <v-app>
    <v-container class="content">
      <h2 class="head__ttl">総称山形牛</h2>
      <v-row no-gutters class="section1">
        <v-col cols="12" sm="6">
          <img src="../assets/総称山形牛1.jpg" />
        </v-col>
        <v-col cols="12" sm="6" class="section1__about">
          <h3 class="section1__about__ttl">
            “味の山形牛”とも言われる最上級のブランド黒毛和牛
          </h3>
          <p class="section1__about__txt">
            冬に脂肪が付き夏に痩せる―、この季節の循環を2回越すことで身が引締まり、サシの入ったきれいな霜降り肉となります。
            <br />
            また、雪国山形の寒暖差が育んだその肉質はキメ細やかで口どけ良く、人の体温で融け出す上質の脂と相まって“極上の風味と舌触り”。
            <br />
            当店では、その山形牛の中から特に上質の“A4・A5ランクの雌牛（処女牛）”を厳選して仕入れています。
          </p>
        </v-col>
      </v-row>
      <v-row no-gutters class="section2">
        <v-col cols="12" sm="6" order-sm="2">
          <img src="../assets/総称山形牛2.jpg" class="section2__img"/>
        </v-col>
        <v-col cols="12" sm="6" order-sm="1" class="section2__about">
          <h3 class="section2__about__ttl">
            ①家柄よし
          </h3>
          <p class="section2__about__txt">
            産地、生産者が確かなので安全・安心です。
            <br />
            飼料の安全性をはじめ、産地や生産者が確かな山形牛だけに設定しています。
            <br />
            個体識別番号以外にも、子牛登記証明書、産地証明書、牛肉安全確認証などがついています。
          </p>
          <h3 class="section2__about__ttl">
            ②育ちよし
          </h3>
          <p class="section2__about__txt">
            良質な肉質を育む自然環境です。
            <br />
            昼と夜の寒暖差と、夏と冬の厳しさがキメ細やかな肉目を作ります。
            <br />
            絹のような霜降りと口の中でとろける上品な味わいは、その気候風土と愛情の恵みです。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.content {
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  width: 100%;
  margin-bottom: 12rem;
  // background-color: blue;
}

.head__ttl {
  font-size: 1.5rem;
  text-align: left;
  border-bottom: solid 1px;
}

.section1 {
  margin-bottom: 3rem;
}

.section1__about {
  text-align: left;
  margin-bottom: 2rem;
}

.section1__about__ttl {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.section1__about__txt {
  font-size: 1rem;
  margin-left: 2rem;
}

.section2__img {    
  float: right;
}

.section2__about {
  text-align: left;
}

.section2__about__ttl {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.section2__about__txt {
  font-size: 1rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
</style>

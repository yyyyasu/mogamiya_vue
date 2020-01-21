<template>
  <div id="app">
    <v-app>
      <v-container class="content">
        <v-row no-gutters>
          <v-col cols="" xs="" class="about">
            <h3 class="about__ttl-1">本当においしいお肉をお届けしたい。</h3>
            <p class="about__txt-1">
              「本当においしいお肉だけをお届けしたい。」
              <br />
              そんな想いで私たちは「最上屋」をつくりました。
              <br />
              総称山形牛を中心にA4・A5ランクの雌牛（処女牛）を仕入れており、去勢牛、交雑種は一切扱っておりません。
              <br />
              平田牧場から超希少価値のある幻の豚「純粋金華豚」を直接仕入れております。
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="" xs="" class="about">
            <h3 class="about__ttl-2"><em>“雌牛”</em>へのこだわり</h3>
            <p class="about__txt-2">
              雌牛の肉質はキメ細やかで、口どけなめらかな脂は、融点が低く甘みがあり、さっぱりとしています。
              <br />
              「サシの入ったお肉はあまり食べられない」
              <br />
              「脂で胃もたれする」
              <br />
              そういった方にも食べていただきたく、当店は雌牛にこだわって仕入れております。
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style lang="scss" scoped>
.content {
  color: white;
  font-family: "游明朝", "HGP明朝E", serif;
  width: 100%;
  margin: 8rem auto 12rem;
  // background-color: red;
}

.about__ttl-1 {
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

.about__txt-1 {
  text-align: left;
  font-size: 1.2rem;
  line-height: auto;
  margin-left: 3rem;
  margin-bottom: 8rem;
}

.about__ttl-2 {
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

.about__txt-2 {
  text-align: left;
  font-size: 1.2rem;
  line-height: auto;
  margin-left: 3rem;
  // margin-bottom: 8rem;
}
</style>

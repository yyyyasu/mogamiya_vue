<template>
  <div class="wrap">
    <p class="logo">
      <img src="../assets/店舗ロゴ背景透明化.png" alt="最上屋ロゴマーク" />
    </p>
    <div class="main">
      <div class="content">
        <h3 class="content__ttl">
          本当においしいお肉をお届けしたい。
        </h3>
        <div class="content__txt">
          <p>
            「本当においしいお肉だけをお届けしたい。」<br />
            そんな想いで私たちは「最上屋」をつくりました。<br />
            総称山形牛を中心にA4・A5ランクの雌牛（処女牛）を仕入れており、去勢牛、交雑種は一切扱っておりません。<br />
            平田牧場から超希少価値のある幻の豚「純粋金華豚」を直接仕入れております。
          </p>
        </div>
      </div>
      <div class="content">
        <h3 class="content__ttl">
          “雌牛”へのこだわり
        </h3>
        <div class="content__txt">
          <p>
            雌牛の肉質はキメ細やかで、口どけなめらかな脂は、融点が低く甘みがあり、さっぱりとしています。<br />
            「サシの入ったお肉はあまり食べられない」<br />
            「脂で胃もたれする」<br />
            そういった方にも食べていただきたく、当店は雌牛にこだわって仕入れております。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  color: black;
}

.logo {
  width: 50%;
  height: auto;
  margin: 5rem auto;
  animation-name: slidein;
  animation-duration: 3s;
}

.content {
  margin: {
    bottom: 2rem;
  }
}

.content__ttl {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.content__txt {
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
}

@keyframes slidein {
  from {
    opacity: 0;
    transform: translateX(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translate(0);
  }
  to {
    opacity: 1;
    transform: translate(1);
  }
}

@media screen and (min-width: 680px) {
  .main {
    display: flex;
  }

  .content {
    width: 50%;
  }
}
</style>

// import コンポーネント名 from 'ページ遷移で呼ばれるVueファイルのパス'
import Vue from 'vue'
import Router from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import Top from './views/Top.vue'
import Yamagatagyu from './views/Yamagatagyu.vue'
import Kinkabuta from './views/Kinkabuta.vue'
import Yonezawabuta from './views/Yonezawabuta.vue'
import ShopInfo from './views/ShopInfo.vue'


// 必要な時だけHomeコンポーネントを取得するようwebpackに指示
// const Top = () => import('./views/Top.vue')

Vue.use(Router) // Vue.useメソッドを使って、VueにRouterプラグインを登録

export default new Router({
  mode: 'history', // historyとする事でurlからhash(#)を取り除くことができる
  base: process.env.BASE_URL,
  routes: [ // URLのパスと紐ずくコンポーネントのマッピング
    {
      path: '/', // path: '宛先パス'
      name: 'MainHeader', // name: 'コンポーネント名' 名前付きルート
      component: MainHeader  // component: 表示するコンポーネント名
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/yamagatagyu',
      name: 'Yamagatagyu',
      component: Yamagatagyu
    },
    {
      path: '/kinkabuta',
      name: 'Kinkabuta',
      component: Kinkabuta
    },
    {
      path: '/yonezawabuta',
      name: 'Yonezawabuta',
      component: Yonezawabuta
    },
    {
      path: '/shopinfo',
      name: 'ShopInfo',
      component: ShopInfo
    },
  ]
})
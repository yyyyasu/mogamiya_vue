// import コンポーネント名 from 'ページ遷移で呼ばれるVueファイルのパス'
import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'

// 必要な時だけHomeコンポーネントを取得するようwebpackに指示
// const Top = () => import('./views/Top.vue')

Vue.use(Router) // Vue.useメソッドを使って、VueにRouterプラグインを登録

export default new Router({
  mode: 'history', // historyとする事でurlからhash(#)を取り除くことができる
  base: process.env.BASE_URL,
  routes: [ // URLのパスと紐ずくコンポーネントのマッピング
    {
      path: '/', // path: '宛先パス'
      name: 'Top', // name: 'コンポーネント名' 名前付きルート
      component: Top // component: 表示するコンポーネント名
    },
    {
      path: '/Yamagatagyu',
      name: 'Yamagatagyu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Yamagatagyu.vue') // 時間差でAbout.vueを読み込み画面遷移
    }
  ]
})
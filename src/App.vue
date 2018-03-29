<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="./assets/logo.png" alt="" style="width: 40px;height: 40px">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav style="margin: 0 auto">
          <b-nav-item :href="nav.path" :class="{'sel': selectIdx === index}" v-for="(nav,index) in mavBar" :key="index">{{nav.title}}</b-nav-item>

        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        mavBar: [
          {title: '首页', path: '/home'},
          {title: '偶忆商城', path: '/home'},
          {title: '智能酒店', path: '/home'},
          {title: '智能家居（公寓）', path: '/home'},
          {title: '智能办公室', path: '/home'},
          {title: '智慧商场', path: '/home'},
          {title: '合作加盟', path: '/home'},
          {title: '生态计划', path: '/home'},
          {title: '云平台', path: '/home'},
          {title: '偶忆论坛', path: '/home'},
        ],
        selectIdx: 0,
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .router-view {
    margin-top: 66px;
  }
</style>

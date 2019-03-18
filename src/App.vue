<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
    	<router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
	import Header from './components/Header'
	import Footer from './components/Footer'
	export default {
	  name: 'App',
	  components:{
	  	'app-header':Header,
	  	'app-footer':Footer,
	  }
	}
</script>

<style lang="less">
@import "./css/font/iconfont.css";
@import "./css/common.css";
	body{
		margin: 0;
	}
</style>

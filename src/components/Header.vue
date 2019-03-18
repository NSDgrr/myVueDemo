<template>
	<header>
		<div class="header">
	    <img src="../assets/indexbanner.png"/>
	    <ul>
	    	<router-link to="/">首页</router-link>
	    	<router-link to="/courseList">选课中心</router-link>
	    	<router-link to="/MyCourse">我的课程</router-link>
	    	<router-link to="/Teacher">教师招募</router-link>
	    	<router-link to="/Book">教辅图书</router-link>
	    	<router-link to="/AboutUs">关于我们</router-link>
	    </ul>
	  </div>
	</header>
  
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      list: ['首页','选课中心','我的课程','教师招募','教辅图书','关于我们'],
      isActive: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	
	li{
		display: inline-block;
		cursor: pointer;
	}
	header{
		width: 100%;
		height: 89px;
		background: #fff;
	}
	.header{
		width: 1200px;
		line-height: 89px;
		margin: 0 auto;
	}
	.header img{
		width: 172px;
		height: 84px;
		float: left;
	}
	.header ul{
		width: 924px;
		float: right;
	}
	.header a{
		padding: 0 30px;
		font-size: 16px;
		color: #333;
		display: inline-block;
	}
	.router-link-exact-active{
		background: #00B285;
		color: #fff !important;
	}
</style>

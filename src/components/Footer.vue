<template>
	<footer>
		<div class="tip">
			<router-link to="/AboutUs">关于我们</router-link>
	    	<router-link to="">合作专区</router-link>
	    	<router-link to="">老师规范</router-link>
	    	<router-link to="">服务协议</router-link>
	    	<router-link to="/AboutUs">联系我们</router-link>
		</div>
		
		<p>{{addr}}</p>
		<p>{{company}}</p>
		<div id="">
			<i class="icon iconfont icon-weixin" style="color: #00b285;font-size: 19px;"></i> 
  	 		<i class="icon iconfont icon-weibo" style="color: #fdb75a;font-size: 19px;"></i>
  	 		<i class="icon iconfont icon-QQ" style="color: #0193df;font-size: 19px;"></i>
		</div>
	</footer>
  
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      addr: '地址：北京市朝阳区朝阳路85号铜牛北京铜牛电影文化产业园4号楼  京ICP备09032638号',
      company:'Copyright © 2018 模方数学 版权所有  品牌策划：细水科技'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer{
		width: 100%;
		height: 250px;
		background: #393c40;
		border-top: 3px solid #00b285;
		padding: 57px 0;
		box-sizing: border-box;
		text-align: center;
	}
	.tip{
		margin-bottom: 18px;
	}
	a{
		font-size: 16px;
		color: #9e9e9e;
		padding: 0 20px;
	}
	p{
		font-size: 14px;
		color: #fff;
		margin-bottom: 12px;
	}
</style>

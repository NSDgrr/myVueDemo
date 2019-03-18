<template>
	<div class="">
		<div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
		    <div class="slideshow">
		      <transition-group tag="ul" name="image">
		        <li v-for="(item, index) in bannerArry" v-show="index===mark" :key="index">
		          <a href="#">
		            <img :src='img+item.image'>
		          </a>
		        </li>
		      </transition-group>
		    </div>
		    <div class="bullet">
		      <span v-for="(item, index) in bannerArry" :class="{ 'active':index===mark }"
		      @click="change(index)" :key="index"></span>
		    </div>
	    </div>
		<div class="indexContent">
			<div class="category">
				<ul class="">
					<span class="name">
						<i></i>
						{{grade[0].name}}
					</span>
					<li :class="{'choice':0==gIndex}" @click="changeGrde(0, 0)" class="type">全部</li>
					<li v-for="(item,index) in grade[0].subclass" :key="index" :class="{'choice':index+1==gIndex}" @click="changeGrde(item.id, index+1)" class="type">{{item.name}}</li>
				</ul>
				<ul class="">
					<span class="name">
						<i></i>
						{{grade[1].name}}
					</span>
					<li :class="{'choice':0==tIndex}" @click="changeType(0, 0)" class="type">全部</li>
					<li v-for="(item,index) in grade[1].subclass" :key="index" :class="{'choice':index+1==tIndex}" @click="changeType(item.id, index+1)" class="type">{{item.name}}</li>
				</ul>
			</div>
			<!--同步数学-->
			<div class="sync_math">
				<div class="title">
					<span class="flL tit">同步数学</span>
					<span class="flR seemore">查看更多<i class="iconfont icon-xiayiyehouyiye"></i></span>
				</div>
				<div v-if="syncMath!=''" class="sync_contents">
					<div v-for="(item,idx) in syncMath" :key="idx" @click="courseDetail(item.id)" class="eachCourse">
						<img :src="img+item.image"/>
						<div class="messages">
							<p class="courseName">{{item.title}}</p>
							<p class="price">¥{{item.price}}元<i>起</i></p>
							<button class="apply">立即报名</button>
							<p class="nums">共<span>{{item.speak}}</span>讲<span>{{item.enrollment}}</span>人已报名</p>
							<span class="tips">{{item.type}}</span>
						</div>
							
					</div>
				</div>
				<div v-else class="sync_none">
					暂无数据
				</div>
			</div>
		</div>
		<div class="cubeMathCont">
			<div class="cube_math">
				<div class="title">
					<span class="flL tit">魔方数学</span>
					<ul class="flL cube_tits">
						<span v-for="(item,index) in cubeNav" :key="index" :class="{'cubeNav':index==lIndex}" @click="changeCube(item.id, index)"><li>{{item.name}}</li>|</span>
					</ul>
					<span class="flR seemore">查看更多<i class="iconfont icon-xiayiyehouyiye"></i></span>
					
				</div>
				<div v-if="cubeMath!=''" class="cube_contents">
					<div v-for="(item,index) in cubeMath" class="oneCourse">
						<div class="cTit">
							<span class="flL">{{item.title}}</span>
							<b class="flR">数</b>
						</div>
						<div class="teachers">
							<span v-for="(item1,idx) in item.teacher">
								<img :src="img+item1.image"/>
								<b>{{item1.name}}</b>
								<i>{{item1.occupation}}</i>
							</span>
						</div>
						<div class="time">
							<span>
								<i class="iconfont icon-icon-test clock"></i>
								开课时间
								<b></b>
							</span>
							<p>{{item.starttime}}-{{item.endtime}}</p>
						</div>
						<div class="cBot">
							<span class="price">¥{{item.price}}</span>
							<b class="flR">{{item.type}}</b>
						</div>
					</div>
				</div>
				<div v-else class="cube_none">暂无课程</div>
			</div>
		</div>
	</div>
		
</template>

<script>
	export default {
		data(){
			return {
				img:'http://www.mfmath.com/',
				timer: null, //定时器
      			mark: 0, //比对图片索引的变量
				bannerArry:[],
				grade:'',//顶部nav
				gIndex:0,
				tIndex:0,
				gradeId:0,//年级id
				typeId:0,//类型id
				syncMath:[],//同步数学
				
				lIndex:0,
				listId:'',//魔方数学导航id
				cubeNav:[],//魔方数学nav
				cubeMath:[],//魔方数学
			}
		},
		created() {
			// fetch('http://www.mfmath.com/api/index/index',{
			// 	method:"post"
			// })
			// .then(result=>{
			// 	console.log(result)
			// })
			var that=this;
			//接口http://www.mfmath.com/api/index/index
			this.$axios.post('http://www.mfmath.com/api/index/index').then(data=>{
				console.log(data)
				if(data.data.code==0){
					var bannerArry=data.data.data.lunbo;
					var category=data.data.data.category;
					var coursetype=data.data.data.coursetype;
					
					console.log(category)
					console.log(bannerArry,'轮播')
					that.bannerArry=bannerArry;
					that.grade=category;
					that.cubeNav=coursetype;
				}
			})
			this.getLessons()
			this.play()
		},
		methods: {
			autoPlay () {
		      this.mark++;
		      if (this.mark === 4) {
		        this.mark = 0
		      }
		    },
		    play () {
		      this.timer = setInterval(this.autoPlay, 1500)
		    },
		    change (i) {
		      this.mark = i
		    },
		    stop () {
		      clearInterval(this.timer)
		    },
		    move () {
		      this.timer = setInterval(this.autoPlay, 1500)
		    },
			// 年级选择
            changeGrde (id, index){
            	this.gIndex=index
            	this.gradeId = id
                // 数据请求
                this.getLessons()
            },
            // 类型选择
            changeType (id, index){
            	this.tIndex=index
            	this.typeId = id
                // 数据请求
                this.getLessons()
            },
            //魔方数学
            changeCube (id, index){
            	this.lIndex=index
            	this.listId = id
                // 数据请求
                this.getLessons()
            },
            // 获取列表数据
            getLessons(val){
            	this.$axios.post('http://www.mfmath.com/api/index/index',{
            		course:this.listId,
            		grade:this.gradeId,
            		types:this.typeId
            	}).then(data=>{
					console.log(data)
					if(data.data.code==0){
						var syncMath=data.data.data.dcourse;
						var cubeMath=data.data.data.course;
						console.log(syncMath,'同步数学')
						console.log(cubeMath,'魔方数学')
						this.syncMath=syncMath;
						this.cubeMath=cubeMath;
					}
				})
            },
            //课程详情
            courseDetail(id){
            	console.log(id)
            }
		}
	}
</script>

<style lang="less" scoped>
	@import url("../css/index");
</style>
<template>
	<el-row>
		<el-col :xs="{span:24,offset:0}" :sm="{span:14,offset:2}" :md="{span:14,offset:2}" :lg="{span:14,offset:2}" :xl="{span:14,offset:2}">
			<div class="grid-content bg-purple-light">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="menuHandleSelect"
				 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">
						<router-link to="/home">首页</router-link>
					</el-menu-item>
					<el-menu-item index="2">
						<router-link to="/movie">电影</router-link>
					</el-menu-item>
					<el-menu-item index="3">
						<router-link to="/tv">电视剧</router-link>
					</el-menu-item>
					<el-menu-item index="4">
						<router-link to="/cartoon">动漫</router-link>
					</el-menu-item>
				</el-menu>
			</div>
		</el-col>
		<!--搜索栏-->
		<el-col :xs="{span:24,offset:0}" :sm="{span:7,offset:0}" :md="{span:7,offset:0}" :lg="{span:6,offset:0}" :xl="{span:5,offset:0}">
			<div class="grid-content bg-purple" style="background-color: #545c64;height: 60px;">
				<div style="background-color: #545c64; margin:0 auto;height: 60px">
					<el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="searchHandleSelect">
						<el-button @click="searchBtn" slot="append" icon="el-icon-search" style="background-color: #545c64;" round></el-button>
					</el-autocomplete>
				</div>
			</div>
		</el-col>
		<el-col :xs="{span:12,offset:0}" :sm="{span:10,offset:2}" :md="{span:9,offset:3}" :lg="{span:6,offset:6}" :xl="{span:5,offset:7}">
			<div class="grid-content bg-purple">
				<el-card :body-style="{ padding: '0px' }">
					<div style="padding: 14px;">
						<span>好吃的汉堡</span>
					</div>
					<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
				</el-card>
			</div>
		</el-col>
		<el-col :xs="{span:12,offset:0}" :sm="{span:10,offset:0}" :md="{span:9,offset:0}" :lg="{span:6,offset:0}" :xl="{span:5,offset:0}">
			<div class="grid-content bg-purple-light">
				<el-card>
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
					</div>
					<div v-for="o in 9" :key="o" class="text item" >
						<span>{{'列表内容 ' + o }}</span>
					</div>
				</el-card>
			</div>
		</el-col>
		<el-col :xs="{span:24,offset:0}" :sm="{span:22,offset:1}" :md="{span:21,offset:2}" :lg="{span:20,offset:2}" :xl="{span:19,offset:2}">
			<div class="grid-content">
				<br>
				<el-divider><i class="el-icon-s-platform"></i></el-divider>
				<el-badge value="new" class="item">
				  <el-button type="success" round>在线播放</el-button>
				</el-badge>
				
			</div>
		</el-col>
		<el-col :xs="{span:24,offset:0}" :sm="{span:22,offset:1}" :md="{span:21,offset:2}" :lg="{span:20,offset:2}" :xl="{span:19,offset:2}">
			<div class="grid-content bg-purple">
				广告位
			</div>
		</el-col>
		<el-col :xs="{span:24,offset:0}" :sm="{span:22,offset:1}" :md="{span:21,offset:2}" :lg="{span:20,offset:2}" :xl="{span:19,offset:2}">
			<div class="grid-content bg-purple">
				<p>最新更新-网站地图-百度地图-谷歌地图-RSS订阅
本网站提供的最新电视剧和电影资源均系收集于各大视频网站，本网站只提供web页面服务，并不提供影片资源存储，也不参与录制、上传
若本站收录的节目无意侵犯了贵司版权，请给网页底部邮箱地址来信，我们会及时处理和回复，谢谢
侵权投诉请附带版权所属证明发至邮箱Qingliuyan#foxmail.com(#换成@)</p>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				state: '',
				activeIndex: '4',
				currentDate: new Date()
			};
		},
		methods: {
			searchBtn() {
				console.log(this.state);
			},
			searchHandleSelect(item) {
				//搜索栏选中
				console.log(item, "哈哈哈", this.state);
			},
			menuHandleSelect(key, keyPath) {
				//导航栏索引
				console.log(key, keyPath, "嘻嘻嘻");
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
			
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					cb(results);
				}, 100 * Math.random());
			},
			createStateFilter(queryString) {
				return (state) => {
					return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
					{
						"value": "新旺角茶餐厅",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
					},
					{
						"value": "泷千家(天山西路店)",
						"address": "天山西路438号"
					},
					{
						"value": "胖仙女纸杯蛋糕（上海凌空店）",
						"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
					},
					{
						"value": "贡茶",
						"address": "上海市长宁区金钟路633号"
					},
					{
						"value": "豪大大香鸡排超级奶爸",
						"address": "上海市嘉定区曹安公路曹安路1685号"
					},
					{
						"value": "茶芝兰（奶茶，手抓饼）",
						"address": "上海市普陀区同普路1435号"
					},
					{
						"value": "十二泷町",
						"address": "上海市北翟路1444弄81号B幢-107"
					},
					{
						"value": "星移浓缩咖啡",
						"address": "上海市嘉定区新郁路817号"
					},
					{
						"value": "阿姨奶茶/豪大大",
						"address": "嘉定区曹安路1611号"
					},
					{
						"value": "新麦甜四季甜品炸鸡",
						"address": "嘉定区曹安公路2383弄55号"
					},
					{
						"value": "Monica摩托主题咖啡店",
						"address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
					},
					{
						"value": "浮生若茶（凌空soho店）",
						"address": "上海长宁区金钟路968号9号楼地下一层"
					},
					{
						"value": "NONO JUICE  鲜榨果汁",
						"address": "上海市长宁区天山西路119号"
					},
					{
						"value": "CoCo都可(北新泾店）",
						"address": "上海市长宁区仙霞西路"
					},
					{
						"value": "快乐柠檬（神州智慧店）",
						"address": "上海市长宁区天山西路567号1层R117号店铺"
					},
					{
						"value": "Merci Paul cafe",
						"address": "上海市普陀区光复西路丹巴路28弄6号楼819"
					},
					{
						"value": "猫山王（西郊百联店）",
						"address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
					},
					{
						"value": "枪会山",
						"address": "上海市普陀区棕榈路"
					},
					{
						"value": "纵食",
						"address": "元丰天山花园(东门) 双流路267号"
					},
					{
						"value": "钱记",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "壹杯加",
						"address": "上海市长宁区通协路"
					},
					{
						"value": "唦哇嘀咖",
						"address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
					},
					{
						"value": "爱茜茜里(西郊百联)",
						"address": "长宁区仙霞西路88号1305室"
					},
					{
						"value": "爱茜茜里(近铁广场)",
						"address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
					},
					{
						"value": "鲜果榨汁（金沙江路和美广店）",
						"address": "普陀区金沙江路2239号金沙和美广场B1-10-6"
					},
					{
						"value": "开心丽果（缤谷店）",
						"address": "上海市长宁区威宁路天山路341号"
					},
					{
						"value": "超级鸡车（丰庄路店）",
						"address": "上海市嘉定区丰庄路240号"
					},
					{
						"value": "妙生活果园（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "香宜度麻辣香锅",
						"address": "长宁区淞虹路148号"
					},
					{
						"value": "凡仔汉堡（老真北路店）",
						"address": "上海市普陀区老真北路160号"
					},
					{
						"value": "港式小铺",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "蜀香源麻辣香锅（剑河路店）",
						"address": "剑河路443-1"
					},
					{
						"value": "北京饺子馆",
						"address": "长宁区北新泾街道天山西路490-1号"
					},
					{
						"value": "饭典*新简餐（凌空SOHO店）",
						"address": "上海市长宁区金钟路968号9号楼地下一层9-83室"
					},
					{
						"value": "焦耳·川式快餐（金钟路店）",
						"address": "上海市金钟路633号地下一层甲部"
					},
					{
						"value": "动力鸡车",
						"address": "长宁区仙霞西路299弄3号101B"
					},
					{
						"value": "浏阳蒸菜",
						"address": "天山西路430号"
					},
					{
						"value": "四海游龙（天山西路店）",
						"address": "上海市长宁区天山西路"
					},
					{
						"value": "樱花食堂（凌空店）",
						"address": "上海市长宁区金钟路968号15楼15-105室"
					},
					{
						"value": "壹分米客家传统调制米粉(天山店)",
						"address": "天山西路428号"
					},
					{
						"value": "福荣祥烧腊（平溪路店）",
						"address": "上海市长宁区协和路福泉路255弄57-73号"
					},
					{
						"value": "速记黄焖鸡米饭",
						"address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"
					},
					{
						"value": "红辣椒麻辣烫",
						"address": "上海市长宁区天山西路492号"
					},
					{
						"value": "(小杨生煎)西郊百联餐厅",
						"address": "长宁区仙霞西路88号百联2楼"
					},
					{
						"value": "阳阳麻辣烫",
						"address": "天山西路389号"
					},
					{
						"value": "南拳妈妈龙虾盖浇饭",
						"address": "普陀区金沙江路1699号鑫乐惠美食广场A13"
					}
				];
			},
		},
	}
</script>

<style scoped>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>

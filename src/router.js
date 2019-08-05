
import Pages from "./pages/_index.js"

let routes = [
	{ path: '/hello', component: Pages.HelloWorld, name: '导航页'},
	{ 
		path: '/home', component: Pages.home,
		children: [
			{ path: '/setting', component: Pages.setting, name: '设置'},
			{ path: '/gallery', component: Pages.gallery, name: '相册'},
			{ path: '/mine', component: Pages.mine, name: '我的'},
			{ path: '/favorite', component: Pages.favorite, name: '收藏夹'},
			{ path: '/teamDetail', component: Pages.teamDetail, name: '团队详情'},
			{ path: '/survey', component: Pages.survey, name: '调查问卷'},
			{ path: '/projects', component: Pages.projects, name: '项目'},
			{ path: '/create', component: Pages.create, name: '添加项目'},
			{ path: '/', redirect: '/gallery'}
		]
	},
	{ path: '/*', redirect: '/hello'}
]

export default routes
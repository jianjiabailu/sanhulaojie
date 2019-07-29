
import Pages from "./pages/_index.js"

let routes = [
	{ path: '/hello', component: Pages.HelloWorld},
	{ 
		path: '/home', component: Pages.home,
		children: [
			{ path: '/snow', component: Pages.snow},
			{ path: '/gallery', component: Pages.gallery},
			{ path: '/love', component: Pages.mylove},
			{ path: '/teamDetail', component: Pages.teamDetail},
			{ path: '/survey', component: Pages.survey},
			{ path: '/projects', component: Pages.projects},
			{ path: '/create', component: Pages.create},
			{ path: '/', redirect: '/gallery'}
		]
	},
	{ path: '/*', redirect: '/hello'}
]

export default routes
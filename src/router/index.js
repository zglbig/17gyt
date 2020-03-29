import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
		path: '/',
		component: () => import('../views/show/17gyt-home/17gyt-home')
	},
	{
		path: '/home',
		component: () => import('../views/show/17gyt-home/17gyt-home')
	},
	{
		path: '/movie',
		component: () => import('../views/show/17gyt-movie/17gyt-movie')
	},
	{
		path: '/tv',
		component: () => import('../views/show/17gyt-tv/17gyt-tv')
	},
	{
		path: '/cartoon',
		component: () => import('../views/show/17gyt-cartoon/17gyt-cartoon')
	},
	{
		path: '/moveiDetail',
		component: () => import('../views/show/17gyt-movie-detail/17gyt-movie-detail')
	},
	{
		path: '/tvDetail',
		component: () => import('../views/show/17gyt-tv-detail/17gyt-tv-detail')
	},
]

const router = new VueRouter({
	routes
})

export default router

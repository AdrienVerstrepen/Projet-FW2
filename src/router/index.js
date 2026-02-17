import { createRouter, createWebHistory } from 'vue-router'
import DistroCard from '@/components/DistroCard.vue'
import DistroList from '@/components/DistroList.vue'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/distros', name: 'Distributions', component: DistroList },
  { path: '/distro/:name', name: 'Distribution', component: DistroCard },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

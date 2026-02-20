import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'
import ItemCard from '@/components/ItemCard.vue'
import ItemList from '@/views/ItemList.vue'
import ItemListByCategory from '@/views/ItemListByCategory.vue'
import Wishlist from '@/components/Wishlist.vue'
import FishList from '@/views/FishList.vue'
import FishCard from '@/components/FishCard.vue'

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/fishes', name: 'fishes', component: FishList},
  { path: '/fish/:id', name: 'fish', component: FishCard},
  { path: '/items', name: 'items', component: ItemList },
  { path: '/items/:category', name: 'itemsByCategory', component: ItemListByCategory },
  { path: '/items/:id', name: 'item', component: ItemCard },
  { path: '/wishlist', name: 'wishlist', component: Wishlist },
  { path: '/:pathMatch(.*)*', name: '404', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'
import ItemCard from '@/components/ItemCard.vue'
import ItemList from '@/views/ItemList.vue'
import ItemListByCategory from '@/views/ItemListByCategory.vue'
import Wishlist from '@/components/Wishlist.vue'


import FishList from '@/views/FishList.vue'
import SingleFish from '@/views/SingleFish.vue'

import BugList from '@/views/BugList.vue'
import SingleBug from '@/views/SingleBug.vue'

import FossilList from '@/views/FossilList.vue'
import SingleFossil from '@/views/SingleFossil.vue'

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/fishes', name: 'fishes', component: FishList},
  { path: '/fish/:name', name: 'fish', component: SingleFish},

  { path: '/bugs', name: 'bugs', component: BugList},
  { path: '/bug/:name', name: 'bug', component: SingleBug},

  { path: '/fossils', name: 'fossils', component: FossilList},
  { path: '/fossil/:name', name: 'fossil', component: SingleFossil},

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

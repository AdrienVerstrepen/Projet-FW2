import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlist = defineStore('wishlist', () => {
  // STATES
  wishlist = ref([])

  // GETTERS
  numberOfWishes = computed(() => wishlist.value.length())

  // ACTIONS
  toggleWishlist((id) => {
    
  })
  
  return {
    wishlist,
    numberOfWishes,
    toggleWishlist
  }
})

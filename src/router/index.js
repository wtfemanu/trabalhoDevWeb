import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomeView.vue'
import Carrinho from '../pages/CarrinhoView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/carrinho', name: 'Carrinho', component: Carrinho },
  { path: '/home', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

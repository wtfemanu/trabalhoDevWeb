// stores/cartStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const carrinho = ref([])

  const salvar = () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
  }

  const carregarCarrinho = () => {
    const salvo = localStorage.getItem('carrinho')
    if (salvo) carrinho.value = JSON.parse(salvo)
  }

  const adicionarAoCarrinho = (produto) => {
    const existente = carrinho.value.find(p => p.id === produto.id)
    if (existente) {
      existente.quantidade++
    } else {
      carrinho.value.push({ ...produto, quantidade: 1 })
    }
    salvar()
  }

  const aumentar = (produto) => {
    produto.quantidade++
    salvar()
  }

  const diminuir = (produto) => {
    if (produto.quantidade > 1) {
      produto.quantidade--
    } else {
      remover(produto.id)
    }
    salvar()
  }

  const remover = (id) => {
    carrinho.value = carrinho.value.filter(p => p.id !== id)
    salvar()
  }

  const limpar = () => {
    carrinho.value = []
    localStorage.removeItem('carrinho')
  }

  const total = computed(() =>
    carrinho.value.reduce((soma, item) => soma + item.preco * item.quantidade, 0).toFixed(2)
  )

  // Carrega o carrinho inicialmente
  carregarCarrinho()

  return {
    carrinho,
    total,
    adicionarAoCarrinho,
    aumentar,
    diminuir,
    remover,
    limpar,
    carregarCarrinho
  }
})


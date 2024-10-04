import { defineAsyncComponent, ref, onMounted, onUnmounted, shallowRef } from 'vue'

export function useScreen() {
  const type = ref('open')
  const hero = shallowRef(defineAsyncComponent(() => import('@/components/home/OpenHero.vue')))

  const updateBreakpoint = () => {
    const open = false
    if (open) {
      type.value = 'open'
      hero.value = defineAsyncComponent(() => import('@/components/home/OpenHero.vue'))
    } else {
      type.value = 'close'
      hero.value = defineAsyncComponent(() => import('@/components/home/CloseHero.vue'))
    }
  }

  onMounted(() => {
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint)
  })

  return {
    type,
    hero
  }
}

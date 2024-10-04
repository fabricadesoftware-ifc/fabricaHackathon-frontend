import { defineAsyncComponent, ref, onMounted, onUnmounted, shallowRef } from 'vue'

export function useScreen() {
  const breakpoint = ref('sm')
  const header = shallowRef(
    defineAsyncComponent(() => import('@/components/global/header/HeaderComp1.vue'))
  )

  const updateBreakpoint = () => {
    const width = window.innerWidth
    if (width < 750) {
      breakpoint.value = 'xs'
      header.value = defineAsyncComponent(
        () => import('@/components/global/header/HeaderComp2.vue')
      )
     
    } else {
      breakpoint.value = 'sm'
      header.value = defineAsyncComponent(
        () => import('@/components/global/header/HeaderComp1.vue')
      )
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
    breakpoint,
    header,
  }
}

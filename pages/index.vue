<template>
  <div>
    <Hero :scroll-y="scrollY"></Hero>
    <NavBar :current-section="currentSection"></NavBar>
    <About :scroll-y="scrollY"></About>
    <div id="resume" ref="resume" class="section" style="height: calc(200vh)"></div>
  </div>
</template>

<script>
import Hero from '@/components/sections/HeroBanner.vue'
import About from '~/components/sections/AboutMe'
export default {
  name: 'IndexPage',
  components: {
    About,
    Hero
  },
  data() {
    return {
      scrollY: 0,
      currentSection: null,
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      this.awareScroll()
    },
    awareScroll() {
      const elements = document.querySelectorAll('.section')
      elements.forEach((e, i) => {
        if (this.calculateVisibleHeightPercentage(e) >= 50) {
          this.currentSection = e.id
        }
      })
    },
    calculateVisibleHeightPercentage(element) {
      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top
      const elementBottom = elementRect.bottom
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      if (elementTop >= 0 && elementBottom <= windowHeight) {
        return 100
      } else if (elementTop < 0 && elementBottom > 0) {
        return (elementBottom / windowHeight) * 100
      } else if (elementTop < windowHeight && elementBottom > windowHeight) {
        return ((windowHeight - elementTop) / windowHeight) * 100
      } else {
        return 0
      }
    },
  },
}
</script>
<style lang="scss" scoped>


</style>
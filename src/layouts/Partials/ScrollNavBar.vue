<template>
  <NavBar />
</template>

<script>
import NavBar from './Navbar.vue'
import debounce from 'lodash.debounce'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      scrollpos: null,
      header: null,
      navcontent: null,
      navaction: null
    }
  },
  mounted() {
    this.header = document.getElementById('header')
    this.navcontent = document.getElementById('nav-content')
    this.navaction = document.getElementById('navAction')
    this.brandname = document.getElementById('brandname')
    this.toToggle = document.querySelectorAll('.toggleColour')
    this.scrollpos = this.getScrollTop()
    window.addEventListener(
      'scroll',
      debounce(() => {
        this.scrollpos = this.getScrollTop()
      }, 100)
    )
  },
  methods: {
    getScrollTop() {
      if (this.scrollpos > 10) {
        this.header.classList.add('bg-white')
        this.navaction.classList.remove('bg-white')
        this.navaction.classList.add('gradient')
        this.navaction.classList.remove('text-gray-800')
        this.navaction.classList.add('text-white')
        //Use to switch toggleColour colours
        for (var i = 0; i < this.toToggle.length; i++) {
          this.toToggle[i].classList.add('text-gray-800')
          this.toToggle[i].classList.remove('text-white')
        }
        this.header.classList.add('shadow')
        this.navcontent.classList.remove('bg-gray-100')
        this.navcontent.classList.add('bg-white')
      } else {
        this.header.classList.remove('bg-white')
        this.navaction.classList.remove('gradient')
        this.navaction.classList.add('bg-white')
        this.navaction.classList.remove('text-white')
        this.navaction.classList.add('text-gray-800')
        //Use to switch toggleColour colours
        for (let i = 0; i < this.toToggle.length; i++) {
          this.toToggle[i].classList.add('text-white')
          this.toToggle[i].classList.remove('text-gray-800')
        }
        this.header.classList.remove('shadow')
        this.navcontent.classList.remove('bg-white')
        this.navcontent.classList.add('bg-gray-100')
      }
      return window.scrollY
    }
  },
  computed: {}
}
</script>

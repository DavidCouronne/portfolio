<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif;"
  >
    <!-- nav bar -->
    <header id="header" class=" fixed w-full z-30 top-0">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center py-8"
      >
        <div class="uppercase  font-bold  ">
          <g-link to="/" class="text-copy-primary hover:text-gray-600"
            >David Couronné
          </g-link>
        </div>

        <div class="block lg:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="gray"
              />
            </svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0">
            <search-input />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a
              v-if="$route.path === '/'"
              href="/#projects"
              v-scroll-to="'#projects'"
              class="text-copy-primary hover:text-gray-600"
              >Projects</a
            >
            <g-link
              v-else
              to="/#projects"
              class="text-copy-primary hover:text-gray-600"
              >Projects</g-link
            >
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a
              v-if="$route.path === '/'"
              href="/#about"
              v-scroll-to="'#about'"
              class="text-copy-primary hover:text-gray-600"
              >About</a
            >
            <g-link
              v-else
              to="/#about"
              class="text-copy-primary hover:text-gray-600"
              >About</g-link
            >
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a
              v-if="$route.path === '/'"
              href="/#contact"
              v-scroll-to="'#contact'"
              class="text-copy-primary hover:text-gray-600"
              >Contact</a
            >
            <g-link
              v-else
              to="/#contact"
              class="text-copy-primary hover:text-gray-600"
              >Contact</g-link
            >
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <g-link to="/docs" class="text-copy-primary hover:text-gray-600"
              >Docs</g-link
            >
          </li>
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-gray-600"
              >Blog</g-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- end navbar -->

    <!--Hero-->

    <Hero />
    <!-- end hero -->

    <!-- hero svg -->
    <HeroSvg />
    <!-- end hero svg -->

    <!-- slot -->
    <slot :class="theme" />
    <!-- slot -->

    <!-- footer -->

    <Footer />
  </div>
</template>

<script>
import NavBar from './Partials/Navbar.vue'
import Hero from './Partials/Hero.vue'
import HeroSvg from './Partials/HeroSvg.vue'
import Footer from './Partials/Footer.vue'
import debounce from 'lodash.debounce'
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'
export default {
  components: {
    NavBar,
    Hero,
    HeroSvg,
    Footer,
    SearchInput,
    ThemeSwitcher
  },
  data() {
    return {
      scrollpos: null,
      header: null,
      navcontent: null,
      navaction: null,
      theme: 'theme-light',
      isOpen: false,
    }
  },
  mounted() {
    this.header = document.getElementById('header')
    //this.navcontent = document.getElementById('nav-content')
    //this.navaction = document.getElementById('navAction')
    //this.brandname = document.getElementById('brandname')
    //this.toToggle = document.querySelectorAll('.toggleColour')
    this.scrollpos = this.getScrollTop()
    window.addEventListener(
      'scroll',
      debounce(() => {
        this.scrollpos = this.getScrollTop()
      }, 10)
    )
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    getScrollTop() {
      if (this.scrollpos > 100) {
        this.header.classList.add('bg-black')

        /* this.navaction.classList.remove('bg-white')
        this.navaction.classList.add('gradient')
        this.navaction.classList.remove('text-gray-800')
        this.navaction.classList.add('text-white')
        //Use to switch toggleColour colours
        for (var i = 0; i < this.toToggle.length; i++) {
          this.toToggle[i].classList.add('text-gray-800')
          this.toToggle[i].classList.remove('text-white')
        } */
        this.header.classList.add('shadow')
        //this.navcontent.classList.remove('bg-gray-100')
        //this.navcontent.classList.add('bg-white')
      } else {
        this.header.classList.remove('bg-black')
        /* this.navaction.classList.remove('gradient')
        this.navaction.classList.add('bg-white')
        this.navaction.classList.remove('text-white')
        this.navaction.classList.add('text-gray-800')
        //Use to switch toggleColour colours
        for (let i = 0; i < this.toToggle.length; i++) {
          this.toToggle[i].classList.add('text-white')
          this.toToggle[i].classList.remove('text-gray-800')
        } */
        this.header.classList.remove('shadow')
        //this.navcontent.classList.remove('bg-white')
        //this.navcontent.classList.add('bg-gray-100')
      }
      return window.scrollY
    }
  },
  computed: {}
}
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}

.gradient {
  background-color: #52acff;
  background-image: linear-gradient(90deg, #6b17e6 2%, #ffe32c 100%);
}
</style>

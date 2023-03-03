<script setup>
import { ref } from "vue";
import Fb from "./fb.vue";
import Tmrwlogo from "./tmrwlogo.vue";

const menuToggle = ref(false);
</script>

<template>
  <header class="">
    <nav
      class="
        fixed
        top-0
        left-0
        w-full
        lg:w-24
        h-16
        lg:h-full
        px-5
        py-3
        lg:px-3 lg:py-5
        bg-white
        z-[9999]
        flex flex-row
        lg:flex-col
        justify-between
        border-b border-b-neutral-200
        lg:border-b-0 lg:border-r lg:border-r-neutral-200
      "
    >
      <div class="" @click="menuToggle = !menuToggle">
        <a
          class="nav-toggle btn-gtm"
          :data-gtm-category="'Main Navigation'"
          :data-gtm-action="'Clicked_Navigation_Link'"
          :data-gtm-label="'Menu Toggle'"
        >
          <span class="bar" :class="menuToggle ? 'x' : ''"></span>
          <span class="bar" :class="menuToggle ? 'x' : ''"></span>
        </a>
        <span class="block mt-2 text-xxs text-center cursor-pointer text-black"
          >MENU</span
        >
      </div>

      <div
        class="
          logo
          my-auto
          mx-auto
          px-2
          pb-1
          max-w-[55px]
          lg:max-w-none
          hover:opacity-90
          transition-opacity
          duration-300
          ease-in-out
        "
      >
        <nuxt-link
          to="/"
          @click="menuToggle = false"
          class="btn-gtm"
          :data-gtm-category="'Main Navigation'"
          :data-gtm-action="'Clicked_Navigation_Link'"
          :data-gtm-label="'Home Logo'"
          ><Tmrwlogo
        /></nuxt-link>
      </div>
      <div class="social flex items-center justify-center">
        <span
          class="
            flex
            items-center
            justify-center
            w-8
            h-8
            rounded-full
            bg-[#e06333]
            hover:bg-opacity-75
            mx-auto
            transition-all
            duration-200
            ease-in-out
          "
        >
          <a
            href="https://www.facebook.com/tmrwsg"
            target="_blank"
            class="btn-gtm"
            :data-gtm-category="'Main Navigation'"
            :data-gtm-action="'Clicked_Navigation_Link'"
            :data-gtm-label="'Facebook'"
            ><Fb fill="#ffffff"
          /></a>
        </span>
      </div>
    </nav>

    <aside class="asideMenu" :class="menuToggle ? 'in fadeInLeftMedium' : ''">
      <div class="flex flex-col h-full justify-between">
        <div
          class="
            nav-links
            text-center
            flex flex-col
            h-full
            justify-around
            my-auto
            max-h-96
          "
        >
          <nuxt-link
            v-for="(nav, index) in navData"
            :key="'nav' + index"
            class="btn-gtm"
            :to="nav.path"
            :class="
              nav.path === '/digital-first-thinking/' ? 'hidden lg:block' : ''
            "
            :external="
              nav.path == '/blog/' ||
              nav.path == '/news/' ||
              nav.path == '/portfolio/'
            "
            @click="menuToggle = false"
            :data-gtm-category="'Main Navigation'"
            :data-gtm-action="'Clicked_Navigation_Link'"
            :data-gtm-label="nav.name"
            >{{ nav.name }}</nuxt-link
          >
        </div>
        <div class="nav-footer grid-cols-1">
          <div
            class="
              flex flex-row
              items-center
              justify-center
              space-x-3
              text-xxs
              font-bold
            "
          >
            <span class="text-category text-neutral-400 uppercase">HQ</span>
            <span class=""
              ><nuxt-link
                to="/"
                class="text-neutral-400 hover:!text-tmrw-yellow btn-gtm"
                :data-gtm-category="'Main Navigation'"
                :data-gtm-action="'Clicked_Navigation_Link'"
                :data-gtm-label="'TMRW SG'"
                >TMRW SG</nuxt-link
              ></span
            >
            <span class="text-category text-neutral-400 uppercase pl-3"
              >Regional</span
            >
            <span class=""
              ><a
                href="https://tmrw.vn"
                class="text-neutral-400 hover:!text-tmrw-yellow btn-gtm"
                target="_blank"
                :data-gtm-category="'Main Navigation'"
                :data-gtm-action="'Clicked_Navigation_Link'"
                :data-gtm-label="'TMRW VN'"
                >TMRW VN</a
              ></span
            >
            <span class=""
              ><a
                href="https://tmrw.id"
                class="text-neutral-400 hover:!text-tmrw-yellow btn-gtm"
                target="_blank"
                :data-gtm-category="'Main Navigation'"
                :data-gtm-action="'Clicked_Navigation_Link'"
                :data-gtm-label="'TMRW ID'"
                >TMRW ID</a
              ></span
            >
          </div>
          <div class="copyright block mt-2">
            <span
              class="
                block
                font-bold
                text-xxs text-center
                uppercase
                text-neutral-400
              "
            >
              &copy; {{ new Date().getFullYear() }} TMRW Singapore</span
            >
          </div>
        </div>
      </div>
    </aside>
    <div
      class="menu-overlay"
      v-show="menuToggle"
      @click="menuToggle = false"
    ></div>
  </header>
</template>

<style lang="scss" scoped>
.menu-overlay {
  @apply fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-30 cursor-pointer;
}
.nav-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8px;
  width: 22px;
  @apply mx-auto mt-2;
}

.nav-toggle .bar {
  height: 1px;
  width: 100%;
  background-color: #cd1010;
  transition: all 0.2s linear;
}

.nav-toggle:hover {
  cursor: pointer;
}
.bar:nth-of-type(1) {
  transform-origin: top left;
}
.x:nth-of-type(1) {
  transform: rotate(30deg);

  // width: 28px;
}
.bar:nth-of-type(2) {
  transform-origin: bottom left;
}
.x:nth-of-type(2) {
  transform: translateY(4px) rotate(-30deg);

  // width: 28px;
}

.asideMenu {
  @apply fixed p-5 -top-16 lg:top-0 h-full bg-gray-800 text-white w-full lg:max-w-[26rem] flex flex-col
  opacity-0 left-0 lg:-left-24 transition-all duration-200 ease-in-out -z-10;
  &.in {
    @apply opacity-100 left-0 lg:left-24 top-16 lg:top-0 z-50;
  }
  @media screen and (max-width: 991px) {
    //height: calc(100vh - 4rem);
    height: calc(100vh - calc(100vh - 100%) - 4rem);
  }
}

a {
  letter-spacing: 0.275em;
  @apply hover:text-tmrw-yellow transition-all duration-300 ease-in-out;
}
.nav-links {
  a {
    letter-spacing: 0.275em;
    @apply uppercase font-semibold hover:text-tmrw-yellow;
    &.selected,
    &.router-link-active {
      @apply text-tmrw-yellow;
    }
  }
}
.nav-footer {
  a {
    letter-spacing: 0.15em;
  }
}

.text-xxs {
  font-size: 11px;
}
////
</style>

<script>
import navData from "~/assets/data/nav.json";
const route = useRoute();
export default {
  data() {
    return {
      navData,
      route,
    };
  },
};
</script>
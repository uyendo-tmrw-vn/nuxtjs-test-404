<template>
  <div
    class="
      relative
      flex flex-col
      w-full
      h-full
      min-h-screen
      work-animation
      bg-tmrw-works-grey
      text-tmrw-dark-grey
    "
  >
    <Head>
      <Title>TMRW SG | Works | TVC | OSIM</Title>
      <Meta
        name="description"
        content="The pandemic has put a strain on many things humanity holds dear: relationships, mental well-being, friendships, and more. But they all stem from the same emotion: love. And that was the insight that we threaded in these three spots: A) Disney’s brand DNA, B) OSIM uCozy Heart’s gifting perfection and C) The people’s spirit."
      />
      <Meta name="og:title" content="Works | OSIM" />
      <Meta
        name="og:description"
        content="The pandemic has put a strain on many things humanity holds dear: relationships, mental well-being, friendships, and more. But they all stem from the same emotion: love. And that was the insight that we threaded in these three spots: A) Disney’s brand DNA, B) OSIM uCozy Heart’s gifting perfection and C) The people’s spirit."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-osim.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-osim.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>

    <div class="container pt-10 lg:pt-12 lg:pb-40">
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-2">
        <div class="col-span-2 font-bold text-white mb-8">
          <span class="transition duration-300" :class="scrolled && 'opacity-0'"
            ><Scrolldownformore
          /></span>
        </div>
        <div class="col-span-10">
          <video
            class="w-full h-auto object-cover mb-8"
            autoplay
            muted
            playsInline
            autoBuffer
            controls
            loop
          >
            <source src="/img/tmrw-works-v2-tvc-osim.mp4" type="video/mp4" />
          </video>
          <div class="flex flex-col">
            <span class="font-bold uppercase text-lg text-tmrw-red mb-3">
              Client
            </span>
            <h1
              class="font-normal tracking-widest text-2xl text-tmrw-dark-grey"
            >
              OSIM
            </h1>
          </div>
          <div
            class="
              grid grid-cols-1
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
              my-4
              lg:my-10
            "
          >
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-lg text-tmrw-red mb-3">
                OSIM UCOZY HEART TVC
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                The pandemic has put a strain on many things humanity holds
                dear: relationships, mental well-being, friendships, and more.
                But they all stem from the same emotion: love. And that was the
                insight that we threaded in these three spots: A) Disney’s brand
                DNA, B) OSIM uCozy Heart’s gifting perfection and C) The
                people’s spirit.
              </p>
              <video
                class="w-full h-auto object-cover my-8"
                autoplay
                muted
                playsInline
                autoBuffer
                controls
                loop
              >
                <source
                  src="/img/tmrw-works-v2-tvc-osim-1.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                class="w-full h-auto object-cover my-8"
                autoplay
                muted
                playsInline
                autoBuffer
                controls
                loop
              >
                <source
                  src="/img/tmrw-works-v2-tvc-osim-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <span class="border-t border-neutral-400 block w-full my-8"></span>

          <Workresult />
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <div class="block lg:hidden">
            <span
              class="
                w-8
                h-8
                p-1
                flex
                items-center
                justify-center
                border-2 border-white
                rounded-full
                transition
                duration-300
                rotate-180
                cursor-pointer
              "
              :class="!scrolled && 'opacity-0 -z-30'"
              @click="backToTop()"
            >
              <Arrowdown />
            </span>
          </div>
          <div class="flex items-center justify-end mb-5 lg:mb-0">
            <div class="flex items-center mr-5 mb-5">
              <span class="text-tmrw-red tracking-widest font-semibold mr-4"
                >NEXT</span
              ><span class="w-2"><Arrowrightgeneric fill="#74797e" /></span>
            </div>
            <div class="flex flex-col">
              <nuxt-link to="/works/tvc/tmrw/">
                <img
                  src="/img/thumb-tvc-tmrw.jpg"
                  class="w-40 block h-auto"
                  alt=""
                />
                <span class="font-light block text-center mt-2">TMRW</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:fixed lg:bottom-24">
        <span
          class="
            w-8
            h-8
            p-1
            flex
            items-center
            justify-center
            border-2 border-white
            rounded-full
            transition
            duration-300
            rotate-180
            cursor-pointer
          "
          :class="!scrolled && 'opacity-0 -z-30'"
          @click="backToTop()"
        >
          <Arrowdown />
        </span>
      </div>
    </div>
    <div
      class="
        relative
        lg:block lg:fixed
        w-full
        bg-tmrw-yellow
        bottom-0
        right-0
        px-5
        py-4
      "
    >
      <Workfooter />
    </div>
  </div>
</template>
	  
	  <script setup>
import Pluscircle1 from "../../../components/pluscircle.vue";
import Arrowcircle from "../../../components/arrowcircle.vue";
import FooterItem from "../../../components/footer-item.vue";
const config = useRuntimeConfig();
</script>
	  <script>
import { defineComponent } from "vue";

import workData from "~/assets/data/work-integrated.json";
import "vue3-carousel/dist/carousel.css";

import { Carousel, Navigation, Slide } from "vue3-carousel";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    scrolled: false,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 992 and up
      992: {
        itemsToShow: 2.5,
        snapAlign: "start",
      },
    },
  }),
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (window.pageYOffset > window.innerHeight - 350) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    this.backToTop();
    window.addEventListener("scroll", this.handleScroll);
    if (window.pageYOffset > window.innerHeight - 350) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  },
});
</script>
	  
	  <style scoped lang="scss">
.entry {
  img {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
  a {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
}
@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 500ms #{$waitTime};
  animation-fill-mode: forwards;
}

@keyframes wait {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

$initialDelay: 0;

.content-fade-in-delayed {
  @include fade-in($initialDelay + "ms");
}

.work-animation {
  & > div:nth-child(1) {
    @include fade-in("150ms");
  }
  & > div:nth-child(2) {
    @include fade-in("600ms");
  }
  & > div:nth-child(3) {
    @include fade-in("450ms");
  }
}
</style>
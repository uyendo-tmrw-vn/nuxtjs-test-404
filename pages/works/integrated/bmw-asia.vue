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
      <Title>TMRW SG | Works | Integrated | BMW ASIA</Title>
      <Meta
        name="description"
        content="2022 proved challenging even before it started. At the end of 2021, the outlook was more than bleak. The Singapore Motorshow was decimated by the pandemic, COVID-19 restrictions remained tighened, and events were still a no go.."
      />
      <Meta name="og:title" content="Works | BMW Asia" />
      <Meta
        name="og:description"
        content="2022 proved challenging even before it started. At the end of 2021, the outlook was more than bleak. The Singapore Motorshow was decimated by the pandemic, COVID-19 restrictions remained tighened, and events were still a no go.."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-egss.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-egss.jpg"
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
      <img
        src="/img/tmrw-works-v2-integrated-bmw-asia.jpg"
        alt="BMW Asia"
        class="w-full h-auto mt-2 mb-5 border-2 border-white"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-16">
        <div class="col-span-2 font-bold text-white mb-8">
          <span class="transition duration-300" :class="scrolled && 'opacity-0'"
            ><Scrolldownformore
          /></span>
        </div>
        <div class="col-span-10">
          <div class="flex flex-col">
            <span class="font-bold uppercase text-lg text-tmrw-red mb-3">
              Client
            </span>
            <h1
              class="font-normal tracking-widest text-2xl text-tmrw-dark-grey"
            >
              BMW ASIA
            </h1>
          </div>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-3
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
              my-4
              lg:my-10
            "
          >
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-lg text-tmrw-red mb-3">
                The Brief
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                BMW wanted to launch its new 2 Series Active Tourer as the car for people who want to turn their lives into an active experience.
              </p>
            </div>

            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Strategy
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                People do routines. Personalities elevate their day-to-day into memorable experiences. We wanted to tell these people that with the new 2 Series Active Tourer, they can enhance their lives even further.
              </p>
            </div>

            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Creative
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                A TikTok Challenge to allow audiences to express their Active Personalities through videos.
              </p>
            </div>
          </div>
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <video
            class="w-full h-auto object-cover"
            autoplay
            muted
            playsInline
            autoBuffer
            controls
            loop
          >
            <source
              src="/img/tmrw-works-v2-integrated-bmw-asia.mp4"
              type="video/mp4"
            />
          </video>

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
              <nuxt-link to="/works/integrated/egss/">
                <img
                  src="/img/thumb-integrated-egss.jpg"
                  class="w-40 block h-auto"
                  alt=""
                />
                <span class="font-light block text-center mt-2">SRA</span>
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
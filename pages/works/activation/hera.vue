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
      <Title>TMRW SG | Works | Integrated | Hera</Title>
      <Meta
        name="description"
        content="To mark HERA's first anniversary and launch the new HERA Black Foundation in a compelling way, we needed to create an innovative experience in this highly competitive game of whose pop-up is one-up the other."
      />
      <Meta name="og:title" content="Works | Hera" />
      <Meta
        name="og:description"
        content="To mark HERA's first anniversary and launch the new HERA Black Foundation in a compelling way, we needed to create an innovative experience in this highly competitive game of whose pop-up is one-up the other."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-hera.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-hera.jpg"
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
        src="/img/tmrw-works-v2-activation-hera.jpg"
        alt="Hera"
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
              HERA
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
                The Challenge
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                “Experience” being a buzzword in today’s retail landscape means
                beauty brands have been falling over each other to roll out
                pop-up initiatives. To mark HERA's first anniversary and launch
                the new HERA Black Foundation in a compelling way, we needed to
                create an innovative experience in this highly competitive game
                of whose pop-up is one-up the other.
              </p>
            </div>

            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Strategy
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                From celebrity beauty habits to expert tips, women are always
                looking for the next beauty secret that can help them look their
                best. Singaporean women are no different. We tapped into this
                universal insight to create #OURBLACKSECRET: the secret to 24/7
                beauty.
              </p>
            </div>
          </div>
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-3
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
            "
          >
            <div class="flex flex-col my-4 lg:my-10">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">The Secret</h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                A secret discovery journey was dropped right on Orchard Road as
                a nondescript black pop-up box. Every aspect of the experience
                was shrouded in mystery. Its exterior gave no clue on what to
                expect within. Once inside, visitors uncovered secret after
                secret, before discovering the biggest one of all.
              </p>
            </div>
          </div>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-12
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
            "
          >
            <div class="lg:col-span-8">
              <div
                class="
                  grid grid-cols-1
                  lg:grid-cols-12
                  gap-y-8
                  lg:gap-y-5 lg:gap-x-10
                "
              >
                <div class="lg:col-span-6">
                  <div class="flex flex-col my-4">
                    <h3 class="font-bold uppercase text-tmrw-red mb-3">
                      SECRET #1
                      <span class="block text-tmrw-dark-grey"
                        >Hidden Entrance</span
                      >
                    </h3>
                    <p class="font-normal tracking-normal text-tmrw-dark-grey">
                      Visitors had to find the secret doorway in this chic
                      walk-in closet to gain access to the rest of the
                      experience.
                    </p>
                  </div>
                </div>
                <div class="lg:col-span-6 mt-4">
                  <img
                    src="/img/tmrw-works-v2-activation-hera-1.jpg"
                    class="w-full block h-auto"
                    alt=""
                  />
                </div>
                <div class="lg:col-span-6">
                  <div class="flex flex-col my-4">
                    <h3 class="font-bold uppercase text-tmrw-red mb-3">
                      SECRET #2
                      <span class="block text-tmrw-dark-grey"
                        >The Black Mirror Maze</span
                      >
                    </h3>
                    <p class="font-normal tracking-normal text-tmrw-dark-grey">
                      The secret doorway led to a mirror room filled with neon
                      lights, quotes and props. Visitors were encouraged to post
                      snaps on social media to win prizes. Then, they had to
                      search for the hidden exit to the next zone.
                    </p>
                  </div>
                </div>
                <div class="lg:col-span-6 mt-4">
                  <img
                    src="/img/tmrw-works-v2-activation-hera-2.jpg"
                    class="w-full block h-auto"
                    alt=""
                  />
                </div>
                <div class="lg:col-span-6">
                  <div class="flex flex-col my-4">
                    <h3 class="font-bold uppercase text-tmrw-red mb-3">
                      SECRET #3
                      <span class="block text-tmrw-dark-grey"
                        >HERA Speakeasy Bar 12.24</span
                      >
                    </h3>
                    <p class="font-normal tracking-normal text-tmrw-dark-grey">
                      Here, visitors were invited to choose a mystery drink, and
                      encouraged to sign up as HERA members to claim exclusive
                      gifts.
                    </p>
                  </div>
                </div>
                <div class="lg:col-span-6 mt-4">
                  <img
                    src="/img/tmrw-works-v2-activation-hera-3.jpg"
                    class="w-full block h-auto"
                    alt=""
                  />
                </div>
                <div class="lg:col-span-6">
                  <div class="flex flex-col my-4">
                    <h3 class="font-bold uppercase text-tmrw-red mb-3">
                      SECRET #4
                      <span class="block text-tmrw-dark-grey"
                        >The New HERA Black Foundation</span
                      >
                    </h3>
                    <p class="font-normal tracking-normal text-tmrw-dark-grey">
                      Visitors met the HERA Black Foundation for the first time
                      in a darkroom that played custom-created content and the
                      product launch video while the product was revealed in a
                      dramatic light show.
                    </p>
                  </div>
                </div>
                <div class="lg:col-span-6 mt-4">
                  <img
                    src="/img/tmrw-works-v2-activation-hera-4.jpg"
                    class="w-full block h-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 mt-4">
              <video
                class="w-full h-auto object-cover rounded-2xl"
                autoplay
                muted
                playsInline
                autoBuffer
                controls
                loop
              >
                <source
                  src="/img/tmrw-works-v2-activation-hera.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

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
              <nuxt-link to="/works/activation/performance-motors/">
                <img
                  src="/img/thumb-activation-performance-motors.jpg"
                  class="w-40 block h-auto"
                  alt=""
                />
                <span class="font-light block text-center mt-2"
                  >Performance Motors</span
                >
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

</style>
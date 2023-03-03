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
      <Title>TMRW SG | Works | Integrated | eGSS</Title>
      <Meta
        name="description"
        content="The first-ever eGSS SHOP. WIN. EXPERIENCE. interactive online shopping
        experience. Bringing back the anticipation of great deals and steals the
        GSS is loved for at the convenience of the consumers’ fingertips."
      />
      <Meta name="og:title" content="Works | eGSS" />
      <Meta
        name="og:description"
        content="The first-ever eGSS SHOP. WIN. EXPERIENCE. interactive online shopping
        experience. Bringing back the anticipation of great deals and steals the
        GSS is loved for at the convenience of the consumers’ fingertips."
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
        src="/img/tmrw-works-v2-integrated-egss.jpg"
        alt="eGSS"
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
              SINGAPORE RETAILERS ASSOCIATION
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
                Circuit breaker measures (7 Apr – 1 Jun) were introduced to
                restrict social activities like shopping and dining as a result
                of the COVID-19 pandemic. The Great Singapore Sale (GSS)
                traditionally held from Jun – Aug, got cancelled in response to
                government laws but in a surprising twist GSS was brought back
                as a pure e-commerce play.
              </p>
              <img
                src="/img/tmrw-works-v2-integrated-egss-the-challenge.jpg"
                class="w-full block h-auto my-4 lg:my-8"
                alt=""
              />
            </div>

            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">The Idea</h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                Pivoting towards the new way of shopping as a result of the
                pandemic, we conceptualised and developed the first-ever eGSS
                Shop. Win. Experience. to make online shopping exciting,
                engaging and interactive. Bringing Singaporeans the joys of
                retail therapy at the convenience of their fingertips.
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Strategy
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                To create a seamless shopping experience for the first-ever eGSS
                by building an integrated campaign around the GoSpree App —
                servingas a one-stop platform for local and international
                customers to access F&B Operators, Hoteliers, Attractions,
                Operators and much more.
              </p>
            </div>
          </div>
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-12
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
            "
          >
            <div class="lg:col-span-5">
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  The Execution
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  As the first-ever eGSS, we provided consumers with a variety
                  of engagements ranging from an in-app game to interactive
                  eCatalogues to ensure an exciting and fresh experience at
                  every touchpoint.
                </p>
              </div>
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Influencer Livestream
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  Throughout four editions, over four weeks, we invited users to
                  jump online and connect with their favourite celebrities to
                  win prizes, vouchers and more through games and contests.
                </p>
              </div>
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Thematic GDN Banner
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  This served as an interactive overview of all the awesome
                  deals brought to life at eGSS — with links driving users to
                  the GoSpree App and more.
                </p>
              </div>
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  GOSPREE EXPERIENCE
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  Boasting various editions that provided thematic deals and
                  merchandise to consumers to scroll through, the GoSpree site
                  was designed to ensure everyone could enjoy the eGSS.
                </p>
              </div>
            </div>
            <div class="lg:col-span-7 lg:mt-52">
              <div
                class="
                  grid grid-cols-1
                  lg:grid-cols-12
                  space-y-4
                  lg:space-x-8 lg:space-y-0
                "
              >
                <div class="flex flex-col lg:col-span-5 space-y-4">
                  <img
                    src="/img/tmrw-works-v2-integrated-egss-1.png"
                    class="w-full block h-auto"
                    alt=""
                  /><img
                    src="/img/tmrw-works-v2-integrated-egss-2.jpg"
                    class="w-full block h-auto"
                    alt=""
                  /><img
                    src="/img/tmrw-works-v2-integrated-egss-3.png"
                    class="w-full block h-auto"
                    alt=""
                  />
                </div>
                <div class="flex flex-col lg:col-span-7">
                  <video
                    class="w-full h-full object-cover rounded-2xl"
                    autoplay
                    muted
                    playsInline
                    autoBuffer
                    controls
                    loop
                  >
                    <source
                      src="/img/tmrw-works-v2-integrated-egss-insta.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
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
              <nuxt-link to="/works/integrated/bmw-asia/">
                <img
                  src="/img/thumb-integrated-bmw-asia.jpg"
                  class="w-40 block h-auto"
                  alt=""
                />
                <span class="font-light block text-center mt-2">BMW Asia</span>
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
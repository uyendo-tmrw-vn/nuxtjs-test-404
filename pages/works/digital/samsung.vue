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
      <Title>TMRW SG | Works | Digital | SAMSUNG</Title>
      <Meta
        name="description"
        content="With over 80% of Singapore’s population living in HDB flats, most locals are used to the idea of hanging laundry out to dry. And why not? Even the flats come built with bamboo pole holders."
      />
      <Meta name="og:title" content="Works | SAMSUNG" />
      <Meta
        name="og:description"
        content="With over 80% of Singapore’s population living in HDB flats, most locals are used to the idea of hanging laundry out to dry. And why not? Even the flats come built with bamboo pole holders."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-samsung.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-samsung.jpg"
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
        src="/img/tmrw-works-v2-digital-samsung.jpg"
        alt="Samsung"
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
              SAMSUNG
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
              <p class="font-normal tracking-normal text-tmrw-dark-grey mb-3">
                With over 80% of Singapore’s population living in HDB flats,
                most locals are used to the idea of hanging laundry out to dry.
                And why not? Even the flats come built with bamboo pole holders.
              </p>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                The majority of Singaporeans don’t see the need for dryers, with
                over 50% viewing the product as non-essential. Out of every ten
                households in 2017/18, more than nine owned a washing machine,
                but only about two had a clothes dryer in their homes. But that
                wasn’t even the most challenging issue we faced. Our key
                competitor was, is and always will be FREE — the sun.
              </p>
            </div>

            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">The Idea</h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                Our campaign highlighted the sun’s many deficiencies — its
                unreliability, temperamental nature, unavailability,
                unpredictability and “laziness” — to our benefit.
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Strategy
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                Through each downside of the sun, we positioned the Samsung
                Heatpump Dryer with its upside and the simple takeaway: Better
                than the sun. The campaign launch coincided with the rainy
                Monsoon Season (December to early March), which we used to great
                effect for tactical sustenance.
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
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                Launch Campaign
              </h3>
              <p class="font-normal tracking-normal text-tmrw-dark-grey">
                The launch campaign comprised only a single brand spot, a
                re-skinned website page, multiple social media posts, and one
                very wet prize. YouTube was the key channel for awareness with
                Facebook playing a supporting role.
              </p>
            </div>
          </div>
          <video
            class="w-full h-auto object-cover mb-8"
            autoplay
            muted
            playsInline
            autoBuffer
            controls
            loop
          >
            <source
              src="/img/tmrw-works-v2-digital-samsung.mp4"
              type="video/mp4"
            />
          </video>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-12
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
            "
          >
            <div class="lg:col-span-4">
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Website + Digital + Social
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  To ensure a consistent message was told, and yet remain
                  compliant with global guidelines, we re-skinned a fold of the
                  product page to weave in the message. Social media ran a
                  series of posts denouncing the sun whilst unequivocally
                  stating our superiority.
                </p>
              </div>
            </div>
            <div class="lg:col-span-8 -mt-5 mb-5 lg:mt-10">
              <img
                src="/img/tmrw-works-v2-digital-samsung-1.png"
                class="w-full block h-auto"
                alt=""
              />
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
            <div class="lg:col-span-4">
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Web Banners
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  The brand spot was cut down to individual spots highlighting
                  the dryer’s relevant benefits driving traffic to the website
                  to find out more.<br class="hidden lg:block" />&nbsp;
                </p>
                <img
                  src="/img/tmrw-works-v2-digital-samsung-2.jpg"
                  class="w-full block h-auto mt-4"
                  alt=""
                />
              </div>
            </div>
            <div class="lg:col-span-4">
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Sustenance
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  The rainy season provided an opportunity to upsell the dryer’s
                  benefits while also delivering a cheeky dig at the sun. Plus,
                  we ran a dark ad during the entire rainy season that promised
                  a sunny offer.
                </p>
                <img
                  src="/img/tmrw-works-v2-digital-samsung-3.jpg"
                  class="w-full block h-auto mt-4"
                  alt=""
                />
                <img
                  src="/img/tmrw-works-v2-digital-samsung-4.jpg"
                  class="w-full block h-auto mt-2"
                  alt=""
                />
              </div>
            </div>
            <div class="lg:col-span-4">
              <div class="flex flex-col my-4 lg:my-10">
                <h3 class="font-bold uppercase text-tmrw-red mb-3">
                  Lucky Draw
                </h3>
                <p class="font-normal tracking-normal text-tmrw-dark-grey">
                  To further emphasise the weakness of the sun, our lucky draw
                  prize was to one of the wettest places on Earth: Maui. Social
                  media platforms were used to push this message to targeted
                  audiences.
                </p>
                <img
                  src="/img/tmrw-works-v2-digital-samsung-5.jpg"
                  class="w-full block h-auto mt-4"
                  alt=""
                />
                <img
                  src="/img/tmrw-works-v2-digital-samsung-6.jpg"
                  class="w-full block h-auto mt-2"
                  alt=""
                />
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
              <nuxt-link to="/works/digital/osim/">
                <img
                  src="/img/thumb-digital-osim.jpg"
                  class="w-40 block h-auto"
                  alt=""
                />
                <span class="font-light block text-center mt-2">OSIM</span>
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
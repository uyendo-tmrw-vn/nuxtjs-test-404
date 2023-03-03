<template>
  <div class="relative flex flex-col w-full h-full min-h-screen work-animation">
    <Head>
      <Title>TMRW SG - Works - Integrated - eGSS</Title>
      <Meta
        name="description"
        content="Strategy built on insights. Ideas that exist beyond boundaries. Campaigns centred around communities."
      />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <div class="relative flex flex-col lg:flex-row w-full lg:h-3/4">
      <div
        class="
          relative
          lg:absolute
          top-0
          left-0
          w-full
          h-auto
          lg:h-full
          overflow-hidden
        "
      >
        <img
          :src="config.imgBaseUrl + `/img/tmrw-works-egss.jpg`"
          alt="eGSS"
          class="object-cover w-full h-[100vw] lg:h-full"
          :style="{
            objectPosition: '0% 50%',
          }"
        />
      </div>
      <div class="relative lg:absolute top-0 right-0 lg:w-1/2 h-full">
        <div class="relative w-full h-full flex items-center overflow-hidden">
          <client-only>
            <Carousel :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item text-tmrw-dark-grey">
                  {{ slide }}
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </client-only>
        </div>
      </div>
    </div>
    <div class="relative lg:h-1/4">
      <div class="grid grid-cols-1 lg:grid-cols-12 h-full">
        <div class="lg:col-span-5"></div>
        <div class="lg:col-span-7 flex items-center">
          <div class="flex flex-row flex-wrap items-start lg:items-center">
            <span
              class="
                ml-3
                lg:ml-0
                mr-3
                mb-2
                uppercase
                text-white
                font-semibold
                text-sm
                pt-1
              "
              >Go To</span
            ><span class="w-8 mb-2 mr-4"><Arrowcircle /></span>

            <Workfooter />
          </div>
        </div>
      </div>
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
    workData,
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
});
</script>

<style scoped lang="scss">
p {
  @apply text-white;
}
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

.carousel {
  width: 100%;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @apply border bg-neutral-700 border-tmrw-dark-grey;
}

.carousel__slide {
  padding: 10px;
}

.work-animation {
  & > div:nth-child(1) {
    @include fade-in("150ms");
  }
  & > div:nth-child(2) {
    @include fade-in("300ms");
  }
  & > div:nth-child(3) {
    @include fade-in("450ms");
  }
}
</style>
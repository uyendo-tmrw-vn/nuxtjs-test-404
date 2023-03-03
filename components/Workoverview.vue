<template>
  <div>
    <!-- for desktop version  -->
    <div class="lg:block hidden">
      <Carousel
        :settings="settings"
        :breakpoints="breakpoints"
        :key="Math.random()"
        ref="carousel"
      >
        <Slide
          v-for="(entry, index) in workData"
          :key="'slide-' + index + entry.path"
        >
          <div class="work-list entry">
            <div class="work-image">
              <a
                v-if="entry.external"
                :href="entry.path"
                :data-gtm-category="gtmCategory"
                :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                :data-gtm-label="gtmCategory + '_' + entry.title"
                target="_blank"
                class="group btn-gtm"
              >
                <img
                  :src="config.imgBaseUrl + `/img/${entry.img}`"
                  :alt="entry.title"
                  :style="{ objectPosition: `` + entry.imgPos ? entry.imgPos : '50% 50%'}"
                  class="work-image-img"
                />

                <div
                  class="bg-overlap btn-gtm"
                  :data-gtm-category="gtmCategory"
                  :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                  :data-gtm-label="gtmCategory + '_' + entry.title"
                ></div>
                <div class="bg-overlap-title"></div>
                <div class="work-title">
                  <div class="work-title-child">
                    {{ entry.title }}
                  </div>
                </div>
              </a>
              <nuxt-link
                v-else
                :to="entry.path"
                class="group btn-gtm"
                :data-gtm-category="gtmCategory"
                :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                :data-gtm-label="gtmCategory + '_' + entry.title"
              >
                <img
                  :src="isBlog ? PICTURE_LINK + entry.img : config.imgBaseUrl + `/img/${entry.img}`"
                  :alt="entry.title"
                  :style="{ objectPosition: `` + entry.imgPos ? entry.imgPos : '50% 50%'}"
                  class="work-image-img"
                />

                <div
                  class="bg-overlap btn-gtm"
                  :data-gtm-category="gtmCategory"
                  :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                  :data-gtm-label="gtmCategory + '_' + entry.title"
                ></div>
                <div class="bg-overlap-title"></div>
                <div class="work-title">
                  <div class="work-title-child">
                    {{ entry.title }}
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="work-readmore work-desc">
              <div class="work-readmore--wrap">
                <h4 class="work-readmore--content">
                  <a
                    target="_blank"
                    v-if="entry.external"
                    :href="entry.path"
                  >
                    <ReadMore />
                  </a>
                  <nuxt-link
                    v-else
                    :to="entry.path"
                    class="btn-gtm"
                    :data-gtm-category="gtmCategory"
                    :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                    :data-gtm-label="gtmCategory + '_' + entry.title"
                  >
                    <ReadMore />
                  </nuxt-link>
                </h4>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

    </div>
    <!-- for mobile version -->
    <div class="block lg:hidden">
      <div
        v-for="(entry, index) in workData"
        :key="'slide-' + index + entry.path"
      >
        <a
          v-if="entry.external"
          :href="entry.path"
          target="_blank"
          class="group btn-gtm"
          :data-gtm-category="gtmCategory"
          :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
          :data-gtm-label="gtmCategory + '_' + entry.title"
        >
          <img
            :src="isBlog ? (PICTURE_LINK + entry.img) : (config.imgBaseUrl + `/img/${entry.img}`)"
            :alt=" entry.title"
            class="w-full h-[30vh] lg:h-full object-cover"
            :style="{ objectPosition: `` + entry.imgPos ? entry.imgPos : '50% 50%'}"
          />
        </a>
        <nuxt-link
          v-else
          :to="entry.path"
          class="group btn-gtm"
          :data-gtm-category="gtmCategory"
          :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
          :data-gtm-label="gtmCategory + '_' + entry.title"
        >
          <img
            :src="isBlog ? (PICTURE_LINK + entry.img) : (config.imgBaseUrl + `/img/${entry.img}`)"
            :alt="entry.title"
            class="w-full h-[30vh] lg:h-full object-cover"
            :style="{ objectPosition: `` + entry.imgPos ? entry.imgPos : '50% 50%'}"
          />
        </nuxt-link>
        <div class="px-3 pt-5 pb-8">
          <a
            v-if="entry.external"
            :href="entry.path"
            target="_blank"
            class="btn-gtm"
            :data-gtm-category="gtmCategory"
            :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
            :data-gtm-label="gtmCategory + '_' + entry.title"
          >
            <span class="font-bold mb-2 uppercase block">{{ entry.title }}</span>
            <ReadMore />
          </a>
          <nuxt-link
            v-else
            :to="entry.path"
            class="btn-gtm"
            :data-gtm-category="gtmCategory"
            :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
            :data-gtm-label="gtmCategory + '_' + entry.title"
          >
            <span class="font-bold mb-2 uppercase block">{{ entry.title }}</span>
            <ReadMore />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
	
<script>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    }
  },
  props: {
    workData: Array,
    gtmCategory: String,
    isBlog: Boolean
  },
  data: () => ({
    // carousel settings
    vCarousel: true,
    currentSlide: 0,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      wrapAround: false,
      mouseDrag: true
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 992px and up
      992: {
        itemsToShow: 2,
        itemsToScroll: 1,
        snapAlign: "start",
        mouseDrag: false,
        wrapAround: false
      }
    }
  })
};
</script>

<style scoped lang="scss">
p {
  @apply text-white;
}

.carousel__next,
.carousel__prev {
  @apply lg:mb-40;
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
.work-animation .carousel__track {
  & > li:nth-child(1) {
    @include fade-in("150ms");
  }
  & > li:nth-child(2) {
    @include fade-in("300ms");
  }
  & > li:nth-child(3) {
    @include fade-in("450ms");
  }
}
</style>
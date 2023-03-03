<template>
  <div class="layout-news-blog">
    <div
      class="layout-news-blog--item"
      v-for="(entry, index) in workData"
      :key="'slide-' + index + entry.path"
    >
      <div class="work-list entry">
        <div class="work-image">
          <div class="work-link">
            <!-- external for news  -->
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
                :src="isBlog?(PICTURE_LINK + entry.thumb.id): (config.imgBaseUrl + `/img/${entry.img}`)"
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
            </a>

            <!-- for blog: link internal   -->
            <nuxt-link
              v-else
              :to="entry.path"
              class="group btn-gtm"
              :data-gtm-category="gtmCategory"
              :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
              :data-gtm-label="gtmCategory + '_' + entry.title"
            >
              <img
                :src="isBlog?(PICTURE_LINK + entry.thumb.id): (config.imgBaseUrl + `/img/${entry.img}`)"
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
            </nuxt-link>

            <div class="work-title">
              <nuxt-link
                class="work-title-child btn-gtm"
                :to="entry.path"
                :data-gtm-category="gtmCategory"
                :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                :data-gtm-label="gtmCategory + '_' + entry.title"
              >
                {{ entry.title }}
              </nuxt-link>
            </div>

          </div>

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

    </div>
  </div>
</template>

<script setup>
import {PICTURE_LINK} from '@/constants';

const config = useRuntimeConfig();



</script>
	
<script>
export default {
  props: {
    workData: Array,
    gtmCategory: String,
    isBlog: Boolean
  }
};
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
</style>
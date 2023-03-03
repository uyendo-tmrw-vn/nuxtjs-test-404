<template>
  <div
    class="
      relative
      flex flex-col
      w-full
      h-full
      min-h-screen
      work-animation
      bg-white
      text-tmrw-neutral-grey
    "
  >
    <Head>
      <Title>TMRW SG | Works | Integrated | Gatsby</Title>
      <Meta
        name="description"
        content="Bringing together supreme convenience of a grooming routine and the
        colloquial theme of swag, the #10SecSwag was the ultimate solution for
        audiences to engage and connect with the brand’s quirky identity."
      />
      <Meta name="og:title" content="Works | Gatsby" />
      <Meta
        name="og:description"
        content="Bringing together supreme convenience of a grooming routine and the
        colloquial theme of swag, the #10SecSwag was the ultimate solution for
        audiences to engage and connect with the brand’s quirky identity."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-gatsby.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works-gatsby.jpg"
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
      <h1
        class="font-medium tracking-wide uppercase text-xl text-black lg:hidden"
      >
        Connecting with a younger audience whilst staying true to Gatsby’s
        quirky identity
      </h1>
      <img
        src="/img/tmrw-works-gatsby.jpg"
        alt="gatsby"
        class="w-full h-auto block lg:hidden mt-2 mb-5"
      />
      <p
        class="
          font-medium
          text-2xl
          tracking-normal
          lg:pr-36
          mb-4
          lg:mb-0
          text-black
        "
      >
        Bringing together supreme convenience of a grooming routine and the
        colloquial theme of swag, the #10SecSwag was the ultimate solution for
        audiences to engage and connect with the brand’s quirky identity.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-12">
        <div class="col-span-2"></div>
        <div class="col-span-10">
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
              <p
                class="font-normal tracking-normal text-tmrw-neutral-grey mb-2"
              >
                Despite a growing interest in male grooming, the use of facial
                wipes has not quite caught on in Singapore.
              </p>
              <p class="font-normal tracking-normal text-tmrw-neutral-grey">
                Our challenge was to hence establish the benefits of GATSBY’s
                facial wipes in popular consciousness and make it a staple of
                every man’s daily personal care routine.
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">The Idea</h3>
              <p
                class="font-normal tracking-normal text-tmrw-neutral-grey mb-2"
              >
                #10SecSwag was designed to convey the idea of supreme
                convenience via a grooming routine that can be completed in 10
                seconds.
              </p>

              <p class="font-normal tracking-normal text-tmrw-neutral-grey">
                Colloquial yet punchy, the theme of swag was conceived as a
                means to connect with the younger audience whilst staying true
                to the brand’s quirky identity.
              </p>
            </div>
            <div class="flex flex-col">
              <h3 class="font-bold uppercase text-tmrw-red mb-3">
                The Strategy
              </h3>
              <p
                class="font-normal tracking-normal text-tmrw-neutral-grey mb-2"
              >
                In order to overcome a general apathy towards facial wipes, we
                got Singapore’s men to collect free samples of GATSBY’s facial
                wipes and try the product for&nbsp;themselves.
              </p>

              <p
                class="font-normal tracking-normal text-tmrw-neutral-grey mb-2"
              >
                This was achieved through a combination of brand-led social
                media outreach and influencer marketing efforts targeted at two
                distinct audiences: younger male PMEBs and&nbsp;students.
              </p>

              <p class="font-normal tracking-normal text-tmrw-neutral-grey">
                By leveraging on a large pool of macro and micro-influencers
                across three settings – daily life, working out and
                working-from-home – we were able to reach these demographics
                with highly differentiated messages designed to optimise
                engagement&nbsp;efforts.
              </p>
            </div>
          </div>
          <div class="flex flex-col my-4 lg:my-10">
            <h3 class="font-bold uppercase text-tmrw-red mb-3">
              The Execution
            </h3>
            <p class="font-normal tracking-normal text-tmrw-neutral-grey">
              Reflecting the irreverent, tongue-in-cheek nature of the campaign,
              all design elements were united by the use of vibrant, energetic
              colours. Additionally, visual elements featured younger men
              wherever possible, in order to increase relatability with the
              target demographic and round off the campaign's casual, highly
              accessible tone.
            </p>
          </div>
          <div
            class="
              grid grid-cols-1
              lg:grid-cols-2
              gap-y-8
              lg:gap-y-0 lg:gap-x-10
            "
          >
            <div class="flex flex-col">
              <img
                src="/img/tmrw-works-gatsby-cheatsheet-1.jpg"
                class="w-full block h-auto mb-3 border border-neutral-200"
                alt="Gatsby Cheat Sheet (Front)"
              />
              <p
                class="
                  font-normal
                  text-xs
                  tracking-normal
                  text-tmrw-neutral-grey
                "
              >
                Gatsby Cheat Sheet (Front)
              </p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/tmrw-works-gatsby-cheatsheet-2.jpg"
                class="w-full block h-auto mb-3"
                alt="Gatsby Cheat Sheet (Back)"
              />
              <p
                class="
                  font-normal
                  text-xs
                  tracking-normal
                  text-tmrw-neutral-grey
                "
              >
                Gatsby Cheat Sheet (Back)
              </p>
            </div>
          </div>
          <Workresult />
        </div>
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
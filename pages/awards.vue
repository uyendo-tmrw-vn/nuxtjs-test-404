<template>
   <NuxtLayout name="works">
  <div
    class="
      relative
      w-full
      h-full
      flex flex-col
      lg:flex-row
      items-center
      justify-start
      lg:justify-center lg:min-h-screen
      bg-tmrw-yellow
    "
  >
    <Head>
      <Title>TMRW SG - Awards</Title>
      <Meta
        name="description"
        content="Founded in 2015, TMRW is an award-winning digital creative agency built on insight and guided by an idea-centric, media-neutral approach."
      />
      <Meta name="og:title" content="Awards" />
      <Meta
        name="og:description"
        content="Founded in 2015, TMRW is an award-winning digital creative agency built on insight and guided by an idea-centric, media-neutral approach."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-awards.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-awards.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <div
      class="
        hidden
        lg:block
        w-full
        lg:h-screen
        relative
        lg:absolute
        top-0
        left-0
      "
    >
      <video
        id="awards-video"
        class="w-full h-full object-cover"
        autoplay
        muted
        playsInline
        autoBuffer
      >
        <source
          src="https://cdn.tmrw.com.sg/tmrw-assets/video/awards.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="lg:hidden">
      <img src="/img/home-mobile-awards-v2.png" class="block w-full" alt="" />
    </div>

    <div
      class="
        container
        px-3
        py-3
        content-fade-in-delayed
        h-full
        text-white
        flex
        lg:items-center
        justify-center
      "
    >
      <div class="confined-div">
        <Accordion
          id="accordion-example-2"
          :content="awardsData"
          groupId="mainAwards"
          multiple="multiple"
        ></Accordion>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>


<style lang="scss" scoped>
.confined-div {
  overflow-y: auto;
  height: 400px;
  width: 780px;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: auto;
  }
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #1e1e1e;
  border: 0px solid #000000;
  border-radius: 90px;
}
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}

::-webkit-scrollbar-track {
  background-image: url("/img/black-line-vertical.png");
  background-repeat: repeat-y;
  background-size: contain;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 300ms #{$waitTime};
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
.content-fade-in-delayed {
  @media screen and (min-width: 992px) {
    @include fade-in("3500ms");
  }
}
</style>

<script>
import awardsData from "~/assets/data/awards.json";
import Accordion from "../components/Accordion.vue";

export default {
  scrollToTop: true,
  data() {
    return {
      awardsData,
    };
  },
  methods: {
    loopAwardsVideo() {
      //document.getElementById("awards-video").currentTime = 3.425;
      //document.getElementById("awards-video").play();
    },
  },
  components: {
    Accordion,
  },
};
</script>
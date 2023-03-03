<template>
   <NuxtLayout name="works">
  <div class=" grid grid-cols-1 lg:pt-12 lg:px-12 w-full h-full min-h-screen gap-0 lg:gap-1 work-animation">

    <Head>
      <Title>TMRW SG | News</Title>
      <Meta
        name="description"
        content="Strategy built on insights. Ideas that exist beyond boundaries. Campaigns centred around communities."
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works.jpg"
      />
      <Meta
        name="og:url"
        :content="'https://tmrw.com.sg' + $route.path"
      />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <!-- video desktop  -->
    <div
      class=" hidden lg:block w-full lg:h-screen relative lg:absolute top-0 left-0 bg-tmrw-yellow z-30"
      id="news-video-container"
    >
      <video
        id="news-video"
        class="w-full h-full object-cover"
        autoplay
        muted
        playsInline
        autoBuffer
        v-on:ended="hideVideo()"
      >
        <source
          src="https://cdn.tmrw.com.sg/tmrw-assets/video/news.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!-- video mobile  -->
    <video
      id="news-video-m"
      class="block lg:hidden w-full h-auto object-cover"
      autoplay
      muted
      playsInline
      autoBuffer
    >
      <source
        src="/video/news.mp4"
        type="video/mp4"
      />
    </video>

    <!-- list  -->
    <div
      id="news-content-container"
      class="lg:opacity-0 mb-10 lg:mb-5"
    >
      <WorkoverviewNewsBlog
        :workData="workData"
        gtmCategory="News"
      />
    </div>

    <!-- addon -->
    <div
      v-show="isContentBlogLonger == true"
      v-on:click="goToNextArticle"
      class="triangle_down"
    ></div>

  </div>
</NuxtLayout>
</template>

<script setup>
import WorkoverviewNewsBlog from "~/components/WorkoverviewNewsBlog.vue";
const config = useRuntimeConfig();
</script>

<script>
import workData from "~/assets/data/news.json";

export default {
  data() {
    return {
      workData,
      // addon
      scrolled: false,
      window: {
        width: 0,
        height: 0
      },
      scTimer: 0,
      scY: 0,
      isContentBlogLonger: false
    };
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    hideVideo() {
      document.body.style.overflow = "auto";
      document
        .getElementById("news-video-container")
        .classList.add("content-fade-out-delayed");
      document
        .getElementById("news-content-container")
        .classList.add("content-fade-in-delayed");
      document.getElementById("news-content-container").style.zIndex = "38";
      setTimeout(() => {
        if (
          document.getElementById("news-content-container").clientHeight >=
          window?.innerHeight
        ) {
          document.querySelector(".triangle_down").style.display = "block";
        }
      }, 1000);
    },
    handleResize() {
      if (typeof window !== "undefined") {
        this.window.width = window?.innerWidth;
        this.window.height = window?.innerHeight;
      } else {
        console.log("none");
      }
    },
    goToNextArticle() {
      window.scrollTo({
        top: this.window.height,
        behavior: "smooth"
      });
    },
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    getWindowSize() {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          this.handleResize();
        }
      }, 1000);
      document.body.style.overflow = "hidden";
    if (window.innerWidth < 1024) {
      document.body.style.overflow = "auto";
    }
    }
  },
  mounted() {
    this.backToTop();
   
    if (window.pageYOffset > window.innerHeight - 350) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
    // addon
    window.addEventListener("scroll", this.handleScroll);
    this.getWindowSize();
  }
};

</script>

<style scoped lang="scss">
@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 500ms #{$waitTime};
  animation-fill-mode: forwards;
}
@mixin fade-out($waitTime) {
  animation: wait2 #{$waitTime}, fade-out 500ms #{$waitTime};
  animation-fill-mode: forwards;
}

@keyframes wait {
  0% {
    opacity: 0;
    overflow: hidden;
    height: 1px;
  }
  100% {
    opacity: 0;
    overflow: hidden;
    height: 1px;
  }
}
@keyframes wait2 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    overflow: auto;
    height: auto;
  }
  100% {
    opacity: 1;
    height: auto;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

$initialDelay: 0;

.content-fade-in-delayed {
  @media screen and (min-width: 992px) {
    @include fade-in("1ms");
  }
}
.content-fade-out-delayed {
  @media screen and (min-width: 992px) {
    @include fade-out("1ms");
  }
}
</style>
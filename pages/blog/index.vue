<template>
  <div class="grid grid-cols-1 lg:pt-12 lg:px-12 w-full h-full min-h-screen gap-0 lg:gap-1 work-animation items-star">

    <Head>
      <Title>TMRW SG | Blog</Title>
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
    </Head>

    <!-- video desktop  -->
    <div
      class="post-list hidden lg:block w-full lg:h-screen relative lg:absolute top-0 left-0  bg-tmrw-yellow z-3 "
      id="blog-video-container"
    >
      <video
        id="blog-video"
        class="w-full h-full object-cover"
        autoplay
        muted
        playsInline
        autoBuffer
        v-on:ended="hideVideo()"
      >
        <source
          src="https://cdn.tmrw.com.sg/tmrw-assets/video/blog.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <!-- video mobile  -->
    <video
      id="blog-video-m"
      class="block lg:hidden w-full h-[55vw]"
      autoplay
      muted
      playsInline
      autoBuffer
    >
      <source
        src="/video/blog.mp4"
        type="video/mp4"
      />
    </video>

    <!-- list  -->
    <div
      id="blog-content-container"
      class="lg:opacity-0 mb-10 lg:mb-5"
    >
      <WorkoverviewNewsBlog
        :isBlog="true"
        :workData="blogList"
        gtmCategory="Blog"
      />
    </div>

    <!-- addon -->
    <div
      v-show="isContentBlogLonger == true"
      v-on:click="goToNextArticle"
      class="triangle_down"
    ></div>

    <div
      v-show="scY > 300"
      class="block lg:hidden fixed bottom-24 z-[999] right-[10px]"
    >
      <span
        class=" w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-full transition duration-300 rotate-180 cursor-pointer"
        @click="backToTop()"
      >
        <Arrowdown />
      </span>
    </div>
    <!-- end addon -->

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { PICTURE_LINK, DOMAIN_CMS } from "@/constants";
import WorkoverviewNewsBlog from "~/components/WorkoverviewNewsBlog.vue";
const blogList = ref();

const list = await fetch(
  `${DOMAIN_CMS}/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort`
)
  .then(response => response.json())
  .then(json => {
    // console.log(444, json);

    json.data.forEach(element => {
      element.path = "/blog/" + element.path;
    });
    blogList.value = json.data;
  });
</script>

<script>
export default {
  data() {
    return {
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
    hideVideo() {
      document.body.style.overflow = "auto";
      document
        .getElementById("blog-video-container")
        .classList.add("content-fade-out-delayed");
      document
        .getElementById("blog-content-container")
        .classList.add("content-fade-in-delayed");
      document.getElementById("blog-content-container").style.zIndex = "38";
      setTimeout(() => {
        if (
          document.getElementById("blog-content-container").clientHeight >=
          window?.innerHeight
        ) {
          document.querySelector(".triangle_down").style.display = "block";
        }
      }, 1000);
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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
    document.body.style.overflow = "hidden";
    if (window.innerWidth < 1024) {
      document.body.style.overflow = "auto";
    }
    // addon
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("load", this.handleScroll);
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
<template>
  <NuxtLayout name="works">
  <div
    class="w-full h-full lg:h-screen min-h-screen bg-tmrw-yellow pb-10 lg:pb-0"
  >
    <Head>
      <Title>Award-winning Creative Digital Agency in Singapore - TMRW</Title>
      <Meta
        name="description"
        content="Founded in 2015, TMRW is an award-winning digital creative agency built on insight and guided by an idea-centric, media-neutral approach."
      />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <video
      class="w-full h-full object-cover"
      autoplay
      muted
      playsInline
      autoBuffer
    >
      <source
        :src="'https://cdn.tmrw.com.sg/tmrw-assets' + '/video/home.mp4'"
        type="video/mp4"
      />
    </video>
    <!--
    <div class="lg:hidden">
      <nuxt-link
        to="/digital-first-thinking/"
        class="flex justify-center mx-auto mt-4"
      >
        <button
          class="text-xl font-bold uppercase bg-black text-white p-3 rounded-xl"
        >
          Digital
        </button>
      </nuxt-link>
      <div class="block mt-10 px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
    </div>
    -->
    <div class="lg:hidden">
      <div class="flex items-end px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
      <img
        :src="config.imgBaseUrl + '/img/home-mobile-awards-v2.png'"
        class="block w-full"
        alt=""
      />

      <nuxt-link
        to="/awards/"
        class="flex justify-start px-10 -mt-12 pb-5 btn-gtm"
        data-gtm-category="Home Mobile"
        data-gtm-action="Clicked_CTA_Button"
        data-gtm-label="Awards"
      >
        <span
          class="
            flex
            w-8
            h-8
            items-center
            justify-center
            bg-[#df6136]
            rounded-full
          "
        >
          <span class="flex w-4"><Arrowdown /></span>
        </span>
      </nuxt-link>
      <div class="flex items-end px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
    </div>
    <div class="lg:hidden">
      <img
        :src="config.imgBaseUrl + '/img/home-mobile-news-v2.png'"
        class="block w-full"
        alt=""
      />
      <nuxt-link
        to="/news/"
        class="flex justify-start px-10 -mt-12 pb-5 btn-gtm"
        data-gtm-category="Home Mobile"
        data-gtm-action="Clicked_CTA_Button"
        data-gtm-label="News"
      >
        <span
          class="
            flex
            w-8
            h-8
            items-center
            justify-center
            bg-[#df6136]
            rounded-full
          "
        >
          <span class="flex w-4"><Arrowdown /></span>
        </span>
      </nuxt-link>
      <div class="flex items-end px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
    </div>
    <div class="lg:hidden">
      <img
        :src="config.imgBaseUrl + '/img/home-mobile-works-v2.png'"
        class="block w-full"
        alt=""
      />
      <nuxt-link
        to="/works/"
        class="flex justify-start px-10 -mt-12 pb-5 btn-gtm"
        data-gtm-category="Home Mobile"
        data-gtm-action="Clicked_CTA_Button"
        data-gtm-label="Portfolio"
      >
        <span
          class="
            flex
            w-8
            h-8
            items-center
            justify-center
            bg-[#df6136]
            rounded-full
          "
        >
          <span class="flex w-4"><Arrowdown /></span>
        </span>
      </nuxt-link>
      <div class="flex items-end px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
    </div>
    <div class="lg:hidden">
      <img
        :src="config.imgBaseUrl + '/img/home-mobile-blog-v2-r1.png'"
        class="block w-full"
        alt=""
      />
      <nuxt-link
        to="/blog/"
        class="flex justify-start px-10 -mt-12 pb-5 btn-gtm"
        data-gtm-category="Home Mobile"
        data-gtm-action="Clicked_CTA_Button"
        data-gtm-label="Blog"
      >
        <span
          class="
            flex
            w-8
            h-8
            items-center
            justify-center
            bg-[#df6136]
            rounded-full
          "
        >
          <span class="flex w-4"><Arrowdown /></span>
        </span>
      </nuxt-link>
      <div class="flex items-end px-10 w-full h-1">
        <span class="border-b border-white block w-full"></span>
      </div>
    </div>
    <div class="lg:hidden">
      <img
        :src="config.imgBaseUrl + '/img/home-mobile-contact-v2-r1.png'"
        class="block w-full"
        alt=""
      />
      <nuxt-link
        to="/contact/"
        class="flex justify-start px-10 -mt-1 btn-gtm"
        data-gtm-category="Home Mobile"
        data-gtm-action="Clicked_CTA_Button"
        data-gtm-label="Contact"
      >
        <span
          class="
            flex
            w-8
            h-8
            items-center
            justify-center
            bg-[#df6136]
            rounded-full
          "
        >
          <span class="flex w-4"><Arrowdown /></span>
        </span>
      </nuxt-link>
    </div>
  </div>
</NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
</script>

<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.backToTop();
  },
};
</script>

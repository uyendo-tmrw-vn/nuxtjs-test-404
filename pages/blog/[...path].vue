<template>
  <div class="post-detail relative flex flex-col w-full h-full min-h-screen work-animation bg-tmrw-works-grey text-tmrw-dark-grey ">

    <Head>
      <Title>TMRW SG | Blog | {{ blogDetail.title }}</Title>
      <Meta
        name="description"
        :content="blogDetail.meta_description ? blogDetail.meta_description : 'xxx'"
      />
      <Meta
        name="og:title"
        :content="blogDetail.meta_title ? blogDetail.meta_title : blogDetail.title"
      />
      <Meta
        name="og:description"
        :content="blogDetail.meta_description ? blogDetail.meta_description : blogDetail.title"
      />
      <Meta
        name="og:url"
        :content="'https://tmrw.com.sg' + $route.path"
      />
      <Meta
        name="author"
        :content="blogDetail.author"
      />
    </Head>

    <div
      class="post-detail-wrap container pt-10 lg:pt-12 lg:pb-20"
      v-show="blogDetail"
    >
      <!-- banner  -->
      <figure class="mt-2 mb-5 border-2 border-white relative">
        <img
          class="w-full h-auto"
          src="/img/blog-detail-placeholder.jpg"
        />
        <img
          :src="blogDetail.img && blogDetail.img.id ? (PICTURE_LINK +blogDetail.img.id) : '/img/blog-detail-placeholder.jpg'"
          :alt="blogDetail.title"
          class="w-full h-auto absolute top-[-50%] left-[-50%] translate-x-[50%] translate-y-[50%]"
        />
      </figure>

      <!-- content  -->
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-16">
        <div class="col-span-2 font-bold text-white mb-8">
          <span
            class="transition duration-300"
            :class="scrolled && 'opacity-0'"
          >
            <Scrolldownformore /></span>
        </div>
        <div class="col-span-10">

          <div class="flex flex-col">
            <h1 class="font-normal tracking-normal text-2xl text-tmrw-dark-grey">
              <span class="uppercase">{{ blogDetail.title }}</span>
              <span
                class="text-base block"
                v-if="blogDetail.sub_title"
                v-html="blogDetail.sub_title"
              ></span>
            </h1>
          </div>

          <!-- description from cms  -->
          <div
            class="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:gap-x-10 my-4 lg:my-16"
            v-html="blogDetail.description"
          ></div>
          <p class="font-normal tracking-normal text-tmrw-dark-grey mt-20 uppercase">
            {{ blogDetail.author }}
          </p>

          <!-- static  -->
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <div class="block lg:hidden">
            <span
              class=" w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-full transition duration-300 rotate-180 cursor-pointer"
              :class="!scrolled && 'opacity-0 -z-30'"
              @click="backToTop()"
            >
              <Arrowdown />
            </span>
          </div>

          <!-- list blogs  -->
          <div class="flex items-center justify-end mb-5 lg:mb-0">
            <div class="flex items-center mr-5 mb-5">
              <span class="text-tmrw-red tracking-widest font-semibold mr-4">NEXT</span><span class="w-2">
                <Arrowrightgeneric fill="#74797e" /></span>
            </div>
            <div class="flex flex-row space-x-3 overflow-x-auto max-w-[80%] lg:max-w-full">
              <div
                class="flex flex-col min-w-[100px] lg:min-w-[90px] lg:min-w-none mb-3 lg:mb-0"
                v-for="entry in blogList"
                :key="entry.path"
                v-show="'/blog/' + entry.path !== $route.path"
              >
                <nuxt-link :to="'/blog/' + entry.path">
                  <div class=" overflow-hidden group border-2 border-transparent hover:border-white transition-all duration-300 ">
                    <img
                      :src="PICTURE_LINK + entry.thumb.id"
                      :alt="entry.title"
                      class=" w-40 block h-auto transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span class=" font-light block text-left text-[0.8rem] lg:text-sm uppercase tracking-normal mt-2">
                    {{ entry.author }}
                  </span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:block lg:fixed lg:bottom-24 cursor-pointer">
        <span
          class="w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-full transition duration-300 rotate-180 cursor-pointe "
          :class="!scrolled && 'opacity-0 -z-30'"
          @click="backToTop()"
        >
          <Arrowdown />
        </span>
      </div>

    </div>

  </div>
</template>
    
<script setup>
import { onMounted, ref, computed } from "vue";
const config = useRuntimeConfig();

const route = useRoute();
const blogDetail = ref({});
const blogList = ref([]);
console.log(55, route.params.path);
// const path = route.params.path

// console.log({ path });

const detail = fetch(`${DOMAIN_CMS}/tmrw-com-sg/blogs/slug/${route.params.path[0]}`)
  .then(response => response.json())
  .then(json => {
    
    blogDetail.value = json.data;
  });

const list = fetch(
  `${DOMAIN_CMS}/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort`
)
  .then(response => response.json())
  .then(json => {
    console.log(66,json.data);
    json.data.forEach(element => {
      element.path = element.path;
    });
    blogList.value = json.data;
  });
</script>

<script>
import { defineComponent, ref } from "vue";
import blogData from "~/assets/data/blog.json";
import {PICTURE_LINK,DOMAIN_CMS } from '@/constants'

export default defineComponent({
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      if (window.pageYOffset > window.innerHeight - 350) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  mounted() {
    this.backToTop();

    window.addEventListener("scroll", this.handleScroll);
    if (window.pageYOffset > window.innerHeight - 350) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
});
</script>

<style scoped lang="scss"></style>
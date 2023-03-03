<template>
  <div class="relative flex flex-col w-full h-full min-h-screen work-animation bg-tmrw-works-grey text-tmrw-dark-grey ">

    <Head>
      <Title>TMRW SG | Blog | other</Title>
      <Meta
        name="description"
        content="A new and innovative ways to engage our customers to take the showroom to them — anytime, anywhere."
      />
      <Meta
        name="og:url"
        :content="'https://tmrw.com.sg' + $route.path"
      />
      <Meta
        name="author"
        content="Kanesh Pillai"
      />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>

    <div class="container pt-10 lg:pt-12 lg:pb-20">
      <img
        :src="blogDetail.imgLink ? ('https://cms.tmrw.com.sg/assets/'+blogDetail.imgLink) : 'https://cms.tmrw.com.sg/assets/ba249ffd-010f-4749-bb2a-57ab4675dfa5'"
        class="w-full h-auto mt-2 mb-5 border-2 border-white"
      />

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
              <span class="uppercase">Text</span>
              <span class="text-base block">Text</span>
            </h1>
          </div>

          <!-- description from cms  -->
          <div class="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:gap-x-10 my-4 lg:my-16">
            <!-- change for test  -->
            <!-- <Post5/> -->
            <Post6/>
          </div>
          <p class="font-normal tracking-normal text-tmrw-dark-grey mt-20 uppercase">
            Text
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
            <div class="flex flex-row space-x-3">
              <div
                class="flex flex-col"
                v-for="entry in blogList"
                :key="entry.path"
                v-show="'/blog/'+entry.path !== $route.path"
              >
                <nuxt-link :to="entry.path">
                  <div class=" overflow-hidden group border-2 border-transparent hover:border-white transition-all duration-300">
                    <img
                      :src="'https://cms.tmrw.com.sg/assets/' + entry.thumbs.id"
                      :alt="entry.title"
                      class=" w-40 block h-auto transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span class=" font-light block text-left text-sm uppercase tracking-normal mt-2">
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
import { onMounted, ref } from "vue";
const config = useRuntimeConfig();

const route = useRoute();
const slug = route.params.slug;
const blogDetail = ref({});
const blogList = ref([]);
const id = ref();

onMounted(() => {
  console.log("onMounted");
  // list 
  getBlogList()
});

const getBlogList = async () => {
  $fetch(
    `https://cms.tmrw.com.sg/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort`
  ).then(function(response) {
    // mapping to old data 
    response.data.forEach(element => {
      element.path =element.id+'&'+ element.path;
    });

    blogList.value = response.data;
    // console.log({blogList});
  });
};

</script>
    
<script>

import "vue3-carousel/dist/carousel.css";
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import blogData from "~/assets/data/blog.json";

import Post5 from "../../components/blogs/post-5.vue";
import Post6 from "../../components/blogs/post-6.vue";

export default defineComponent({
  data: () => ({
    scrolled: false
  }),
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
  
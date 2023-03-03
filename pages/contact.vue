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
      <Title>TMRW SG - Contact</Title>
      <Meta name="description" content="We'd love to hear from you." />
      <Meta name="og:title" content="Contact" />
      <Meta name="og:description" content="We'd love to hear from you." />
      <Meta
        name="image"
        property="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-contact.jpg"
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-contact.jpg"
      />
      <Meta name="og:url" :content="'https://tmrw.com.sg' + $route.path" />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <div class="w-full lg:h-screen relative lg:absolute top-0 left-0">
      <video
        class="w-full h-full object-cover"
        autoplay
        muted
        playsInline
        autoBuffer
      >
        <source
          :src="'https://cdn.tmrw.com.sg/tmrw-assets' + '/video/contact.mp4'"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="content-fade-in-delayed form-container">
      <form @submit.prevent="handleSubmit" v-if="!submitted">
        <div class="form flex flex-col">
          <label for="name" class="mt-3">Name</label>
          <input
            type="text"
            v-model="form.name"
            name="name"
            id="name"
            class="form-control"
          />
          <label for="email" class="mt-3">Email</label>
          <input
            type="text"
            v-model="form.email"
            name="email"
            id="email"
            class="form-control"
          />
          <label for="message" class="mt-3">Message</label>
          <input
            type="text"
            v-model="form.message"
            name="message"
            id="message"
            class="form-control"
          />

          <div class="flex justify-start">
            <button
              class="
                btn
                bg-tmrw-dark-grey
                text-white
                uppercase
                pt-3
                pb-2
                px-16
                mt-3
                font-semibold
                tracking-wider
                disabled:opacity-30
              "
              :disabled="
                form.name !== '' && form.email !== '' && form.message !== ''
                  ? false
                  : true
              "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div class="mt-0" v-else>
        Thank you for your message.<br />We’ll get back to you within 1 working
        day.
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
<script>
import axios from "axios";

export default {
  data() {
    return {
      submitted: false,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    formSubmit() {
      this.formRequest()
        .then((result) => {
          this.submitted = true;
          console.log(result);
        })
        .catch((error) => {
          console.error("Contact form could not be send", error);
        });
    },
    handleSubmit: async function () {
      const formData = new FormData();

      for (let [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }

      await axios
        .post("https://api.tmrw.com.sg/process/sendemail.php", formData)
        .then(({ data }) => {
          this.submitted = true;
        })
        .catch((e) => {
          console.log("error");
        });
    },
  },
};
</script>

<style scoped lang="scss">
p {
  @apply text-white;
}
video {
  object-position: 25% 25%;
}
.form-container {
  @apply -mt-8 w-full px-5 lg:mt-[20vh] lg:absolute lg:left-[620px] lg:w-1/4 xl:left-1/2 xl:w-1/3 lg:max-w-2xl;
}
.form-control {
  @apply bg-transparent border-b-2 border-tmrw-dark-grey py-1 text-xl mb-3 lg:mb-4;
  &:focus {
    outline: 0;
  }
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
  @include fade-in("6000ms");
}
</style>
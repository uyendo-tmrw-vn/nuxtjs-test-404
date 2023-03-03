<template>
  <NuxtLayout name="error">
    <div class="h-[90vh] flex items-center justify-center">
      <div class="mt-7 max-w-[35%] bg-[#000000a1] text-[#fff] w-full mx-auto text-center card h-auto">
        <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7">{{error.message}}</p>
        <button
          class="btn my-7"
          @click="handleError"
        >Go Home...</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const layouts='error';
defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: "/" });
const router = useRouter()


const error1 = useError()
console.log(error1.value.statusCode,error1.value.message);
if(error1.value.statusCode == 404){
  router.replace('/error404')
}

</script>


<script>
export default{
  setup() {
    if (process.server) {
        const nuxtApp = useNuxtApp();
        const error = new Error();
        error.statusCode = 404;
      //  nuxtApp.ssrContext.error = error;
       nuxtApp.ssrContext.nuxt.error = error;
    }
},
}
</script>
<template>
  <div class="flex flex-col justify-center items-center lg:items-start group">
    <span
      class="
        text-left
        uppercase
        text-tmrw-dark-grey text-xxs
        font-semibold
        hover:text-neutral-500
      "
      >{{ categoryTitle }}</span
    >
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    categoryImg: {
      type: String,
      default: "",
    },
    categoryTitle: {
      type: String,
      default: "",
    },
    categoryPath: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.text-xxs {
  font-size: 10px;
}
/*
.footerIntegrated {
  background: url("/img/tmrw-works-footer-integrated.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.footerDigital {
  background: url("/img/tmrw-works-footer-digital.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.footerSocial {
  background: url("/img/tmrw-works-footer-social.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.footerDesign {
  background: url("/img/tmrw-works-footer-design.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.footerActivation {
  background: url("/img/tmrw-works-footer-activation.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
*/
/*
.selected {
  @apply border-tmrw-dark-grey;
  & > div {
    @apply bg-opacity-30;
  }
} */
</style>
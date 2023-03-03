<template>
  <div
    :id="groupId + '-' + groupIndex"
    class="accordion-item mt-2"
    :class="{ 'is-active': item.active }"
  >
    <dt class="accordion-item-title">
      <button @click="toggle" class="accordion-item-trigger flex items-center">
        <h3 class="accordion-item-title-text ml-2">{{ item.category }}</h3>
        <span class="accordion-item-trigger-icon"></span>
      </button>
    </dt>
    <transition
      name="accordion-item"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <dd v-if="item.active" class="accordion-item-details">
        <div v-html="item.details" class="accordion-item-details-inner"></div>
        <ul v-if="item.awards" class="award-indent mt-1">
          <li
            v-for="award in item.awards"
            :key="'award' + award"
            class="text-tmrw-dark-grey"
          >
            {{ award }}
          </li>
        </ul>
        <div v-if="item.awardsWithSubCat" class="award-indent">
          <Accordionsub
            :id="item.slug"
            :content="item.awardsWithSubCat"
            groupId="subAwards"
            multiple="multiple"
          ></Accordionsub>
        </div>
      </dd>
    </transition>
  </div>
</template>

<script>
import Accordionsub from "./Accordionsub.vue";
export default {
  name: "AccordionItem",
  props: ["item", "multiple", "groupId", "groupIndex"],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active;
      else {
        this.$parent.$children.forEach((item, index) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active;
          else item.item.active = false;
        });
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },
    endTransition(el) {
      el.style.height = "";
    },
  },
  components: { Accordionsub },
};
</script>

<style lang="scss" scoped>
.accordion-item-title-text {
  font-family: agenda, sans-serif;
  @apply uppercase text-lg md:text-2xl text-left text-tmrw-dark-grey font-semibold hover:font-bold tracking-widest mt-2 transition-colors duration-300 ease-in-out;
}
.accordion-item-title {
  .folderImg,
  .arrow {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    .folderImg,
    .arrow {
      opacity: 0.8;
    }
  }
}
.award-indent {
  @apply pl-8;
}
.award-indent {
  .accordion-item-title-text {
    @apply text-base md:text-xl mt-1;
  }
}
.is-active {
  & > dt > button > h3 {
    @apply font-bold tracking-widest;
  }
}
</style>
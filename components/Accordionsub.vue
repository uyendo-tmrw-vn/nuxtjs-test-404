<template>
  <dl class="accordion box" role="presentation">
    <AccordionItem
      v-for="(item, index) in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :groupIndex="index"
      :key="groupId + '_' + index"
    >
    </AccordionItem>
  </dl>
</template>

<script>
export default {
  name: "Accordionsub",
  props: {
    groupId: {
      type: String,
      default: "tmrwAwards",
    },
    groupIndex: {
      type: Number,
      default: 0,
    },
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
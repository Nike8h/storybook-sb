<template>
  <span class="brand-logo font-open-sans font-extrabold uppercase"
        :class="[dark ? 'text-gray-800' : 'text-white']">
   <img src='https://stylebase.ai/wp-content/uploads/2022/04/cropped-Group-18-1.png' />
    <img class="w-32 h-32" src='../assets/logo/Logosb.png' />
   </span>
</template>

<script>
export default {
  props: {
    dark: {
      default: false,
      type: Boolean
    },
  },
};
</script>

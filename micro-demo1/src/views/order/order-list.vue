<template>
  <div>
    <h1>😀订单中心(子应用)</h1>
    <local-storage-data />
  </div>
</template>

<script>
import localStorageData from "@/components/localStorageData.vue";
export default {
  components: {
    localStorageData,
  },
};
</script>

<style  scoped>
</style>
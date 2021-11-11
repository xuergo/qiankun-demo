<template>
  <div>
    <h1>😊基座页面</h1>
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
<style scoped>
.mr-10 {
  margin-right: 10px;
}
</style>

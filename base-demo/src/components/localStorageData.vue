<template>
  <Card style="width: 350px">
    <p slot="title">共享缓存</p>
    <div>
      <Input
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px"
      />
    </div>
    <Button type="primary" class="mr-10" @click="saveLocation">存入缓存</Button>
    <Button type="primary" class="mr-10" @click="remLocation">删除缓存</Button>
    <Button type="primary" class="mr-10" @click="getLocation">获取缓存</Button>
    <h2>缓存数据</h2>
    <h3>{{ localStorageData }}</h3>
  </Card>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      value: "一些数据😀",
      localStorageData: "",
    };
  },
  methods: {
    //存入缓存
    saveLocation() {
      localStorage.setItem("localStorageData", this.value);
    },
    //删除缓存
    remLocation() {
      localStorage.removeItem("localStorageData");
    },
    //获取缓存
    getLocation() {
      this.localStorageData = localStorage.getItem("localStorageData");
    },
  },
};
</script>

<style lang="" scoped>
</style>
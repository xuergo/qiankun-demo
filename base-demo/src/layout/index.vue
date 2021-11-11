<template>
  <Row class="home">
    <Col :span="4">
      <Menu :theme="theme2" @on-select="selectMenu">
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people" />
            用户管理（基座）
          </template>
          <MenuItem name="/home">登录</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />
            订单中心 (子应用)
          </template>
          <MenuItem name="/order-center/order-list">订单列表</MenuItem>
          <MenuItem name="order-statistics">订单统计</MenuItem>
        </Submenu>
      </Menu>
    </Col>
    <Col :span="16">
      <Content class="main">
        <router-view />
      </Content>
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      theme2: "dark",
    };
  },
  methods: {
    selectMenu(path) {
      this.$router.push({
        path: path,
      });
    },
  },
};
</script>
<style  scoped>
.home {
  min-height: 100vh;
}
.main {
  width: 100%;
  height: 100%;
}
</style>
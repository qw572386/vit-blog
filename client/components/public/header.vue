<template>
  <div class="vit-header">
    <nuxt-link to="/"><img src="../../static/logo.png" alt="logo" class="vit-header-logo"></nuxt-link>
    <el-menu
      :default-active="activeIndex"
      class="vit-header-menu"
      mode="horizontal"
      @select="handleSelect"
      text-color="#3f2863"
      active-text-color="#ff7f21"
    >
      <el-menu-item index="home">文章</el-menu-item>
      <el-menu-item index="whisper">微语</el-menu-item>
      <el-menu-item index="leacots">留言</el-menu-item>
      <el-menu-item index="photos">相册</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ path: `/${key}` })
    }
  }
}
</script>

<style lang="less" scoped>
.vit-header {
  height: 100%;
  overflow: hidden;
  display: flex;
  &-menu {
    flex-grow: 1;
    border: none;
    .el-menu-item {
      border: none;
    }
  }
  &-logo {
    width: 120px;
    height: 60px;
    margin-right: 50px;
  }
}
</style>

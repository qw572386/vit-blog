<template>
  <el-container>
    <el-header>
      <vit-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <vit-footer />
    </el-footer>
  </el-container>
</template>
<script>
import vitHeader from '~/components/public/header.vue'
import vitFooter from '~/components/public/footer.vue'
export default {
  components: {
    vitHeader,
    vitFooter
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<template>
  <div class="all">
    <button @click="ceshi" class="aa">测试接口</button>
  </div>
</template>

<script setup>
import { login, mailvef, mailregister, info } from "../api/login"

const ceshi = () => {
  info().then((res) => {
    console.log(res)
  })
}

</script>

<style lang='less' scoped>
.all {
  width: 100%;
  height: 100vh;

  .aa {
    position: fixed;
    top: 200px;
    left: 200px;
  }
}
</style>

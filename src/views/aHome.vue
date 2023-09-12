<template>
  <div class="all">
    <button @click="ceshi" class="aa">测试接口</button>
  </div>
</template>

<script setup>
import { login, mailvef, mailregister, info } from "../api/login"
import { addArticle } from "../api/article"

const ceshi = () => {
  let form = {
    name: "梁田",
    info: "今年21",
    tag: "大四",
    time: "2023-9-11",
  }
  addArticle(form).then((res) => {
    const storedToken = localStorage.getItem('token')//获取token
    const token = JSON.parse(storedToken) // 转换token

    console.log(token)
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

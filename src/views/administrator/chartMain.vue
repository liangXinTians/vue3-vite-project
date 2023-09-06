<template>
  <div>
    <el-row :gutter="20">
            <el-col :span="8" :offset="2" class="classCard"
              ><div class="grid-content ep-bg-purple">访问人数：{}</div></el-col
            >
            <el-col :span="8" :offset="4" style="margin-top: 100px"
              ><div class="grid-content ep-bg-purple"></div
            ></el-col>
          </el-row>
          <el-row :gutter="20" style="margin-top: 100px">
            <el-col :span="8" :offset="2"
              ><div class="grid-content ep-bg-purple"></div
            ></el-col>
          </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

/* 班级名称 */
#className {
  width: 90%;
  position: relative;
  color: #474c59;
  font-size: 12px;
  text-align: center;
}
 /* 左边统计访问数 */
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: aqua;
}
.classCard {
  border-radius: 20px;
  min-height: 120px;
  transform: translateY(0);
  transition: transform 300ms linear;
}
.classCard:hover {
  cursor: pointer;
  position: relative;
  transform: translateY(-3px) translateZ(0);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.19);
}
</style>
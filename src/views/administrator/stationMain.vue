<template>
  <el-button
      @click="addStationValue"
      type="primary"
      round
      style="position: relative; top: 1px"
      >添加岗位</el-button
    >
    <el-button
      @click="refreshStationValue"
      type="primary"
      round
      style="position: relative; top: 1px"
      >刷新岗位</el-button
    >
  <cardStation :listValue="listValue" @detailsClick="detailsClick" @editClick="editClick" @deleteClick="deleteClick"></cardStation>
  <!-- 添加岗位 -->
  <el-dialog v-model="disAddStation" title="添加岗位" width="30%" draggable>
      <el-form
        label-width="100px"
        :model="addStationValueList"
        style="max-width: 460px"
      >
        <el-form-item label="公司">
          <el-input v-model="addStationValueList.title" />
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="addStationValueList.category" />
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="addStationValueList.typeName" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="addStationValueList.detail" />
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="addStationValueList.location" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="disAddFirm = false">取消</el-button>
          <el-button type="primary" @click="putAddStationValue(addStationValueList)">
            提交
          </el-button>
        </span>
      </template>
  </el-dialog>
  <!-- 岗位详情页面 -->
  <el-drawer v-model="isStationDetails" title="I am the title" :with-header="false">
    <span>{{ listValue[indexValue].title}}</span><br>
    <span>{{ listValue[indexValue].category}}</span><br>
    <span>{{ listValue[indexValue].typeName}}</span><br>
    <span>{{ listValue[indexValue].detail}}</span><br>
    <span>{{ listValue[indexValue].location}}</span>
  </el-drawer>
  <!-- 编辑岗位信息 -->
  <el-dialog v-model="disEditStation" title="添加岗位" width="30%" draggable>
      <el-form
        label-width="100px"
        :model="editStationList"
        style="max-width: 460px"
      >
        <el-form-item label="公司">
          <el-input v-model="editStationList.title" />
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="editStationList.category" />
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="editStationList.typeName" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="editStationList.detail" />
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="editStationList.location" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="disEditStation = false">取消</el-button>
          <el-button type="primary" @click="putEditStationValue(editStationList)">
            提交
          </el-button>
        </span>
      </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref ,reactive} from "vue";
import { useRoute } from "vue-router";
import cardStation from "../../components/cardStation.vue"
import {ElMessageBox} from "element-plus"
const router=useRoute();
const title = ref();
onMounted(() => {
  title.value = router.query.name;
  //渲染列表
  getStationValue()
});
const listValue = reactive([
  {
    title:'哔哩哔哩',
    category:'校招',
    typeName:'前端',
    detail:'学习永无止境',
    location:'北京'
  },
  {
    title:'哔哩哔哩',
    category:'校招',
    typeName:'前端',
    detail:'学习永无止境',
    location:'北京'
  },
  {
    title:'哔哩哔哩',
    category:'校招',
    typeName:'前端',
    detail:'学习永无止境',
    location:'北京'
  },
]);
//获取岗位信息
const getStationValue=()=>{
    //接收的参数是传递过来的公司名称
    //根据公司名称去搜索信息
    //将值传给listValue
}
//岗位列表
const addStationValueList=reactive({
    cid:'',
    title:'',
    category:'',
    typeName:'',
    detail:'',
    location:''
})
//岗位添加
const disAddStation=ref(false)
//添加职位
const addStationValue=()=>{
    disAddStation.value=true
}
const putAddStationValue=(value)=>{
    addStationValueList.cid=title.value
    console.log(value)
    //接口，添加数据
    //接口，重新渲染列表
    //将addstationvaluelist里面的数据清空

}
//刷新公司的岗位
const refreshStationValue=()=>{
    //里面需要的是公司的id
    ElMessageBox.confirm("刷新岗位, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then((result) => {
    //接口，将数据传递过来
  }).catch((err) => {
    
  });
}
//控制岗位详情显示与隐藏
const isStationDetails=ref(false)
const indexValue=ref()

//岗位详情信息
const detailsClick=(item,index)=>{
    indexValue.value=index
    console.log(item,index)
    isStationDetails.value=true
}
const disEditStation=ref(false)
//存放所要修改的数据
const editStationList=reactive({
    cid:'',
    title:'',
    category:'',
    typeName:'',
    detail:'',
    location:''
})
//编辑信息
const editClick=(item)=>{
    disEditStation.value=true
    editStationList.title=item.title
    editStationList.category=item.category
    editStationList.typeName=item.typeName
    editStationList.detail=item.detail
    editStationList.location=item.location
}
//提交编辑信息
const putEditStationValue=(editStationList)=>{
    console.log(editStationList)
    //将参数传给接口
    //重新加载页面
    //将数据清空
}
//删除功能
const deleteClick=(item)=>{
    //根据id进行删除
    ElMessageBox.confirm("刷新岗位, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then((result) => {
    //接口，根据传过来的id进行删除，删除成功之后刷新页面
  }).catch((err) => {
    
  });
}
</script>

<style>
</style>
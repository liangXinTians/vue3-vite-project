<template>
  <div>
    <el-button
      @click="addFirmValue"
      type="primary"
      round
      style="position: relative; top: 12px"
      >添加公司</el-button
    >
    <card
      :listValue="listValue"
      @cardClick="cardClick"
      @refreshClick="refreshClick"
      @editClick="editClickValue"
      @deleteClick="deleteClickValue"
      @detailsClick="detailsClick"
    ></card>
    <!-- 可拖曳对话框,修改公司数据 -->
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="Name">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmFirmValue(formLabelAlign)">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 添加公司 -->
    <el-dialog v-model="disAddFirm" title="Tips" width="30%" draggable>
      <el-form
        label-width="100px"
        :model="addFirmValueList"
        style="max-width: 460px"
      >
        <el-form-item label="Name">
          <el-input v-model="addFirmValueList.conmany" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input v-model="addFirmValueList.brief" />
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="addFirmValueList.picture" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="disAddFirm = false">取消</el-button>
          <el-button type="primary" @click="putAddValue(addFirmValueList)">
            提交
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 抽屉查看公司详情 -->
    <el-drawer v-model="isFirmDetails" title="I am the title" :with-header="false">
    <span>Hi there!</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import card from "../../components/card.vue";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const router=useRouter()
const listValue = reactive([
  {
    experimentId: 1,
    sectionId: 1,
    title: "实验一 基本运算实验",
    description:
      "<ul>\n\t<li>设计并完成一个完整的应用程序，完成加减乘除模等运算，功能多多益善。\n\t<ul>\n\t\t<li>基本四则运算</li>\n\t\t<li>取模运算</li>\n\t\t<li>求幂运算</li>\n\t\t<li>计算简单的三角函数</li>\n\t\t<li>求阶乘</li>\n\t\t<li>解一元二次方程</li>\n\t</ul>\n\t</li>\n\t<li>考核基本语法、判定语句、循环语句、逻辑运算等知识点</li>\n</ul>\n",
    result: "",
    score: 0,
    createTime: "2023-04-05T05:41:05.000+00:00",
    shortDate: "2023-04-05",
    formatDate: "2023-04-05 13:41:05",
  },
  {
    experimentId: 2,
    sectionId: 1,
    title: "实验二 两数之和",
    description:
      "<div>给你两个数a = 3, b = 2，请你计算它们的和，并输出。</div>\n",
    result: "5",
    score: 20,
    createTime: "2023-04-05T05:41:05.000+00:00",
    shortDate: "2023-04-05",
    formatDate: "2023-04-05 13:41:05",
  },
  {
    experimentId: 8,
    sectionId: 1,
    title: "实验三 列表排序",
    description:
      "<div>给你一个列表&nbsp;L, 对L进行<strong>升序</strong>排序并输出排序后的列表。</div>\n\n<div>例如：L = [8,2,50,3]</div>\n\n<div>则输出：[2,3,8,50]</div>\n",
    result: "",
    score: 23,
    createTime: "2023-04-05T05:41:05.000+00:00",
    shortDate: "2023-04-05",
    formatDate: "2023-04-05 13:41:05",
  },
  {
    experimentId: 9,
    sectionId: 1,
    title: "实验四 输出字典key",
    description:
      "<div>给你一字典a，如a={1:1,2:2,3:3}，输出字典a的key，以&#39;,&#39;连接，如&lsquo;1,2,3&#39;。</div>\n\n<div>要求key按照<strong>字典序升序排列</strong>(注意key可能是字符串）。</div>\n\n<div>例如：a={1:1,2:2,3:3}, 则输出：1,2,3</div>\n",
    result: null,
    score: 5,
    createTime: "2023-04-05T05:41:05.000+00:00",
    shortDate: "2023-04-05",
    formatDate: "2023-04-05 13:41:05",
  },
  {
    experimentId: 28,
    sectionId: 1,
    title: "实验五 最大公约数",
    description:
      "<p><strong>题目描述：</strong></p>\n\n<div>给你两个正整数a和b， 输出它们的最大公约数。</div>\n\n<div>例如：a = 3, b = 5</div>\n\n<div>则输出：1</div>\n\n<p><strong>示例：</strong></p>\n\n<div>输入：a = 3 b = 5</div>\n\n<div>输出：1</div>\n",
    result: "",
    score: 2,
    createTime: "2023-04-06T20:11:06.000+00:00",
    shortDate: "2023-04-07",
    formatDate: "2023-04-07 04:11:06",
  },
  {
    experimentId: 29,
    sectionId: 1,
    title: "实验六 最小公倍数",
    description:
      "<p><strong>题目描述：</strong></p>\n\n<div>给你两个正整数a和b， 输出它们的最小公倍数。</div>\n\n<div>例如：a = 3, b = 5</div>\n\n<div>则输出：15</div>\n\n<p><strong>示例：</strong></p>\n\n<div>输入：a = 3 b = 5</div>\n\n<div>输出：15</div>\n",
    result: "",
    score: 3,
    createTime: "2023-04-06T20:13:43.000+00:00",
    shortDate: "2023-04-07",
    formatDate: "2023-04-07 04:13:43",
  },
  {
    experimentId: 31,
    sectionId: 1,
    title: "实验七 成绩分级",
    description:
      "<p><strong>题目：</strong>利用条件运算符的嵌套来完成此题：学习成绩&gt;=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。</p>\n\n<p><strong>程序分析：</strong>程序分析：(a&gt;b) ? a:b&nbsp;这是条件运算符的基本例子。</p>\n",
    result: "",
    score: 10,
    createTime: "2023-04-07T06:13:00.000+00:00",
    shortDate: "2023-04-07",
    formatDate: "2023-04-07 14:13:00",
  },
]);
//刷新功能
const refreshClick = (item) => {
  console.log("manage", item);
  ElMessageBox.confirm("刷新公司, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then((result) => {
      console.log(1);
    })
    .catch((err) => {
      console.log(2);
    });
};
//修改框里面的内容
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
// 可拖曳对话框显示与隐藏
const dialogVisible = ref(false);
const editClickValue = (item, index) => {
  dialogVisible.value = true;
  console.log(item, index);
  formLabelAlign.name = listValue[index].title;
};
//提交公司数据
const confirmFirmValue = (confirmFirmValue) => {
  //将数据赋值
  //接口
};
//删除数据
const deleteClickValue = (item) => {
  ElMessageBox.confirm("删除公司, 是否继续?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then((result) => {
      console.log(1);
    })
    .catch((err) => {
      console.log(2);
    });
};

//添加公司
const addFirmValueList = reactive({
  conmany: "",
  brief: "",
  picture: "",
});
const disAddFirm = ref(false);
//添加公司
const addFirmValue = () => {
  disAddFirm.value = true;
};
const putAddValue = (addFirmValueList) => {
  console.log(addFirmValueList);
  //请求接口
};
//查看公司岗位
const cardClick = (item) => {
  router.push({name:'stationMain',query:{name:item.title}})
};
//公司详情控制
const isFirmDetails=ref(false);
//公司详情
const detailsClick = (item) => {
  isFirmDetails.value=true
};
</script>

<style lang="less" scoped>
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
  min-height: 136px;
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
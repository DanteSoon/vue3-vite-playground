<template>
  <div class="page-con">
    <div class="outer-con">
      <div class="grid-con">
        <div class="item" v-for="item, index in data.testList" :key="index">
          {{item.value}}
        </div>
      </div>
    </div>
    <div class="btn-area">
      <el-button @click="addItem">增加元素</el-button>
      <el-button @click="removeItem">减少元素</el-button>
      <div class="label-input">
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
          >行</span
        >
        <el-input v-model="data.rowNum"></el-input>
      </div>
      <div class="label-input">
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
          >列</span
        >
        <el-input v-model="data.colNum"></el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  reactive, onBeforeMount, onMounted,
} from 'vue'

const data = reactive({
  rowNum: 0,
  colNum: 0,
  testList: [{
    value: 1,
  }, {
    value: 2,
  }, {
    value: 3,
  }, {
    value: 4,
  }],
})

onBeforeMount(async() => {

})
onMounted(async() => {

})
const addItem = () => {
  data.testList.push({
    value: data.testList.length + 1,
  })
}
const removeItem = () => {
  data.testList.pop()
}
</script>

<style scoped lang='scss'>
.page-con {
  .outer-con {
    min-width: 400px;
    min-height: 400px;
    height: fit-content;
    background-color: #000000;
    .grid-con {
      width: 350px;
      height: 350px;
      display: grid;
      grid-template-rows: repeat(3, 100px);
      grid-template-columns: repeat(3, 100px);
      background-color: #555555;
      .item {
        background-color: red;
      }
    }
  }
  .btn-area {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    .btn {
      margin-right: 16px;
    }
  }
}
</style>

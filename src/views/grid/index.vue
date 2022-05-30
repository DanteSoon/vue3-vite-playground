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
      <el-button>增加元素</el-button>
      <el-button>减少元素</el-button>
    </div>
  </div>
</template>

<script setup>
import {
  reactive, onBeforeMount, onMounted,
} from 'vue'

const data = reactive({
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

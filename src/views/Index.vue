<template>
  <div class="main"><div class="text">111</div></div>
  <div>{{ data.storeData.count }}</div>
  <van-button square class="mybtn" type="primary" @click="changeCount"
    >点击</van-button
  >
  <van-button square class="mybtn" type="primary" @click="clickToGridBtn"
    >GRID DEMO</van-button
  >
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import {
  reactive, computed, onBeforeMount, onMounted, getCurrentInstance, inject,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getTest, postTest } from '@/apis/test/index'

// const route = useRoute()
const router = useRouter()

console.log(8888, import.meta.env.VITE_API_URL) // 获取.env文件里面的全局变量  全局变量必须以vite_开头
const store = useStore()
const data = reactive({ storeData: computed(() => store.state.testModule) }) // storeData为testModule的store的state
console.log(
  '%c 🍅 data: ',
  'font-size:20px;background-color: #4b4b4b;color:#fff;',
  data,
)
// *********一下两种方式获取挂载vue上的全局变量***********
const test = getCurrentInstance().appContext.config.globalProperties.$test // 获取上下文实例，ctx=vue2的this
console.log('%c 🍝 $test: ', 'font-size:20px;background-color: #F5CE50;color:#fff;', test)
const $test1 = inject('$test1')
console.log('%c 🥜 $test1: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', $test1)
// ***************************************************

onBeforeMount(async() => {
  console.log('2.组件挂载页面之前执行----onBeforeMount')
  const res = await getTest()
  console.log(
    '%c 🍵 res: ',
    'font-size:20px;background-color: #93C0A4;color:#fff;',
    res,
  )
})
onMounted(async() => {
  console.log('3.-组件挂载到页面之后执行-------onMounted')
  const res = await postTest()
  console.log(
    '%c 🌮 res: ',
    'font-size:20px;background-color: #ED9EC7;color:#fff;',
    res,
  )
})
const changeCount = () => {
  store.commit('testModule/increment') // 调用mutations
}
const clickToGridBtn = () => {
  router.push({ name: 'gridIndex' })
}
</script>
<style scoped lang='scss'>
.main {
  .text {
    color: red;
  }
}
</style>

<template>
  <div class="root-con1">第一个根元素 </div>
  <div class="root-con2">第二个根元素 多个根元素 便于代码组织结构化</div>
  <!-- <div class="main"><div class="text">111</div></div> -->
  <div>访问前端页面成功vue开始加载时间{{ moment(data.demoStoreData.appStartTimer).format('YYYY-MM-DD HH:mm:ss.SSS') }}</div>
  <div>页面首次渲染结束时间{{ moment(data.pageMountedTime).format('YYYY-MM-DD HH:mm:ss.SSS') }}</div>
  <div>开始载入vue项目到首次渲染结束总耗时{{ moment.duration(moment(data.pageMountedTime).valueOf()- moment(data.demoStoreData.appStartTimer).valueOf()).as('milliseconds') }}毫秒</div>
  <div>1000条数据重新渲染耗时{{ data.pageUpdateDuration }}毫秒</div>
  <van-button square class="mybtn" type="primary" size="small" @click="changeCount"
    >点击重渲染</van-button
  >
  <!-- <div>{{data.storeData.count}}</div> -->
  <div>
    <p v-for="item in data.forList" :key="item.id">
    {{ item.id }}/{{ item.name }}
    </p>
  </div>
</template>

<script setup>
import {
  reactive, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, getCurrentInstance, inject,
} from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { getTest, postTest } from '@/apis/test/index'

console.log(8888, import.meta.env.VITE_API_URL) // 获取.env文件里面的全局变量  全局变量必须以vite_开头
const store = useStore()
const data = reactive({
  storeData: computed(() => store.state.testModule),
  demoStoreData: computed(() => store.state.demoModule),
  pageMountedTime: null,
  pageBeforeUpdateTime: null,
  pageUpdatedTime: null,
  pageUpdateDuration: 0,
  forList: [],
  testList: [],
  testList2: [],
  calFlag: false,
}) // storeData为testModule的store的state
console.log(
  '%c 🍅 data: ',
  'font-size:20px;background-color: #4b4b4b;color:#fff;',
  data,
)
const { ctx } = getCurrentInstance()
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
  data.pageMountedTime = moment()
  console.log('3.-组件挂载到页面之后执行-------onMounted')
  const res = await postTest()
  console.log(
    '%c 🌮 res: ',
    'font-size:20px;background-color: #ED9EC7;color:#fff;',
    res,
  )
  const tmpList = []
  const tmpList2 = []
  for (let index = 0; index < 1000; index++) {
    tmpList.push({
      id: index + 1000,
      name: `${index}啦`,
    })
    tmpList2.push({
      id: index + 2000,
      name: `${index}啦啦`,
    })
  }
  data.testList = tmpList
  data.testList2 = tmpList2
  data.forList = data.testList
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
  if (data.calFlag) {
    data.pageBeforeUpdateTime = moment()
  }
})
onUpdated(() => {
  console.log('onUpdated')
  if (data.calFlag) {
    data.pageUpdatedTime = moment()
    console.log('耗时', moment.duration(moment(data.pageUpdatedTime).valueOf() - moment(data.pageBeforeUpdateTime).valueOf()).as('milliseconds'))
    data.pageUpdateDuration = moment.duration(moment(data.pageUpdatedTime).valueOf() - moment(data.pageBeforeUpdateTime).valueOf()).as('milliseconds')
    data.calFlag = false
  }
  // ctx.$forceUpdate()
})
const changeCount = () => {
  // store.commit('testModule/increment') // 调用mutations
  console.log(data.forList == data.testList)
  if (data.forList == data.testList) {
    data.forList = data.testList2
  } else {
    data.forList = data.testList
  }
  data.calFlag = true
}
</script>
<style scoped lang='scss'>
.main {
  .text {
    color: red;
  }
}
</style>

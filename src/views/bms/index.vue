<!-- index.vue -->
<template>
  <div>
    <h1>BMS后台</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/bms-page`
     -->
    <micro-app name='bms' url='http://localhost:9529/' baseroute='/bms-page'></micro-app>
  </div>
</template>
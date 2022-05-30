import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import ViteComponents from 'vite-plugin-components'
// import { terser } from 'rollup-plugin-terser'
import { defineConfig, loadEnv } from 'vite'
// import viteImagemin from "vite-plugin-imagemin";
import { resolve } from 'path'
// 引入环境变量需要loadEnv
// const autoprefixer = require('autoprefixer')
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  const nodeEnv = loadEnv(mode, process.cwd()).VITE_NODE_ENV
  console.log(11111, nodeEnv)
  return defineConfig({
    plugins: [
      vue(),
      // 清除console.log
      // terser({
      //   compress: { drop_console: nodeEnv == 'production' },
      // }),
      // 图片压缩
      // viteImagemin({
      //   gifsicle: {
      //     optimizationLevel: 7,
      //     interlaced: false,
      //   },
      //   optipng: {
      //     optimizationLevel: 7,
      //   },
      //   webp: {
      //     quality: 75,
      //   },
      //   mozjpeg: {
      //     quality: 65,
      //   },
      //   pngquant: {
      //     quality: [0.65, 0.9],
      //     speed: 4,
      //   },
      //   svgo: {
      //     plugins: [
      //       {
      //         removeViewBox: false,
      //       },
      //       {
      //         removeEmptyAttrs: false,
      //       },
      //     ],
      //   },
      // }),
      // 按需引入组件
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`, // vant按需引入
          },
        ],
      }),
      ViteComponents(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    base: loadEnv(mode, process.cwd()).VITE_CDN_URL, // 访问公共资源的位置 相对服务器和nginx访问路径
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'), // 路径别名
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 导入时想要省略的扩展名列表
      },
    },
    build: {
      outDir: 'order', // 指定打包完目录名称（相对于 项目根目录)
      assetsDir: 'static', // 指定生成静态资源的存放路径（相对于 build.outDir）
      // minify: "terser", // 混淆器，terser构建后文件体积更小 默认为esbuild  esbuild打包更快
      terserOptions: {
        // 生产环境移除console.log
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        output: {
          // 解决打包时Some chunks are larger警告
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
    },
    // css: {
    //   postcss: {
    //     plugins: [
    //       autoprefixer(),
    //       require('postcss-px-to-viewport')({
    //         unitToConvert: 'px', // 要转换的（字符串）单位，默认为px
    //         viewportWidth: 375, // （数字） 视口的宽度
    //         unitPrecision: 3, // （数字）保留的小数位数
    //         propList: ['*'], // 使用通配符*启用所有属性
    //         viewportUnit: 'vw', // （字符串） 预期单位
    //         fontViewportUnit: 'vw', // （字符串） 字体预期单位
    //         selectorBlackList: [], // （数组）要忽略的选择器，保留为px 如果value是字符串，它将检查选择器是否包含字符串。 ['body'] 将匹配.body - class 如果value是regexp，它将检查选择器是否匹配regexp。[/^body$/] 将匹配body但不匹配.body
    //         minPixelValue: 1, // （数字）设置要替换的最小像素值
    //         mediaQuery: false, // （布尔值）允许在媒体查询中转换px
    //         replace: true, // 转换后是否添加备用单位
    //         // exclude: /(\/|\\)(node_modules)(\/|\\)/  // （数组或正则表达式）忽略某些文件，例如“ node_modules”
    //       }),
    //     ],
    //   },
    // },
    server: {
      host: '0.0.0.0', // 0.0.0.0是localhost和本地ip都可以启动
      port: 8081,
      proxy: {
        '/api': {
          target: 'https://rpdt-api.caizidao.com.cn/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    projectAxios: true,
    defineProps: true,
  },
  parser: 'vue-eslint-parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁用debugger
    'linebreak-style': 'off', // 忽略检测换行风格
    'vue/max-attributes-per-line': 'off', // 关闭强制 html 标签换行
    'eqeqeq': 'off',
    'arrow-body-style': 'off',
    'space-before-function-paren': [2, 'never'],
    'no-use-before-define': 'off', // 允许定义之前使用
    'func-names': 'off', // 允许使用匿名函数
    'no-shadow': ['error', { allow: ['state'] }], // 允许对其进行阴影处理
    'import/prefer-default-export': 'off', // 模块只输出一个变量时，是否需要添加default
    'no-plusplus': 'off', // 一元运算符
    'semi': [2, 'never'], // 行尾不要加分号
    'quote-props': 'off',
    'import/extensions': 'off', // 禁用后缀报错
    'import/no-unresolved': [ // 配置了 alias ，但是 eslint 报错“不能解析这个导出”
      2,
      {
        ignore: ['^@/'], // @ 是设置的路径别名
      },
    ],
    'no-param-reassign': [ // 修改入参报错
      'off',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
    'max-len': 'off', // 禁用一行超出长度报错
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      peerDependencies: true,
      // optionalDependencies: true,
      // bundledDependencies: true
    }],
    'global-require': 'off',
    'consistent-return': 'off',
    'no-else-return': 'off',
  },
}

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'react',
    '@typescript-eslint', // 定义了该eslint文件所依赖的插件
    'react-hooks'
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    'no-shadow': 'error', // 禁止变量声明与外层作用域的变量同名
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'ignore',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore'
      }
    ], // 要求或禁止末尾逗号
    'no-trailing-spaces': 'off',
    'template-curly-spacing': 'off',
    'object-curly-spacing': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    'no-unused-vars': [2, { args: 'none' }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
  }
};

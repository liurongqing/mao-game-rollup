# TODO

https://github.com/photonstorm/phaser3-typescript-project-template

amumu（阿木木）（缩写 mm）

基于 rollup.js Typescript 开发


# 超休闲游戏开发模板

用心开发精品游戏

- 快速开发
- 可适配手机端、iPad 端、PC 端
- 性能流畅度极佳

这个库为游戏基础模板

---

## 项目简介

本项目使用 `Typescript` + `Webpack` 构建，支持自定义 Phaser 库至 `public/phaser.js` 中，能够快速编译用户代码。

## 快速开始

```bash
yarn install # 安装依赖
yarn start # 本地运行
yarn prod # 打包生产
yarn phaser # 重新编译 phaser
```

## 项目结构

```javascript
build // 构建工具， webpack 配置文件
public // 不参与编译的文件，可以放些静态文件
src // 源码
  const // 常量
  scenes // 场景
  utils // 公用方法
  services // 后端服务
types // .d.ts 文件
.babelrc // babel 配置文件
.editorconfig // VSCode 安装 EditorConfig for VS Code 配合使用
.prettierrc // VSCode 安装 Prettier - Code formatter 配合使用
tsconfig.json // 为了让 VSCode 识别 Typescript 语法
```

## 自定义 phaser 库

1. 更改 `build/phaser.full.js` 文件

   > 根据需要模块进行删减

1. 运行自动生成 `phaser.js` 至 `public` 目录下

   ```bash
   yarn phaser
   ```

## 打包生产测试

使用 [http-server](https://github.com/http-party/http-server#readme) 测试

1. 全局安装 `http-server`

   ```bash
   yarn global add -D http-server
   ```

1. 启动服务

   ```bash
   http-server ./dist
   ```

1. 访问

   ```bash
   http://127.0.0.1:8080
   ```


## 其他常用操作

1. 更新所有 npm 包

    ```bash
    yarn upgrade-interactive --lastest # 空格: 选择  i: 反选  a: 全选 会更新 yarn.lock 文件，不会更新package.json文件
    yarn upgrade phaser@lastest # 更新到最新，并更新 package.json 文件
    ```

## 问题反馈

若您有任何问题或建议，请不吝与我联系。

- 微信: 16620882081

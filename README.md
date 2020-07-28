## 项目简介

本项目使用 `Typescript` + `rollup` 构建的超休闲游戏开发模板

用心开发精品游戏

- 快速开发
- 可适配手机端、iPad 端、PC 端
- 性能流畅度极佳

---

## 快速开始

```bash
yarn # 安装依赖
yarn start # 本地运行
yarn build # 打包生产
```

## 项目结构

```typescript
src // 源码
  const // 常量
  scenes // 场景
  utils // 公用方法
  services // 后端服务
dist // 编译后文件、首页、静态资源
  index.html // 首页
  assets // 静态资源
.editorconfig // VSCode 安装 EditorConfig for VS Code 配合使用
rollup.dev.js // 开发配置
rollup.dist.js // 生产配置
tsconfig.json // 为了让 VSCode 识别 Typescript 语法
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
   http://127.0.0.1:10001
   ```
## 小知识点

1. 更新 npm 包

    ```bash
    yarn upgrade-interactive --lastest # 空格: 选择  i: 反选  a: 全选 会更新 yarn.lock 文件，不会更新package.json文件
    yarn upgrade phaser@lastest # 更新到最新，并更新 package.json 文件
    ```

## 问题反馈

若您有任何问题或建议，请不吝与我联系。

- 微信: 16620882081

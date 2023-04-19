# Vue3-Vite-ElementPlus

## 分支说明
```bash
开发分支简要:
    DEV分支: 开发环境分支
    TEST分支: 测试环境分支
    UAT分支: 联调环境分支
    PRE分支: 预发布环境分支
    MASTER分支: 生产环境分支

代码合并路线是: DEV->TEST->UAT->PRE->MASTER 然后根据不同的分支判断执行不同环境的部署。
```


## vue3
- [x] Vue3
```bash
官方文档: https://cn.vuejs.org/
```
- [x] Vite构建工具
```bash
官方文档: https://cn.vitejs.dev/guide/
安装步骤:
npm config get registry
npm config set registry=https://registry.npm.taobao.org/
npm create vite@latest

创建项目:
npm create vite@latest shop-admin -- --template vue
cd shop-admin
npm install
npm run dev

目录结构
shop-admin/
|-- README.md
|-- index.html
|-- node_modules
|-- package-lock.json
|-- package.json
|-- public
|   `-- vite.svg
|-- src
|   |-- App.vue
|   |-- assets
|   |-- components
|   |-- main.js
|   `-- style.css
`-- vite.config.js
```
- [x] Vuex
- [x] Vue-router 路由管理
- [x] Windicss框架
- [x] ElementPlus组件库
- [x] VueUse 工具库
- [x] Axios
- [x] Vscode
```bash
插件:
Chinese (Simplified)
Vue Language Features (Volar)
Vue 3 Snippets
```



## git操作
```bash
git clone https://github.com/hu417/Vue3-Vite-ElementPlus.git

// 初始化
git init
git config --global user.name "***"
git config --global user.email ****@qq.com

// 处理换行符
git config --global core.autocrlf true

// ssl认证关闭
git config --global http.sslVerify "false"
git config --global credential.helper manager

// 切换分支
git branch -M main
git remote add origin https://github.com/hu417/Vue3-Vite-ElementPlus.git

// 提交项目
echo "# Vue3-Vite-ElementPlus" >> README.md
git add .
git commit -m "fix: Vue3-Vite-ElementPlus项目
1、初始化
" 
git tag -a v0.1 -m "版本v0.1"
git push -u origin main --tags
git status
git log

// 分支操作 
git checkout -b dev   # 新建分支并切换
git branch            # 查看当前分支
git branch -a         # 查看远程分支
git push --set-upstream origin dev # 建立本地分支和远程分支的关联（创建远程分支）
git add .
git commit -m "fix: Vue3-Vite-ElementPlus项目
1、项目初始化
" 
git tag -a v0.4 -m "版本v0.4"

git checkout main     # 切换到main分支
git merge dev         # 合并 dev 到 mian 分支

git push --tags
git status
git log


// 其他操作
git tag -d v0.3                 # 删除本地tag
git push --delete origin v0.3   # 删除远程tag
```
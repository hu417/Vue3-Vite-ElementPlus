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
快速上手: https://cn.vuejs.org/guide/quick-start.html
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
```bash
官方文档: https://router.vuejs.org/zh/introduction.html

安装:
npm install vue-router@4
```
- [x] Windicss框架
```bash
官方文档: https://cn.windicss.org/guide/

安装:
npm i -D vite-plugin-windicss windicss
vite集成:
    https://cn.windicss.org/integrations/vite.html
```
- [x] ElementPlus组件库
```bash
官方文档: https://element-plus.gitee.io/zh-CN/guide/design.html
组件文档: https://element-plus.gitee.io/zh-CN/component/button.html

安装: 
npm install element-plus --save


icon图标:
npm install @element-plus/icons-vue
```
- [x] VueUse 工具库
- [x] Axios
- [x] Vscode
```bash
插件:
Chinese (Simplified)
Vue Language Features (Volar)
Vue 3 Snippets
WindiCSS IntelliSense
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
1、vue3基础-setup()语法糖+响应式基础(组合式api)
" 
git tag -a v0.10 -m "版本v0.10"
git push --tags
git status
git log


// 根据tag创建分支
git origin fetch                        # 获得最新

# git branch <new-branch-name> <tag-name> # 会根据tag创建新的分支
git branch newbranch v1.0 . 会以tag v1.0创建新的分支newbranch。

git checkout newbranch                  # 切换到新的分支。
git push origin newbranch               # 把本地创建的分支提交到远程仓库


// 其他操作
git tag -d v0.3                 # 删除本地tag
git push --delete origin v0.3   # 删除远程tag
git checkout main               # 切换到main分支
git merge dev                   # 合并 dev 到 mian 分支
git reset HEAD                  # 撤销已经add，但是没有commit
git reset --soft HEAD^          # 撤销已经commit，但是没有push到远端的文件（仅撤销commit 保留add操作）
git reset --hard commit_id      # 回退到指定的commit id
# 撤销已经push到远端的文件
// 切换到指定分支
git checkout 分支名
// 撤回到需要的版本
git reset --soft 需要回退到的版本号
//提交撤销动作到服务器，强制提交当前版本号
git push origin 分支名 --force


// .gitignore文件
node_modules/
dist/

```
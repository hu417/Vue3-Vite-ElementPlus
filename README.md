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
git checkout -b dev
git branch
git add .
git commit -m "fix: Vue3-Vite-ElementPlus项目
1、新建dev分支
" 
git tag -a v0.2 -m "版本v0.2"
git push --tags
git status
git log

```

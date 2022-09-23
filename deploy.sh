#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 打包
npm run build

# 移動至到打包後的dist目錄 
cd dist

# 因為 dist 資料夾預設是被 ignore 的，因此在進入 dist 資料夾後初始化 git
git init
git add -A
git commit -m 'deploy'

# 部署到 https://github.com/[user-name]/[project-name].git 分支為 gh-pages
git push -f https://github.com/HsiaooooooJu/AlphaShop_VUE.git master:gh-pages

# 將 dist 資料夾中的內容推送至遠端[project-name]的 gh-pages 分支中，並強制無條件將舊有的內容取代成目前的內容 (指令 git push-f)
cd -
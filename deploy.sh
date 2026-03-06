#!/bin/bash

# 构建项目
echo "Building project..."
npm run build

# 进入dist目录
cd dist

# 清理git仓库（如果存在）
if [ -d ".git" ]; then
  echo "Cleaning existing git repository..."
  rm -rf .git
fi

# 初始化新的git仓库
echo "Initializing git repository..."
git init
git remote add origin https://github.com/zzz-zbb/gitck.git

# 添加所有文件
echo "Adding files..."
git add .

# 提交更改
echo "Committing changes..."
git commit -m "Deploy to gh-pages"

# 推送到gh-pages分支
echo "Pushing to gh-pages branch..."
git push origin main:gh-pages -f

# 回到项目根目录
cd ..

echo "Deployment completed successfully!"

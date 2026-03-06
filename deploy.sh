#!/bin/bash

# 清理dist目录
echo "Cleaning dist directory..."
rm -rf dist

# 构建项目
echo "Building project..."
npm run build

# 进入dist目录
cd dist

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

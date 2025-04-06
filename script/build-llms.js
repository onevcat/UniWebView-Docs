const fs = require('fs');
const path = require('path');

// 定义文件路径
const docsDir = path.join(__dirname, '../docs');
const guideDir = path.join(docsDir, 'guide');
const apiDefDir = path.join(__dirname, '../api-def');
const outputFile = path.join(docsDir, '.vuepress/public/llms.txt');

const publicGuideDir = path.join(docsDir, '.vuepress/public/guide');
const publicApiDir = path.join(docsDir, '.vuepress/public/api');

// 遍历目录获取所有 md 文件
function getMarkdownFiles(directory) {
  try {
    const files = fs.readdirSync(directory);
    return files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`读取目录出错: ${error}`);
    return [];
  }
}

// 从 md 文件中提取第一个一级标题
function extractFirstH1(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // 匹配以 # 开头的一级标题
    const match = content.match(/^# (.*)$/m);
    return match ? match[1].trim() : path.basename(filePath, '.md');
  } catch (error) {
    console.error(`读取文件 ${filePath} 出错: ${error}`);
    return path.basename(filePath, '.md');
  }
}

// 从 md 文件中提取第一个引用块
function extractFirstQuote(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^>\s*(.*)$/m);
    return match ? match[1].trim() : '';
  } catch (error) {
    console.error(`读取文件 ${filePath} 出错: ${error}`);
    return '';
  }
}

// 从 toml 文件中提取标题
function extractTitleFromToml(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^title\s*=\s*"([^"]*)"$/m);
    return match ? match[1].trim() : path.basename(filePath, '.toml');
  } catch (error) {
    console.error(`读取 TOML 文件 ${filePath} 出错: ${error}`);
    return path.basename(filePath, '.toml');
  }
}

// 复制文件夹内容
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    fs.copyFileSync(srcPath, destPath);
  });
}

// 主函数
function main() {
  console.log('开始处理文件...');
  
  // 处理 Guide 部分
  const mdFiles = getMarkdownFiles(guideDir);
  let guideContent = '';
  mdFiles.forEach(file => {
    const filePath = path.join(guideDir, file);
    const title = extractFirstH1(filePath);
    const overview = extractFirstQuote(filePath);
    const fileName = path.basename(file, '.md');
    guideContent += `- [${title}](https://docs.uniwebview.com/guide/${fileName}.md)${overview ? ': ' + overview : ''}\n`;
  });
  
  // 处理 API Reference 部分
  const apiFiles = fs.readdirSync(apiDefDir).filter(file => file.endsWith('.toml'));
  let apiContent = '';
  apiFiles.forEach(file => {
    const filePath = path.join(apiDefDir, file);
    const title = extractTitleFromToml(filePath);
    const fileName = path.basename(file, '.toml');
    apiContent += `- [${title}](https://docs.uniwebview.com/api/${fileName}.toml)\n`;
  });
  
  // 生成完整输出内容
  const output = `# UniWebView

> UniWebView is a Unity plugin for iOS and Android, enabling web view integration with features like OAuth 2.0, JavaScript support, and cross-platform compatibility.

## Guide

${guideContent}
## API Reference

${apiContent}`;

  // 复制文件到 public 目录
  copyDirectory(guideDir, publicGuideDir);
  copyDirectory(apiDefDir, publicApiDir);
  
  // 写入输出文件
  try {
    fs.writeFileSync(outputFile, output);
    console.log(`成功写入到 ${outputFile}`);
    console.log('文件复制完成');
  } catch (error) {
    console.error(`写入文件出错: ${error}`);
  }
}

// 执行主函数
main();
const fs = require('fs');
const path = require('path');

// Define file paths
const docsDir = path.join(__dirname, '../docs');
const guideDir = path.join(docsDir, 'guide');
const apiDefDir = path.join(__dirname, '../api-def');
const outputFile = path.join(docsDir, '.vuepress/public/llms.txt');        // Summary version output file
const fullOutputFile = path.join(docsDir, '.vuepress/public/llms-full.txt'); // Full content output file

// Public directories for file copying
const publicGuideDir = path.join(docsDir, '.vuepress/public/guide');
const publicApiDir = path.join(docsDir, '.vuepress/public/api');

/**
 * File operation utility functions
 */

// Get all markdown files from a directory
function getMarkdownFiles(directory) {
  try {
    const files = fs.readdirSync(directory);
    return files.filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return [];
  }
}

// Read file content
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
    return '';
  }
}

// Copy directory contents to target directory
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

/**
 * Content extraction functions
 */

// Extract first H1 heading from markdown file
function extractFirstH1(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^# (.*)$/m);
    return match ? match[1].trim() : path.basename(filePath, '.md');
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
    return path.basename(filePath, '.md');
  }
}

// Extract first quote block from markdown file as overview
function extractFirstQuote(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^>\s*(.*)$/m);
    return match ? match[1].trim() : '';
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error}`);
    return '';
  }
}

// Extract title from TOML file
function extractTitleFromToml(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^title\s*=\s*"([^"]*)"$/m);
    return match ? match[1].trim() : path.basename(filePath, '.toml');
  } catch (error) {
    console.error(`Error reading TOML file ${filePath}: ${error}`);
    return path.basename(filePath, '.toml');
  }
}

/**
 * Content processing functions
 */

// Process TOML file content into formatted plain text
function processTomlContent(content) {
  let processedContent = content
    .replace(/^(\w+)\s*=\s*"""/gm, '$1:\n')
    .replace(/^"""/gm, '')
    .replace(/^title\s*=\s*"([^"]*)"/m, '# $1')
    .replace(/^description\s*=\s*"([^"]*)"/m, '$1\n')
    .replace(/^(\w+)\s*=\s*"([^"]*)"/gm, '$1: $2')
    .replace(/^(\w+)\s*=\s*(true|false)/gm, '$1: $2')
    .replace(/^(\w+)\s*=\s*(\d+)/gm, '$1: $2')
    .replace(/^\[([^\]]+)\]$/gm, '\n### $1\n')
    .replace(/\n{3,}/g, '\n\n');

  return processedContent.trim();
}

/**
 * File generation functions
 */

// Generate summary version llms.txt
function generateSummaryContent(mdFiles, apiFiles) {
  console.log('Generating summary version llms.txt...');
  
  // Process Guide section
  let guideContent = '';
  mdFiles.forEach(file => {
    const filePath = path.join(guideDir, file);
    const title = extractFirstH1(filePath);
    const overview = extractFirstQuote(filePath);
    const fileName = path.basename(file, '.md');
    guideContent += `- [${title}](https://docs.uniwebview.com/guide/${fileName}.md)${overview ? ': ' + overview : ''}\n`;
  });
  
  // Process API Reference section
  let apiContent = '';
  apiFiles.forEach(file => {
    const filePath = path.join(apiDefDir, file);
    const title = extractTitleFromToml(filePath);
    const fileName = path.basename(file, '.toml');
    apiContent += `- [${title}](https://docs.uniwebview.com/api/${fileName}.toml)\n`;
  });
  
  // Generate complete output content
  return `# UniWebView

> UniWebView is a Unity plugin for iOS and Android, enabling web view integration with features like OAuth 2.0, JavaScript support, and cross-platform compatibility.

## Guide

${guideContent}
## API Reference

${apiContent}`;
}

// Generate full content version llms-full.txt
function generateFullContent(mdFiles, apiFiles) {
  console.log('Generating full content version llms-full.txt...');
  
  let fullContent = `# UniWebView Complete Content\n\n`;
  
  // Merge all Guide md files
  fullContent += `## Guide Documentation\n\n`;
  mdFiles.forEach(file => {
    const filePath = path.join(guideDir, file);
    const title = extractFirstH1(filePath);
    fullContent += `### ${title}\n\n`;
    fullContent += readFileContent(filePath);
    fullContent += '\n\n---\n\n';
  });
  
  // Merge all API toml files
  fullContent += `## API Reference\n\n`;
  apiFiles.forEach(file => {
    const filePath = path.join(apiDefDir, file);
    const title = extractTitleFromToml(filePath);
    fullContent += `### ${title}\n\n`;
    const tomlContent = readFileContent(filePath);
    fullContent += processTomlContent(tomlContent);
    fullContent += '\n\n---\n\n';
  });
  
  return fullContent;
}

// Copy original files to public directory
function copyFilesToPublic() {
  console.log('Copying files to public directory...');
  copyDirectory(guideDir, publicGuideDir);
  copyDirectory(apiDefDir, publicApiDir);
  console.log('File copying completed');
}

// Main function
function main() {
  console.log('Starting file processing...');
  
  // Get all files to process
  console.log(`Reading ${guideDir} directory...`);
  const mdFiles = getMarkdownFiles(guideDir);
  if (mdFiles.length === 0) {
    console.error('No Markdown files found in guide directory');
    return;
  }
  
  console.log(`Reading ${apiDefDir} directory...`);
  const apiFiles = fs.readdirSync(apiDefDir).filter(file => file.endsWith('.toml'));
  if (apiFiles.length === 0) {
    console.error('No TOML files found in api-def directory');
    return;
  }
  
  // Generate summary version content
  const summaryContent = generateSummaryContent(mdFiles, apiFiles);
  
  // Generate full version content
  const fullContent = generateFullContent(mdFiles, apiFiles);
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write output files
  try {
    fs.writeFileSync(outputFile, summaryContent);
    console.log(`Successfully wrote summary content to ${outputFile}`);
    
    fs.writeFileSync(fullOutputFile, fullContent);
    console.log(`Successfully wrote full content to ${fullOutputFile}`);
  } catch (error) {
    console.error(`Error writing files: ${error}`);
    return;
  }
  
  // Copy original files to public directory
  copyFilesToPublic();
  
  console.log('All processing completed!');
}

// Execute main function
main();
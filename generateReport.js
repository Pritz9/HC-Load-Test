const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

// Define reports directory and output file path
const reportsDir = path.join(__dirname, 'reports');
const outputFilePath = path.join(reportsDir, 'k6_report.html');

// Ensure 'reports' directory exists
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

// Check if 'k6_report.html' exists and is a directory — remove it if so
if (fs.existsSync(outputFilePath)) {
  const stat = fs.statSync(outputFilePath);
  if (stat.isDirectory()) {
    console.warn(`Warning: ${outputFilePath} is a directory. Removing it...`);
    fs.rmSync(outputFilePath, { recursive: true, force: true });
  }
}

const options = {
  jsonFile: 'result.json',
  output: outputFilePath,
};

reporter.generateSummaryReport(options);

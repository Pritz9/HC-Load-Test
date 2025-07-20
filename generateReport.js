const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

// Ensure 'reports' directory exists
const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

// Define full path to HTML file explicitly
const outputFilePath = path.join(reportsDir, 'k6_report.html');

// If a folder with that name exists from previous runs, remove it
if (fs.existsSync(outputFilePath) && fs.lstatSync(outputFilePath).isDirectory()) {
  fs.rmdirSync(outputFilePath, { recursive: true });
}

const options = {
  jsonFile: 'result.json',
  output: outputFilePath,
};

reporter.generateSummaryReport(options);

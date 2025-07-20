const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

// Ensure 'reports' directory exists
const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Define full file path for output
const outputFilePath = path.join(reportsDir, 'k6_report.html');

// Remove existing path if it exists (file or directory)
if (fs.existsSync(outputFilePath)) {
  fs.rmSync(outputFilePath, { recursive: true, force: true });
}

const options = {
  jsonFile: 'result.json',
  output: outputFilePath,
};

reporter.generateSummaryReport(options);
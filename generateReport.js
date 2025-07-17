const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

// Ensure 'reports' directory exists
const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

const options = {
  jsonFile: 'result.json',
  output: path.join(reportsDir, 'k6_report.html'),
};

reporter.generateSummaryReport(options);

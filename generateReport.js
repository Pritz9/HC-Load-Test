const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

const outputDir = path.join(reportsDir, 'k6_report'); 

const options = {
  jsonFile: 'result.json',
  output: outputDir, 
};

reporter.generateSummaryReport(options);

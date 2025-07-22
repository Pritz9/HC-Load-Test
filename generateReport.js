const path = require('path');
const fs = require('fs');
const reporter = require('k6-html-reporter'); 

const resultPath = path.join(process.cwd(), 'result.json'); 

const outputDir = path.join(process.cwd(), 'reports', 'k6_report'); 
const outputFile = path.join(outputDir, 'index.html');

// Ensure directory exists
fs.mkdirSync(outputDir, { recursive: true });

const options = {
  jsonFile: resultPath,
  output: outputFile,
};

reporter.generateSummaryReport(options);
console.log(`Report is created at ${outputFile}`);

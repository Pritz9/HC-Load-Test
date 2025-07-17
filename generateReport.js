// generateReport.js
const fs = require('fs');
const path = require('path');
const reporter = require('k6-html-reporter');

const options = {
  jsonFile: 'result.json', // Your k6 summary output
  output: path.join('reports', 'k6_report.html'), // Desired HTML output
};

reporter.generateSummaryReport(options);

const fs = require("fs");
const { Parser } = require("json2csv");

function exportToCSV(data, filename) {
  try {
    const json2csvParser = new Parser({ header: true });
    const csv = json2csvParser.parse(data);
    fs.writeFileSync(filename, csv);
    console.log("CSV file created:", filename);
    return true;
  } catch (error) {
    console.error("Failed to create CSV file:", error);
    return false;
  }
}

module.exports = exportToCSV;

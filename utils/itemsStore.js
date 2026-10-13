const { write } = require("node:fs");
const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "..", "data", "items.json");

function readItemsFromFile() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeItemsToFile(items) {
  const data = JSON.stringify(items, null, 2);
  fs.writeFileSync(filePath, data, "utf-8");
}

module.exports = {
  readItemsFromFile,
  writeItemsToFile,
};

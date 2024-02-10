const { globSync } = require('glob');
const path = require('path');
const fs = require('fs');

// extract folder name from arguments
const folder = process.argv[2];

if (!folder) {
  console.log('Please provide folder name');
  process.exit(1);
}

console.log(`Combining ${folder}...`);
const dir = path.join(__dirname, folder);
const files = globSync(path.join(dir, '*.json'))
  .sort()
  .filter(file => {
    // filter out all.json
    return path.basename(file) !== 'all.json';
  });

console.log(`Found ${files.length} files`);

const all = {
  collections: [],
  fields: [],
  relations: [],
}

for (const file of files) {
  console.log(`Reading ${file}`);
  const data = require(file);

  all.collections.push(...data.collections);
  all.fields.push(...data.fields);
  all.relations.push(...data.relations);
}

// write all.json
fs.writeFileSync(
  path.join(dir, 'all.json'),
  JSON.stringify(all, null, 2),
);

/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const { generateRollupConfig } = require('@mozu/rollup-config');

module.exports = generateRollupConfig({
  packageDir: __dirname,
});

const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}
    `;

module.exports = {
  "**/*.(ts|tsx)": () => ['yarn codegen', "yarn tsc --noEmit"],
  "**/*.(ts|tsx|js)": buildEslintCommand,
};

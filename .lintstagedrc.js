const buildEslintCommand = (filenames) => `eslint --fix ${filenames.join(" ")}`;

module.exports = {
  "**/*.(ts|tsx)": () => ["npm run codegen", "npm run tscheck"],
  "**/*.(ts|tsx|js)": buildEslintCommand,
};

let common = [
  "tests/unit-tests/features/**/*.feature",
  "--require-module ts-node/register",
  "--require tests/unit-tests/step-definitions/**/*.ts",
  "--format progress-bar",
  "--format node_modules/cucumber-pretty"
].join(" ");

module.exports = {
  default: common
};

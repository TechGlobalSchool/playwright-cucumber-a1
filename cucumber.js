const { DEFAULT_THEME } = require('@cucumber/pretty-formatter')

module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    // parallel: 2,
    formatOptions: {
      snippetInterface: "async-await",
      theme: {
        ...DEFAULT_THEME
      },
      colorsEnabled: true
    },

    format: [
      "progress-bar", 
      ["html", "reports/cucumber-report.html"],
      '@cucumber/pretty-formatter'
    ],

    require: ["step-definitions/**/*.js", "setup/*.js"],
  },
};

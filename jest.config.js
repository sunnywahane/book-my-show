const { configure } = require('@medly/jest-config-react');

process.env.TZ = "UTC";

module.exports = configure(
{
  "rootDir": "./",
  "testResultsProcessor": "jest-sonar-reporter",
  "collectCoverageFrom": [
    "!<rootDir>/**/Routes.tsx"
  ]
}
);
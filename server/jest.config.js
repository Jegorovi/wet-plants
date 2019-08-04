module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/node_modules/**",
    "!src/config/*.ts",
    "!build/**/*"
  ],
  coverageReporters: ["text"],
  reporters: ["default"],
  moduleDirectories: [
    "src",
    "types",
    "node_modules"
  ],
  moduleNameMapper: {
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@errors": "<rootDir>/src/errors",
    "@controllers": "<rootDir>/src/controllers",
  },
  globals: {
    "ts-jest": {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
        ignoreCodes: [6133]
      }
    }
  },
  verbose: true,
  roots: ["src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "node"]
};

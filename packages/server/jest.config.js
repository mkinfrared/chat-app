module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTest.ts"],
  moduleNameMapper: {
    "@controllers/(.*)": "<rootDir>/src/controllers/$1",
    "@db/(.*)": "<rootDir>/src/db/$1",
    "@emails/(.*)": "<rootDir>/src/emails/$1",
    "@messages/(.*)": "<rootDir>/src/messages/$1",
    "@middleware/(.*)": "<rootDir>/src/middleware/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@sockets/(.*)": "<rootDir>/src/sockets/$1",
    "@test/(.*)": "<rootDir>/src/test/$1",
    "@type/(.*)": "<rootDir>/src/type/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1"
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/*.test.(ts)"],
  testEnvironment: "node",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};

import { Config } from "jest"; // need ts-node to read ts config

const config: Config = {
  preset: "ts-jest", // jest only work on javascript
  testEnvironment: "jsdom", // fake browser environtment
  testMatch: ["**/?(*.)+(spec|test).{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/src/test/jest.setup.ts"],
};

export default config;

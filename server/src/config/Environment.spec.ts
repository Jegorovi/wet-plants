import { getConfig } from "./Environment";
import Development from "./env/Development";
import Production from "./env/Production";
import Staging from "./env/Staging";

type Values =
  | typeof Development
  | typeof Production
  | typeof Staging
;

const config: Record<NODE_ENVIRONMENTS, Values> = {
  "development": Development,
  "production": Production,
  "test": Staging,
};

describe("Environment", () => {
  Object.keys(config).forEach((key) => {
    it(`should create ${key} environment`, () => {
      expect(getConfig(key as NODE_ENVIRONMENTS)).toEqual(config[key]);
    });
  });
});

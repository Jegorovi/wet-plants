import Development from "@config/env/Development";
import Production from "@config/env/Production";
import Staging from "@config/env/Staging";

export function getConfig(env: NODE_ENVIRONMENTS) {
  switch (env) {
    case "development":
      return Development;
    case "production":
      return Production;
    case "test":
      return Staging;
    default:
      return Development;
  }
}

export const ENVIRONMENT = getConfig(process.env.NODE_ENV);

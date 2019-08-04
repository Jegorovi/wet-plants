import { ConfigType } from "../../types";

function getConfig(): ConfigType {
  return {
    env: "development",
  };
}

// tslint:disable-next-line:no-default-export
export default getConfig();

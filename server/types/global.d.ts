declare type NODE_ENVIRONMENTS = "development" | "production" | "test";

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: NODE_ENVIRONMENTS;
    SERIAL_PORT: string;
  }
}

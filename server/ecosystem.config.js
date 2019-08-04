module.exports = {
  apps: [
    {
      name: 'server',
      script: 'src/index.ts',
      node_args: "-r tsconfig-paths/register",
      interpreter: `${__dirname}/node_modules/.bin/ts-node`,
      watch: ['src/**/*.ts'],
      ignore_watch: ['**/*.spec.ts'],
      env: {
        TS_NODE_FILES: true,
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      kill_timeout: 5000,
    },
  ],
};

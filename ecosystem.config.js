module.exports = {
  apps: [
    {
      name: 'billar-app',
      script: 'serve',
      args: '-s build',
      env: {
        REACT_APP_ENVIRONMENT: 'production',
        REACT_APP_BILLAR_API_URL: 'https://billar-api.pancheta-squad.com/api',
      },
    },
  ],
};

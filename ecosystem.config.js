module.exports = {
  apps: [
    {
      name: 'nextjs-deploy-nginx',
      script: 'npm',
      args: 'start',
      instances: 4,
      autorestart: true,
      watch: false,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

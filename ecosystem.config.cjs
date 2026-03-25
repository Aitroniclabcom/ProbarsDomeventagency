module.exports = {
  apps: [
    {
      name: 'domeventagency',
      script: 'node_modules/.bin/next',
      args: 'start --port 3000',
      cwd: '/var/www/domeventagency',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}

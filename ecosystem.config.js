module.exports = {
  apps: [
    {
      name: 'Yachad',
      script: 'server.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        DEBUG_API: true
      },
      env_staging: {
        PORT: 3110,
        NODE_ENV: 'staging',
        DEBUG_API: false
      },
      env_production: {
        PORT: 3120,
        NODE_ENV: 'production',
        DEBUG_API: false
      }
    }
  ]
}

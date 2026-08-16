// PM2 process definition for the production Node (Nitro) server.
// Usage: pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "intigrity-factor-systems",
      script: ".output/server/index.mjs",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3020,
        HOST: process.env.HOST || "0.0.0.0",
        SITE_URL: process.env.SITE_URL || "",
      },
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,
      time: true,
    },
  ],
};

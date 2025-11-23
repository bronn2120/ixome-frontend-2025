module.exports = {
  apps: [{
    name: 'ixome-frontend',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    exec_mode: 'fork',  // Change to 'cluster' and instances: 'max' if scaling needed
    instances: 1
  }]
};

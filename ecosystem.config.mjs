export default {
  apps: [{
    name: 'ixome-frontend',
    script: './.output/server/index.mjs',
    exec_mode: 'fork',  // Change to 'cluster' and instances: 'max' if scaling needed
    instances: 1
  }]
};

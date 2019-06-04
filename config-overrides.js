module.exports = function override(config, env) {
  config.resolve = { alias: { type: 'type-component' } };
  return config;
}

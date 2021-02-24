const virtual = require('@rollup/plugin-virtual');
module.exports = (config, context) => {
  console.log(config);
  const plugins = config.plugins;
  return {
    ...config,
    plugins: [
      ...plugins,
      virtual({
        'rxjs/operators': `import rxjs from 'rxjs'; export default rxjs.operators;`,
      }),
    ],
  };
};

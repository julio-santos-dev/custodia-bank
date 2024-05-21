const { join } = require('path')

module.exports = {
  cssModules: false,
  experimental: {
    modern: true,
  },
  poweredByHeader: false,
  pwa: {
    disable: true,
  },
  // target: 'serverless',
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Make sure that Next.js can compile workspace files
    const newRule = {
      ...config.module.rules[0],
      exclude: null,
      include: [
        // join(__dirname, 'src'),
        join(__dirname, '..', '..', 'packages'),
      ],
      use: [defaultLoaders.babel],
    }

    delete newRule.exclude
    config.module.rules.push(newRule)

    // Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': join(__dirname, 'src'),
      'styled-components': require.resolve('styled-components'),
    }

    /*
    config.resolve.extensions = [...config.resolve.extensions]

    config.resolve.modules = [
      join(process.cwd()),
      join(__dirname, '..', '..', 'packages'),
      ...config.resolve.modules,
    ]
    config.resolve.modules.pop()
    */
    return config
  },
}

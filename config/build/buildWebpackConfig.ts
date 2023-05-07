import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { bulidPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

// eslint-disable-next-line max-len
export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    plugins: bulidPlugins(options)
  }
}

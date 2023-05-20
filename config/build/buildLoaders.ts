import type webpack from 'webpack'
import { buildBabelLoader } from "./loaders/buildBabelLoader"
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev}= options
  const svgLoader = {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor : true,
              }
            }
          ]
        }
      }
  }]
  }

  const codeBabelLoader = buildBabelLoader({...options, isTSX: false})
  const tsxCodeBabelLoader = buildBabelLoader({...options, isTSX: true})

  const cssLoader = buildCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    fileLoader, 
    svgLoader, 
    codeBabelLoader,
    tsxCodeBabelLoader, 
    // typescriptLoader,
    cssLoader]
}

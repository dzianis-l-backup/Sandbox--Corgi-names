import path from 'path'
import { fileURLToPath } from 'url'
import CopyPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
    node: {
        global: false,
    },

    resolve: {
        fallback: {
            fs: false,
        },
    },

    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].js',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        libraryExport: 'default',
        publicPath: '',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        node: '14',
                                    },
                                    modules: 'cjs',
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        // since *.json is not inlined by webpack even with loaders
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/*.json',
                    to: '[name][ext]',
                },
            ],
        }),
    ],
}

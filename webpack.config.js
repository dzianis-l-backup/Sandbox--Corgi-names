import path from 'path'
import { fileURLToPath } from 'url'

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
        library: {
            type: 'umd',
            name: 'corgi-names',
            export: 'default', // xyz.default = index.js module, removes the "default", direct assignment
        },
        publicPath: '',
        globalObject: 'this', // crucial for umd, assignments to context
    },

    externals: 'unique-random-array',

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
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
}

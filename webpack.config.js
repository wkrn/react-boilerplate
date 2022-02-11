const path = require('path');
const webpack = require('webpack');
const ExtractTextPluin = require('extract-text-webpack-plugin');
const { webpack } = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}


module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPluin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: { souceMap: true }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
                'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
                'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
                'process.env.MESSAGE_SENDER_ID': JSON.stringify(process.env.MESSAGE_SENDER_ID),
                'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
                'process.env.MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

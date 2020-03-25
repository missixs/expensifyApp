//entry point is app.js in src folder 
//where is output 
//webpack.js.org 
//we use a plugin to extract css files to a seprate file
//extract-text-webpack-plugin
const ExtractTetPlugin = require('extract-text-webpack-plugin');


const path = require('path');
module.exports = (env) => {
    const isProduction = env === 'mYproduction';
    const cssExtract = new ExtractTetPlugin('styles.css');//this is name of file 

    return {
        entry: './src/Section12/app.js',
        output: {
            path: path.join(__dirname, 'public'), //######################### ABSOULUTE PATH 
            filename: 'bundle.js'
        },

        module: { //see documentation 
            rules: [
                {
                    loader: 'babel-loader', //to pass options, you need to specify seperate configuration file for babel
                    test: /\.js$/,  //use loader only on files that meet this criteria, 
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    /*use:[ //to have multiple-loaders, style-loader handles inline loading 
                        'style-loader','css-loader','sass-loader'
                    ]*/
                    use: cssExtract.extract({
                        use: [
                            //'css-loader', 'sass-loader'
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            cssExtract
        ],
        //devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', //for source mapping, that is findind source of corrupted file
        devtool: isProduction ? 'source-map' : 'inline-source-map', //cheap-... does not provide css map source 
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true //return index.html for all 404 pages 
        }
    };
};

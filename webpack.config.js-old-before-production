//entry point is app.js in src folder 
//where is output 
//webpack.js.org 

const path = require('path');

module.exports = {
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
                use:[ //to have multiple-loaders
                    'style-loader','css-loader','sass-loader'
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map', //for source mapping, that is findind source of corrupted file
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //return index.html for all 404 pages 
    }
};

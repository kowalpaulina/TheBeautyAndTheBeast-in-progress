var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry :[
        'babel-polyfill',
            './js/script.js'
    ],
        output:{path: __dirname,filename: 'js/bundle.js'},
    watch:true,
    module:{
        loaders:[
            {
            loader: 'babel-loader',
            exclude:'/node_modules/',
            query:{
                presets: ['es2015']
            }
            }
        ]
    }
}
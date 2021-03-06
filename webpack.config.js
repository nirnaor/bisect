const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: './src/client/App.js',
    output: {
        filename: 'src/server/dist/bundle.js'
    },
    module: {
        loaders: [
            {
                query:
                {
                    presets:['react', 'stage-0']
                },
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ],
    }

}

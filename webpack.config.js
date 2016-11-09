var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        search: ["./src/scripts/components/Search"],
        dropDownFilter: ["./src/scripts/components/dropDownFilter"]
    },
    resolve: {
        root: [
            path.resolve('./src/scripts')
        ],
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: "assets/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};

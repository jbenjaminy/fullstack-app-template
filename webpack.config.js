module.exports = {
	entry: './client/index.jsx',
	output: {
		path: './build',
		filename: 'app.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
		}]
	},
};

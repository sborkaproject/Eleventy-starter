const buildFolder =
	process.env.ELEVENTY_ENV === 'production' ? 'build-production' : 'build';

const paths = {
	build: {
		root: buildFolder,
		images: `${buildFolder}/assets/images/`,
	},
	src: {
		root: 'src',
		includes: 'includes',
		layouts: 'templates',
		data: 'data',
		images: 'src/assets/images/',
		copy: [
			'src/assets/fonts',
			'src/assets/images',
			{ 'src/assets/favicons': '/' },
		],
	},
};

if (process.env.NOINDEX) {
	paths.src.copy.push({ 'src/assets/robots': '/' });
}

module.exports = paths;

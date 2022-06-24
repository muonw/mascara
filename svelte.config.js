import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		prerender: {
			default: true
		},
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/mascara',
		}
	}
};

export default config;
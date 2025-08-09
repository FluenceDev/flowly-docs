// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flowly.js',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/FluenceDev/flowly-docs' }],
			sidebar: [
				{
					label: 'Concepts',
					items: [
						{ label: 'Introduction', slug: 'concepts/introduction' },
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Building a first flow', slug: 'getting-started/building-flow' },
					],
				},
				{
					label: 'Tutorials',
					items: [
						{ label: 'Configuration', slug: 'tutorials/configuration' },
					],
				},
			],
		}),
	],
});

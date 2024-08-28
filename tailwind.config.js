import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
	join(require.resolve(
		'@skeletonlabs/skeleton'),
		'../**/*.{html,js,svelte,ts}'
	)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#032D43',
        secondary: '#0D4762',
		teritiary: '#1C5F60',
		button: '#FF8B92'
      }
    }
  },
  plugins: [
    skeleton({
		themes: { preset: [ "skeleton" ] }
	})
  ]
}

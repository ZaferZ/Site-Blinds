// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://riohomes.bg', 
  base: 'riohomes.bg/',
  
    vite: {
    plugins: [tailwindcss()]
  }
});
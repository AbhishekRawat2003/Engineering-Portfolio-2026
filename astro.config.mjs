import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
   devToolbar: {
    enabled: false
  },
  site: 'https://abhishekrawat2003-portfolio.vercel.app',
  integrations: [sitemap()],
});




 
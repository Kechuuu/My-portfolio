import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    outDir: 'dist', // Este es el directorio de salida para los archivos construidos
  },
});
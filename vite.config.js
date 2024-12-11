import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ui-ux-F/', // Replace 'ui-ux-F' with your repository name
  plugins: [react()],
});

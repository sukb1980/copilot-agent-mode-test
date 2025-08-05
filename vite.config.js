import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/copilot-agent-mode-test/', // Set base for GitHub Pages
  plugins: [react()],
});

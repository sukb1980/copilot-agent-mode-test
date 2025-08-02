import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/copilot-agent-mode-test/',
  plugins: [react()],
});

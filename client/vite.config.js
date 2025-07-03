import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // plugin xử lý React JSX
    tailwindcss(), // plugin xử lý Tailwind CSS
  ],
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
      registerNodeLoader: true,
    },
    threads: false,
    isolate: false,
  },
  server: {
    port: 4999,
  },
});

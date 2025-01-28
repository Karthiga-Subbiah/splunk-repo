import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
// import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {     host: '127.0.0.1', // Bind to 127.0.0.1
   port: 5173, // Optional, default is 5173 
    }
  // base: '/',
})

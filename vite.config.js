import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { postcss } from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({

  build: {
    sourcemap: false,  // Prevents exposing code in browser DevTools
  },
  
  plugins: [react()],
   css:{
     postcss: {
      plugins:[tailwindcss()]
     },
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:8000',
        changeOrigin:true,
        secure:false,
      },
    },
  },
});

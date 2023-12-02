import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Space-Tourism/",
  plugins: [react()],
  build: {
    outDir: "dist"
  }
})

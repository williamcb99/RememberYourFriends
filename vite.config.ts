import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "RememberYourFriends",
      formats: ["es"],
      fileName: "RememberYourFriends",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    }
  }
})

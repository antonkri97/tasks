import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/main.ts'
    },
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter',
    },
  },
})

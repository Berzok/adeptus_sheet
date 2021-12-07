import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        port: 3001
    },
    mode: 'development',
    plugins: [vue()],
    base: '',
    build: {
        outDir: 'dist'
    },
    resolve: {
        extensions: ['.vue', '.js']
    }
});
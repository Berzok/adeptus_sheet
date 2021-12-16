import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// process.env is now equivalent to import.meta.env
process.env = {...process.env, ...loadEnv('development', process.cwd())};

export default defineConfig({
    base: '',
    build: {
        outDir: 'dist'
    },
    define: {
        'process.env': process.env
    },
    plugins: [vue()],
    mode: 'development',
    publicDir: 'src/assets',
    resolve: {
        extensions: ['.vue', '.js', '.scss']
    },
    server: {
        port: 3000
    },
});
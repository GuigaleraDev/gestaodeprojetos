import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import * as path from "node:path";
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var build, esbuild, define;
    if (mode === 'development') {
        build = {
            minify: false,
            sourcemap: true,
            rollupOptions: {
                output: {
                    manualChunks: undefined,
                },
            },
        };
        esbuild = {
            jsxDev: true,
            keepNames: true,
            minifyIdentifiers: false,
        };
        define = {
            'process.env.NODE_ENV': '"development"',
            '__DEV__': 'true',
        };
    }
    return {
        base: '/gestaodeprojetos/',
        plugins: [
            react(),
            vitePrerenderPlugin({
                renderTarget: '#root',
                prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
            }),
        ],
        build: build,
        esbuild: esbuild,
        define: define,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        },
        optimizeDeps: {
            exclude: ['lucide-react'],
        },
    };
});

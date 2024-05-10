import { defineConfig } from 'vitest/config'
import * as path from 'path'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        root: './',
        coverage: {
            include: ['**/src/**'],
            provider: 'v8'
        }
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    }
});
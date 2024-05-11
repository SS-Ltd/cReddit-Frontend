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
            provider: 'v8',
            exclude: ['**/src/context/**', '**/src/services/**', '**/src/Components/settings/utils/**',
             '**/src/utils/**', '**/src/Components/mainfeed/comment/CommentUtils.js', '**/src/App.jsx' , '**/public/**', '**/src/firebase.js', '**/src/index.jsx', '**/src/Components/notifications/NotificationContext.jsx' ]
        }
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    }
});
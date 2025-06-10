import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setupTests.ts',
    exclude: [...configDefaults.exclude, 'dist']
  }
})
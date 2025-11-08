import { defineConfig } from 'vitest/config';

export const sharedConfig = defineConfig({
  test: {
    environment: 'node',
    setupFiles: ['./setup.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/esm/**'],
    watch: false,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
      reporter: ['text', 'json', 'html'],
    },
  },
});

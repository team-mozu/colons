import { defineProject, mergeConfig } from 'vitest/config';
import { sharedConfig } from '@mozu/vitest';
import packageJson from './package.json';

export default mergeConfig(
  sharedConfig,
  defineProject({
    test: {
      name: packageJson.name,
      deps: {
        optimizer: {
          ssr: {
            enabled: true,
            include: [packageJson.name],
          },
        },
      },
    },
  })
);

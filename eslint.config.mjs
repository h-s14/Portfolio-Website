import nextConfig from 'eslint-config-next';

const config = [
  ...nextConfig,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'react/jsx-no-target-blank': 'off',
    },
  },
];

export default config;

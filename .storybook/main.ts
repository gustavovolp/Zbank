import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
    ],
    framework: {
        name: '@storybook/nextjs-vite',
        options: {},
    },
    viteFinal: async (config) => {
        const { default: tailwindcss } = await import('@tailwindcss/vite');
        config.plugins = [...(config.plugins || []), tailwindcss()];
        return config;
    },
};

export default config;
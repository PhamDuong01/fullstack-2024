// eslint.config.js
import globals from 'globals';
import js from '@eslint/js';
export default [
    {
        ignores: ['node_modules/**', 'dist/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.commonjs,
                ...globals.es2021,
                ...globals.node,
            },
        },
        files: ['**/*.js'],
        plugins: {
            '@stylistic/js': {
                rules: {
                    indent: ['error', 4],
                    'linebreak-style': ['error', 'windows'],
                    quotes: ['error', 'single'],
                    semi: ['error', 'never'],
                },
            },
        },
        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'windows'],
            quotes: ['error', 'single'],
        },
    },
];

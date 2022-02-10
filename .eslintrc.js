module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
    },
};

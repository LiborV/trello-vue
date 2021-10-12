module.exports = {
    root: true,
    env: {
    node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
    parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
                // Basic settings
        indent: ['warn', 4], // Indent with 4 spaces
        'no-tabs': ['warn'], // Don't use tabs
        'no-trailing-spaces': ['warn'], // Don't allow trailing spaces
        'linebreak-style': ['error', 'unix'], // End lines with UNIX line breaks
        'max-len': ['warn', { code: 120 }], // Line length is limited by 120 characters
        semi: ['error', 'never'], // Don't use semicolons if not necessary
        'semi-style': ['error', 'first'], // If necessary, write semicolon at the beginning of the line
        'eol-last': ['error', 'always'] // enforces at least one newline (or absence thereof) at the end of non-empty files

    }
}

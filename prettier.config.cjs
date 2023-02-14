module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  organizeImportsSkipDestructiveCodeActions: false,
  plugins: ['prettier-plugin-organize-imports', require('prettier-plugin-tailwindcss')],
}

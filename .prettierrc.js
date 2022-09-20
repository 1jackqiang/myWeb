module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  jsxBracketSameLine: false,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.md',
      options: {
        useTabs: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.json',
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
};

module.exports = {
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' }
    }
  ]
};

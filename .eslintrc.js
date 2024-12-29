module.exports = {
  // Specifies the parser to use for TypeScript files
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Points to your TypeScript configuration file (tsconfig.json)
    project: 'tsconfig.json',
    // Specifies the root directory for the TypeScript configuration
    tsconfigRootDir: __dirname,
    // Defines the source type as 'module' (for ES module support)
    sourceType: 'module',
  },
  
  // Specifies the ESLint plugins to be used
  plugins: [
    '@typescript-eslint/eslint-plugin',  // Plugin for TypeScript-specific linting
    'prettier',                          // Plugin for Prettier formatting integration
    'import',                            // Plugin to enforce proper import order and resolve issues
    'jest',                              // Plugin for enforcing best practices in Jest tests
  ],
  
  // Specifies which ESLint rulesets to extend
  extends: [
    'plugin:@typescript-eslint/recommended',  // Recommended TypeScript rules
    'plugin:prettier/recommended',            // Recommended Prettier rules
    'plugin:import/errors',                  // Import error handling rules
    'plugin:import/warnings',                // Import warning rules
    'plugin:jest/recommended',               // Recommended Jest test rules
  ],

  root: true,  // Specifies this as the root ESLint configuration

  // Defines the environments for your project
  env: {
    node: true,  // Enables Node.js global variables
    jest: true,  // Enables Jest global variables for testing
  },

  // Ignores the linting of the ESLint configuration file itself
  ignorePatterns: ['.eslintrc.js'],

  // Defines custom rules for linting
  rules: {
    // Disable the requirement to prefix interfaces with 'I' (e.g., 'IUser')
    '@typescript-eslint/interface-name-prefix': 'off',
    // Disable requiring explicit return types for functions
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Disable requiring explicit types for exported module boundaries
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Disable the rule that disallows the use of 'any' type
    '@typescript-eslint/no-explicit-any': 'off',

    // Custom rules for better readability and best practices
    'object-curly-spacing': ['error', 'always'],  // Enforces consistent spacing inside curly braces
    'prefer-const': ['error', { destructuring: 'all' }],  // Encourages the use of 'const' for variables that are not reassigned
    'strict': ['error', 'global'],  // Enforces strict mode in the entire project
    'semi': ['error', 'always'],  // Requires semicolons at the end of statements
    'quotes': ['error', 'single'],  // Enforces the use of single quotes for strings
    'function-paren-newline': ['error', 'consistent'],  // Requires consistent newlines for function parentheses
    'arrow-parens': ['error', 'as-needed'],  // Requires parentheses around arrow function arguments only when necessary
    'max-len': [
      'warn',  // Warns if a line exceeds the specified length
      {
        code: 100,  // Maximum line length allowed
        ignoreUrls: true,  // Ignores URL lines
        ignoreComments: false,  // Doesn't ignore comments
        ignoreStrings: false,  // Doesn't ignore string literals
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],  // Warns on console usage except for 'warn' and 'error'

    // Additional TypeScript-specific rules
    '@typescript-eslint/explicit-module-boundary-types': ['error'],  // Requires explicit return types on module boundaries

    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],  // Requires explicit visibility modifiers (e.g., public, private) on class members
    '@typescript-eslint/no-unused-vars': ['warn'],  // Warns about unused variables
    'camelcase': ['error', { properties: 'always' }],  // Enforces camelCase naming for variables and function properties
    'consistent-return': 'error',  // Ensures consistent return values in functions

    // Prettier configuration integration (for code formatting)
    'prettier/prettier': [
      'error',  // Applies Prettier formatting rules
      {
        singleQuote: true,  // Enforces single quotes
        trailingComma: 'all',  // Enforces trailing commas where valid
        printWidth: 100,  // Sets maximum line length for Prettier
      },
    ],

    // Import plugin configuration
    'import/no-unresolved': 'error',  // Ensures imports resolve correctly
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],  // Groups built-in and external imports together
          ['internal', 'parent', 'sibling', 'index'],  // Groups internal and relative imports together
        ],
      },
    ],

    // Jest-related linting rules
    'jest/no-disabled-tests': 'warn',  // Warns if there are disabled tests in the code
    'jest/consistent-test-it': ['error', { fn: 'test' }],  // Enforces consistency in the test function naming
  },
};
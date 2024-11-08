module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript/base",
    "airbnb/hooks",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended", // Для TypeScript
    "prettier", // Добавьте это для отключения конфликтующих правил
    "plugin:prettier/recommended", // Этот плагин позволяет интегрировать Prettier в ESLint
  ],
  parser: "@typescript-eslint/parser", // Используем парсер для TypeScript
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "import",
    "@typescript-eslint", // Плагин для TypeScript
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
    "import/no-unresolved": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-irregular-whitespace": ["error", { skipJSXText: true }],
    "react/function-component-definition": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off", // Отключаем обязательность типов для функций
    // "@typescript-eslint/no-explicit-any": "off", // Отключаем ошибку для использования `any` типа
    // "prettier/prettier": "error", // Это правило заставит ESLint показывать ошибку, если форматирование Prettier нарушено
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

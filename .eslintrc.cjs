module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["airbnb", "airbnb-typescript", "plugin:prettier/recommended",'plugin:react-hooks/recommended'],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "react", "testing-library", "prettier"],
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "@typescript-eslint/naming-convention": "off",
    "comma-spacing": ["warn", { "before": false, "after": true }],
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "off",
    "no-nested-ternary": "off",
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function"
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "react/no-children-prop": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-plusplus": "off",
    "array-callback-return": "off"
  },
}

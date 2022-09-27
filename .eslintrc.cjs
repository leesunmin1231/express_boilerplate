module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
    },
    "extends": ["airbnb-base", "plugin:prettier/recommended", "eslint:recommended"],
    "plugins": ["prettier"],
    "overrides": [],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
    },
    "rules": {
      "no-use-before-define": "off",
      "no-console": "off",
      "func-names": "off",
      "import/prefer-default-export": "off",
      "import/extensions": "off"
    },
  };
  

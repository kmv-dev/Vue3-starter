/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  rules: {
    'vue/no-reserved-component-names': 0,
    'vue/multi-word-component-names': 'off'
  }
}

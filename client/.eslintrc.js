module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ], 
  "rules": {
    "no-undef": [ 1 ],
  },
  "env": {
    "browser": true,
    "node": true
  }
};
module.exports = {
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "mocha":   true,
        "node":    true
    },   
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],    
    "rules": {
        "react/prop-types": 0,
        "no-console":0
    }
}
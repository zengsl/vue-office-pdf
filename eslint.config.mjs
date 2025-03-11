// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import {FlatCompat} from '@eslint/eslintrc'

const compat = new FlatCompat()
export default antfu({
    vue: true,
    "rules": {
        "curly": "off",
        "no-console": "off",
        "vue/component-tags-order": ["error", {
            "order": [["script", "template"], "style"]
        }]
    },
    ...compat.config({
        extends: [
            'plugin:case-police/recommended',
            // Other extends...
        ],
    })
})
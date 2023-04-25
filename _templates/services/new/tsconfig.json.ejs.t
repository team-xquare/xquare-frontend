---
to: services/<%= name %>/tsconfig.json
---
{
    "extends": "../../tsconfig.base.json",
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}

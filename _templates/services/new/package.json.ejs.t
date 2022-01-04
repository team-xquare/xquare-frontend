---
to: services/<%= name %>/package.json
---
{
    "name": "@service/<%= name %>",
    "description": "<%= description %>",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint"
    },
    "dependencies": {
        "next": "11.1.2",
        "react": "17.0.2",
        "react-dom": "17.0.2"
    },
    "devDependencies": {
        "@types/node": "^16.7.10",
        "@types/react": "17.0.19",
        "eslint": "7.32.0",
        "eslint-config-next": "11.1.2",
        "typescript": "4.3.5"
    }
}

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
        "next": "12.1.5",
        "react": "18.0.0",
        "react-dom": "18.0.0",
        "@xquare/utils": "1.0.8"
    },
    "devDependencies": {
        "@types/node": "17.0.24",
        "@types/react": "18.0.5",
        "@types/react-dom": "18.0.1",
        "eslint": "8.13.0",
        "eslint-config-next": "12.1.5",
        "typescript": "4.6.3"
    }
}

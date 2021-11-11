---
to: services/<%= name %>/src/pages/_app.tsx
---
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp

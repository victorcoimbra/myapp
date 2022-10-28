import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'
import type { AppProps } from 'next/app'
import { theme } from '../themes/theme'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <ChakraProvider theme={theme}>
      <Component {...pageProps} />
  </ChakraProvider>
  )
}

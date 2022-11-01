import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme' // when using npm
import '@fontsource/inter/variable.css'
import type { AppProps } from 'next/app'

export const theme = extendTheme(
  {
    colors: {},
    
    fonts: {
      heading: "'Fira CodeVariable', -apple-system, system-ui, sans-serif",
      body: "'Fira CodeVariable', -apple-system, system-ui, sans-serif",
    },
  },
  proTheme,
)

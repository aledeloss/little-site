import { DefaultTheme } from 'styled-components'
import { fonts } from './styles/variables'

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string;
    colorSecondary: string;
    fontPrimary: string;
  }
}

export const defaultTheme: DefaultTheme = {
  colorPrimary: 'red',
  colorSecondary: 'blue',
  fontPrimary: fonts.poppins
}

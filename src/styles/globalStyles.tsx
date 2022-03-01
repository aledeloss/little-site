import { createGlobalStyle } from 'styled-components'

// global styles
const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: ${props => props.theme.fontPrimary};
  background-color: ${props => props.theme.colorPrimary}
}
`

export default GlobalStyles

import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'kebabfinance-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GilroyRegular';
    src: url(/fonts/Gilroy-Regular.ttf);
  }
  @font-face {
    font-family: 'GilroyMedium';
    src: url(/fonts/Gilroy-Medium.ttf);
  }
  @font-face {
    font-family: 'GilroySemiBold';
    src: url(/fonts/Gilroy-SemiBold.ttf);
  }
  @font-face {
    font-family: 'GilroyExtraBold';
    src: url(/fonts/Gilroy-ExtraBold.ttf);
  }
  * {
    font-family: 'GilroyRegular', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle

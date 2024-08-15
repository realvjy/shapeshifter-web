import { GoogleAnalytics } from 'nextjs-google-analytics';
import GlobalStyles from '../styles/globals.scss'
import styled from 'styled-components'
import createGlobalStyle from 'styled-components'


const GlobalCss = createGlobalStyle`
  ${GlobalStyles}
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <GlobalCss />
      <Component {...pageProps} />
    </>)
}

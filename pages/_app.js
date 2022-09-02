import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '../components/contexts/language'


function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp

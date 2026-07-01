import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar initialTranslations={pageProps.commonTranslations} />
            <main style={{ marginTop: '80px' }}>
                <Component {...pageProps} />
            </main>
            <Footer initialTranslations={pageProps.commonTranslations} />
            <CookieConsent initialTranslations={pageProps.commonTranslations} />
        </>
    );
}

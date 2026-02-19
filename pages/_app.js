import Script from 'next/script';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            {/* Google Analytics - Remplacez G-XXXXXXXXXX par votre ID de mesure
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXXXX');
                    `}
                </Script>
            */}


            <Navbar />
            <main style={{ marginTop: '80px' }}>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

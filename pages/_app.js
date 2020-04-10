import './global/styles.css';
import Logo from '../components/Logo'
import Nav from '../components/Nav'

export default function MyApp({ Component, pageProps }) {
    return (
        <Logo {...pageProps} />
        <Nav {...pageProps} />
    )
}
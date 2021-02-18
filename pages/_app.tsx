import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#940CFE"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(MyApp);

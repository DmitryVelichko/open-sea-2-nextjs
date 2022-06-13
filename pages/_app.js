import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]:
          'https://rinkeby.infura.io/v3/83b1c88d6e484420b12398819ca639d0',
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

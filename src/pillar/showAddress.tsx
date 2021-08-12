import { Sdk, NetworkNames } from 'etherspot';

let sdk: Sdk
//private key should remain same to generate the same wallet address


async function makeSession() {
    const session = await sdk.createSession();
  
    console.log('session object', session);
    console.log('session graphql headers', {
      ['x-auth-token']: session.token,
    });
  }

console.info('Session created');

export default async function showAddress() {
    sdk = new Sdk('0x611cca012a7e39461454c8e7f3539bb87ee4f1a4df5e91db692c65c82caca435', {
        networkName: 'matic' as NetworkNames,
      });
      console.info('SDK created instantiated');
    makeSession();
    const wallet = await sdk.computeContractAccount();
  // contract address ad wallet address are same , they are synonyms
    console.log('contract account', wallet);
    return wallet;
  }

 
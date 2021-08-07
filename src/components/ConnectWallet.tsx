import { useWeb3modal } from "../hooks/web3";
import React, { useEffect, useState } from 'react';
import Blockies from 'react-blockies' ;
import { GrConnect, GrLink } from 'react-icons/gr'
import { Button, useToast } from "@chakra-ui/react"
import { PrivateKey } from '@textile/hub'
import { BigNumber, providers, utils, ethers } from 'ethers'
import { hashSync } from 'bcryptjs'


type WindowInstanceWithEthereum = Window & typeof globalThis & { ethereum?: providers.ExternalProvider };


const truncate = (address) => {
    return address.slice(0,6) + "..." + address.slice(-4) ; 
}

const ConnectWallet = () => {
    const [ signerAddress, SetSignerAddress ] = useState('');
    const { connectWallet, disconnectWallet, provider, error } = useWeb3modal();
    const [ appsecret, setSecret ] = useState('secret');
    const [ appSigner, setSigner ] = useState(Object);

    useEffect(() => {
        const getSignerAddress = async() => {
            const signer = await provider.getSigner();
            const accounts = await (window as WindowInstanceWithEthereum).ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length === 0) {
      throw new Error('No account is provided. Please provide an account to this application.');
    }
            const address = await signer.getAddress();
            SetSignerAddress(address);
            setSigner(signer)
            console.log(address)

        }
        if (provider) getSignerAddress()
        else SetSignerAddress('')
    }, [provider])

    const handleConnect =  async () => {
        console.log("handleConnect fn")
        await connectWallet();
    }
    
    const handleDisconnect = () => {
        disconnectWallet();
    }

    const generateMessageForEntropy = (ethereum_address: String, application_name: string, secret: string): string => {
        return (
          '******************************************************************************** \n' +
          'READ THIS MESSAGE CAREFULLY. \n' +
          'DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE \n' +
          'ACCESS TO THIS APPLICATION. \n' +
          'DO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT \n' +
          'TO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION. \n' +
          '******************************************************************************** \n' +
          'The Ethereum address used by this application is: \n' +
          '\n' +
          ethereum_address +
          '\n' +
          '\n' +
          '\n' +
          'By signing this message, you authorize the current application to use the \n' +
          'following app associated with the above address: \n' +
          '\n' +
          application_name +
          '\n' +
          '\n' +
          '\n' +
          'The hash of your non-recoverable, private, non-persisted password or secret \n' +
          'phrase is: \n' +
          '\n' +
          secret +
          '\n' +
          '\n' +
          '\n' +
          '******************************************************************************** \n' +
          'ONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS \n' +
          'ASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION. \n' +
          'AGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND \n' +
          'WRITE ACCESS TO THIS APPLICATION. \n' +
          '******************************************************************************** \n'
        );
      }

      const getSigner = async () => {
        if (!(window as WindowInstanceWithEthereum).ethereum) {
          throw new Error(
            'Ethereum is not connected. Please download Metamask from https://metamask.io/download.html'
          );
        }
    
        console.debug('Initializing web3 provider...');
        // @ts-ignore
        const provider = new providers.Web3Provider((window as WindowInstanceWithEthereum).ethereum);
        const signer = provider.getSigner();
        return signer
      }
      const generatePrivateKey = async (): Promise<PrivateKey> => {
        const metamask = await {address: signerAddress, signer: appSigner}
        // avoid sending the raw secret by hashing it first
        const secret = hashSync(appsecret, 10)
        const message = generateMessageForEntropy(metamask.address, 'textile-demo', secret)
        const signedText = await metamask.signer.signMessage(message);
        const hash = utils.keccak256(signedText);
        if (hash === null) {
          throw new Error('No account is provided. Please provide an account to this application.');
        }
        // The following line converts the hash in hex to an array of 32 integers.
          // @ts-ignore
        const array = hash
          // @ts-ignore
          .replace('0x', '')
          // @ts-ignore
          .match(/.{2}/g)
          .map((hexNoPrefix) => BigNumber.from('0x' + hexNoPrefix).toNumber())
        
        if (array.length !== 32) {
          throw new Error('Hash of signature is not the correct size! Something went wrong!');
        }
        const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array))
        console.log(identity.toString())
    
        createNotification(identity)
    
        // Your app can now use this identity for generating a user Mailbox, Threads, Buckets, etc
        return identity
      }
    
      const createNotification = (identity: PrivateKey) => {
          return (
        useToast({ name: "create-notification", detail: {
          id: 1,
          description: `PubKey: ${identity.public.toString()}. Your app can now generate and reuse this users PrivateKey for creating user Mailboxes, Threads, and Buckets.`,
          timeout: 5000,
        }}) );
      }
    return(
    <Button  colorScheme="pink" variant="solid"
    onClick= { signerAddress ?  handleDisconnect : handleConnect }
    >
        {signerAddress? 
    <Blockies seed={signerAddress.toLowerCase()} size={8} scale={3} />
    : <GrConnect/> }
   <div style={{ marginLeft: "5px" }}>
   { signerAddress ?  truncate(signerAddress) : "Connect Wallet"}
   </div>
    </Button>
    )
}
export default ConnectWallet;
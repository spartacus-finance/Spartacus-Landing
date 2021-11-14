import React, { useState, useEffect } from 'react'
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from '@web3-react/core'
import { Button } from "react-neu";
import { injected } from '../../hooks/connector'

const WalletButton = () => {
      const context = useWeb3React<Web3Provider>();
      const [addressString, setAddressString] = useState("");
      const {
        connector,
        account,
        activate,
        deactivate,
        active,
        chainId
      } = context;

    useEffect(() => {
    if (connector && account) {
      setAddressString(account.slice(0, 6) + "..." + account.slice(-4));
    }
    }, [connector, chainId, account]);

      async function connect() {
        try {
          await activate(injected);
        } catch (ex) {
          console.log(ex);
        }
      }

      async function disconnect() {
        try {
          deactivate();
        } catch (ex) {
          console.log(ex);
        }
      }

    return (
      <div>
        <Button size='sm' onClick={()=>{
            if(!active){
                connect()
            } else {
                disconnect()
            }
        }}>
          {!active ? "Connect Wallet" : addressString}
        </Button>
      </div>
    );
}

export default WalletButton

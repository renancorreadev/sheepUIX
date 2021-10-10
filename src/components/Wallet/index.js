import React, { Component } from "react";
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";
import { Loader, Button, Card, Input, Table, Form, Field, Image } from 'rimble-ui';
import { zeppelinSolidityHotLoaderOptions } from '../../../config/webpack';

import styles from './wallet_module.scss';
import style1 from '../Header/header.module.scss';

export default class Wallet extends Component {
    constructor(props) {    
        super(props);

        this.state = {
          web3: null,
          balance: null, 
          accounts: null,
          currentAccount: null,          
          route: window.location.pathname.replace("/", ""),
        };
    }
   
    getGanacheAddresses = async () => {
        if (!this.ganacheProvider) {
          this.ganacheProvider = getGanacheWeb3();
        }
        if (this.ganacheProvider) {
          return await this.ganacheProvider.eth.getAccounts();
        }
        return [];
    }

    componentDidMount = async () => {
      const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;

      try {
        const isProd = process.env.NODE_ENV === 'production';
        if (!isProd) {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();
          let ganacheAccounts = [];

          try {
            ganacheAccounts = await this.getGanacheAddresses();
          } catch (e) {
            console.log('Ganache is not running');
          }

          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
          const currentAccount = accounts[0];

          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const networkType = await web3.eth.net.getNetworkType();
          const isMetaMask = web3.currentProvider.isMetaMask;
          let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]): web3.utils.toWei('0');
          balance = web3.utils.fromWei(balance, 'ether');
          this.setState({ 
              web3, 
              ganacheAccounts, 
              accounts, 
              balance, 
              networkId, 
              networkType, 
              hotLoaderDisabled,
              isMetaMask, 
              currentAccount: currentAccount, 
        
          });
        }
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
  };


    componentWillUnmount() {
        if (this.interval) {
          clearInterval(this.interval);
        }
    }

    refreshValues = (instancePhotoNFTMarketplace) => {
        if (instancePhotoNFTMarketplace) {
          console.log('refreshValues of instancePhotoNFTMarketplace');
        }
    }

    render() {
        const { web3, currentAccount } = this.state;

        return (
           
                <li className={style1.mainus}>
                   <span style={styles.boxs}>{
                    this.state.currentAccount 
                     }</span>
                 
                </li>
        );
    }
}

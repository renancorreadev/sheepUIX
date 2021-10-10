import React, { Component } from "react";
import getWeb3, { getGanacheWeb3, Web3 } from "./utils/getWeb3";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Publish from "./components/Publish/index.js";
import MyPhotos from "./components/MyPhotos/index.js";
import PhotoMarketplace from "./components/PhotoMarketplace/index.js";
import ipfs from './components/ipfs/ipfsApi.js'
import Wallet from "./components/Wallet/index.js";
import css from "./layout/index.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader, Button, Card, Input, Heading, Table, Form, Flex, Box, Image } from 'rimble-ui';
import { zeppelinSolidityHotLoaderOptions } from '../config/webpack';
import Main from "./components/Main/Main.js";
import styles from './App.module.scss';
import { blue } from "@material-ui/core/colors";
//import './App.css';


class App extends Component {
  constructor(props) {    
    super(props);

    this.state = {
      /////// Default state
      account: '0x0',
      storageValue: 0,
      web3: null,
      accounts: null,
      currentAccount: null, 
      Balance: null,
      route: window.location.pathname.replace("/", ""),
    };

     
  }
//////////////////////////////// 
  ///// Ganache
  ////////////////////////////////////
  getGanacheAddresses = async () => {

    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3();
    }
    if (this.ganacheProvider) {
      this.setState({ account: this.ganacheProvider.eth.getAccounts()})
      return await this.state.account;
      
    }
    return [];
  }

  componentDidMount = async () => {
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;

    try {
      const isProd = process.env.NODE_ENV === 'production';
     
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  renderLoader() {
    return (
      <div className={styles.loader}>
        <Loader size="80px" color="red" />
        <h3> Loading Web3, accounts, and contract...</h3>
        <p> Unlock your metamask </p>
      </div>
    );
  }

  renderDeployCheck(instructionsKey) {
    return (
      <div className={styles.setup}>
        <div className={styles.notice}>
          Your <b> contracts are not deployed</b> in this network. Two potential reasons: <br />
          <p>
            Maybe you are in the wrong network? Point Metamask to localhost.<br />
            You contract is not deployed. Follow the instructions below.
          </p>
        </div>
      </div>
    );
  }

  renderPublish() {
    return (
      <div className={styles.wrapper}>
        <Publish />
      </div>
    );
  }

  renderMyPhotos() {
    return (
      <div className={styles.wrapper}>
        <MyPhotos />
      </div>
    );
  }

  renderPhotoMarketPlace() {
    return (
      <div className={styles.wrapper}>
        <PhotoMarketplace />
      </div>    
    );
  }

  renderMain() {
    return (
      <div className={styles.wrapper}>
        <Main />
      </div>
    )
  }

  render() {
    return (
      <div className={styles.App}> 
        <Header currentAccount={this.state.currentAccount} />
          {this.state.route === '' && this.renderMain()}
          {this.state.route === 'create' && this.renderPublish()}
          {this.state.route === 'my_nfts' && this.renderMyPhotos()}
          {this.state.route === 'marketplace' && this.renderPhotoMarketPlace()}
      
        <Footer />
      </div>
    );
  }
}

export default App;

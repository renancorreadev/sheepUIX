import React from 'react';
import styles from './header.module.scss';
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";
import logo from '../../../public/logo.png'
import { style } from 'rimble-ui';
import Wallet from '../Wallet/index'
import Web3Info from '../Web3Info/index'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import {Container,  Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'




const Header = () => (

    <Navbar expand="lg"  className={"Container"} style={{
     background: 'linear-gradient(to right, #4fa46f 0%, #79c17e 100%)', width: '100%', height: '40%', padding: 26
    }}>
        <Navbar.Brand href="/">
          <a href="/"> 
            <img className={styles.logos} src={logo}/>
          </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"mr-auto"}>
            <Nav.Link className={styles.link} href="/">Home</Nav.Link>
            <Nav.Link className={styles.link}  href="/create">Create</Nav.Link>
            <Nav.Link className={styles.link}  href="/my_nfts">Assets</Nav.Link>
            <Nav.Link className={styles.link}  href="/marketplace">MarketPlace</Nav.Link>
            
            </Nav>


        </Navbar.Collapse>

        <span className={styles.w1}>Wallet:</span>
       
        <span className={styles.walletf}>
         <Wallet ></Wallet></span>
    </Navbar>

)

export default Header;


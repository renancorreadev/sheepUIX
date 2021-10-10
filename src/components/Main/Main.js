import React, { Component } from "react";
import { Loader, Button, Card, Input, Table, Form, Field, Image, style } from 'rimble-ui';
import styles from '../../App.module.scss';
import sheep from '../../../public/sheep-group.png'



export default class Main extends Component {
    constructor(props) {    
        super(props);

        this.state = {
                
          route: window.location.pathname.replace("/", ""),

         
        };
    }

  
    render() {

        return (
            <div className={"container " + styles.boxcontainer}>
                <div className={"row" +  styles.quad}>
                    <div className="col-md-12" >
                        <h1 className={styles.welcome}>Welcome to Sheep NFT MarketPlace </h1>
                        <h5>The Binance Smart Chain MarketPlace push by Sheeptoken.</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                      <img className={styles.imgsheep} src={sheep} />
                    </div>
                    <div className="col-md-6" id="caxe">
                       <h5 className="d-flex justify-content-center" style={{ marginLeft: 43, marginTop: 72}}> The NFT Marketplace platform for anyone to buy and sell auto-generated NFTs.</h5>
                        <p className= "d-flex justify-content-center" style={{marginBottom: 50, marginTop: 30, fontSize: 20}}>In our App you can: </p>

                        <div className="row ">
                            <div className="col-md-6">
                                <p className={styles.btnHome} >Sell and Buy NFT</p>
                            </div>
                            <div className="col-md-6">
                             <p  className={styles.btnHome} >Share your arts privately.</p>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-md-6">
                                <p className={styles.btnHome}>Save your NFT in your Wallet.</p>
                            </div>
                            <div className="col-md-6 ">
                            <p className={styles.btnHome}>Improve Sheep Token for onwards.</p>
                            </div>
                        </div>
                   </div> 
                   </div>
            </div>
        );
    }
}




import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import { OWO_ABI, OWO_ADDRESS, OWO_SALE_ABI, OWO_SALE_ADDRESS } from './config';
import OwokanSaleForm from './OwokanSaleForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      tokensAvailable: 500000,
      loading: true,
    };

    this.web3 = null;
    this.buyTokens = this.buyTokens.bind(this);
  }

    componentWillMount() {
      this.initWeb3();
    }

    async initWeb3() {

      // Modern dapp browsers...
      if (window.ethereum) {
          this.web3 = new Web3(window.ethereum);
          try {
              // Request account access if needed
              await window.ethereum.enable();
          } catch (error) {
              // User denied account access...
              console.log('User denied account access')
          }
      }
        // Legacy dapp browsers...
        else if (this.web3) {
            this.web3 = new Web3(this.web3.currentProvider);
        }
      // Non-dapp browsers...
      else {
          this.web3 = new Web3(Web3.givenProvider, "http://localhost:7545");
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }

      this.loadContract();
      // this.listenForEvents();
  }

  async loadContract() {

    const accounts = await this.web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    // owokan token contract
    const owokan = new this.web3.eth.Contract(OWO_ABI, OWO_ADDRESS);

    // owokan token sale contract
    const owokanSale = new this.web3.eth.Contract(OWO_SALE_ABI, OWO_SALE_ADDRESS);

    this.setState({ owokan, owokanSale });
    this.listenForEvents();
    this.loadData();
  }

  async loadData() {
    const balance = await this.state.owokan.methods.balanceOf(this.state.account).call();
    const totalSupply = await this.state.owokan.methods.totalSupply().call();
    const tokenPrice = await this.state.owokanSale.methods.tokenPrice().call();
    const tokenPriceInWei = this.web3.utils.fromWei(tokenPrice.toString(), 'ether');
    const tokensSold = await this.state.owokanSale.methods.tokensSold().call();
    var progress = (Math.ceil(tokensSold) / this.state.tokensAvailable) * 100;

    this.setState({ balance, totalSupply, tokenPrice, tokenPriceInWei, tokensSold, progress });

    this.setState({ loading: false });
  }

  render() {
      return (
      <div className="container" style={{width: '640px'}}>
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="text-center">OWOKAN TOKEN ICO SALE</h1>
                  <hr/>
                  <hr/>
              </div>

              { this.state.loading
                ? <div id="loader"><p className="text-center">Loading...</p></div>
                : <OwokanSaleForm
                    tokenPrice={this.state.tokenPriceInWei}
                    tokensSold={this.state.tokensSold}
                    tokensAvailable={this.state.tokensAvailable}
                    progress={this.state.progress}
                    buyTokens={this.buyTokens}/>
              }

          </div>
      </div>
    );
  }

  buyTokens(numberOfTokens) {
    this.setState({ loading: true });

    this.state.owokanSale.methods.buyTokens(numberOfTokens).send({
        from: this.state.account,
        value: numberOfTokens * this.state.tokenPrice
      }).catch((error) => {
      this.setState({ loading: false });
    });

    // this.state.owokanSale.methods.buyTokens(numberOfTokens).send({
    //     from: this.state.account,
    //     value: numberOfTokens * this.state.tokenPrice
    //   }).once('receipt', (receipt) => {
    //     console.log('token bought');
    //     this.setState({ loading: false });
    //   }). catch((error) => {
    //   this.setState({ loading: false });
    // });
  }

  listenForEvents() {
    this.state.owokanSale.events.Sell().on('data', result => {
      this.loadData();
    });
  }

}

export default App;

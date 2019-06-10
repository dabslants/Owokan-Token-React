import React, { Component } from 'react';

class OwokanSaleForm extends Component {

  render() {
      return (
      <div id="content" className="text-center">
          <p>
              Introduction "Owokan Token" (OWO)!
              Token price is {this.props.tokenPrice} Ether. You currently have {this.props.tokensSold.toNumber()}&nbsp;OWO.
          </p>
          <br/>
          <form onSubmit={(event) => {
            event.preventDefault();
            this.props.buyTokens(this.number.value)
            // console.log(this.number.value);
          }}>
              <div className="form-group">
                  <div className="input-group">
                      <input
                        ref={(input) => this.number = input}
                        defaultValue={1}
                        type="number" id="numberOfTokens" className="form-control input-lg" name="number"  min="1" pattern="[0-9]" />
                      <span className="input-group-btn">
                          <button type="submit" className="btn btn-primary btn-lg">Buy Tokens</button>
                      </span>
                  </div>
              </div>
          </form>
          <br/>
          <div className="progress">
              <div className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100"  role="progressbar"  style={{width: this.props.progress+"%"}}></div>
          </div>
          <p>{this.props.tokensSold.toNumber()} / {this.props.tokensAvailable} tokens sold</p>
          <hr/>
          <p id="accountAddress"></p>
      </div>
    );
  }
}

export default OwokanSaleForm;

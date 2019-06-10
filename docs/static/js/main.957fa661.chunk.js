(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,n){e.exports=n(462)},193:function(e,t,n){},205:function(e,t){},207:function(e,t){},301:function(e,t){},371:function(e,t){},460:function(e,t,n){},462:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),o=n(186),i=n.n(o),r=(n(192),n(193),n(12)),u=n.n(r),c=n(72),l=n(66),p=n(67),m=n(71),y=n(69),d=n(68),b=n(70),h=n(49),f=n.n(h),v=(n(460),[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"standard",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_initialSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]),k=[{constant:!0,inputs:[],name:"tokensSold",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenContract",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_tokenContract",type:"address"},{name:"_tokenPrice",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"_buyer",type:"address"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Sell",type:"event"},{constant:!1,inputs:[{name:"_numberOfTokens",type:"uint256"}],name:"buyTokens",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[],name:"endSale",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],w=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"content",className:"text-center"},s.a.createElement("p",null,'Introduction "Owokan Token" (OWO)! Token price is ',this.props.tokenPrice," Ether. You currently have ",this.props.tokensSold.toNumber(),"\xa0OWO."),s.a.createElement("br",null),s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.buyTokens(e.number.value)}},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{ref:function(t){return e.number=t},defaultValue:1,type:"number",id:"numberOfTokens",className:"form-control input-lg",name:"number",min:"1",pattern:"[0-9]"}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Buy Tokens"))))),s.a.createElement("br",null),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress-bar progress-bar-striped active","aria-valuemin":"0","aria-valuemax":"100",role:"progressbar",style:{width:this.props.progress+"%"}})),s.a.createElement("p",null,this.props.tokensSold.toNumber()," / ",this.props.tokensAvailable," tokens sold"),s.a.createElement("hr",null),s.a.createElement("p",{id:"accountAddress"}))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={account:"",tokensAvailable:5e5,loading:!0},n.web3=null,n.buyTokens=n.buyTokens.bind(Object(d.a)(n)),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.initWeb3()}},{key:"initWeb3",value:function(){var e=Object(c.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return this.web3=new f.a(window.ethereum),e.prev=2,e.next=5,window.ethereum.enable();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("User denied account access");case 10:e.next=13;break;case 12:this.web3?this.web3=new f.a(this.web3.currentProvider):(this.web3=new f.a(f.a.givenProvider,"http://localhost:7545"),console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"));case 13:this.loadContract();case 14:case"end":return e.stop()}},e,this,[[2,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadContract",value:function(){var e=Object(c.a)(u.a.mark(function e(){var t,n,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getAccounts();case 2:t=e.sent,this.setState({account:t[0]}),n=new this.web3.eth.Contract(v,"0xd32595fdbef63174447e2E9D627E0C8A812eBce0"),a=new this.web3.eth.Contract(k,"0xf63A0De7B454fa48c80ffddf4dCB90e6860129f8"),this.setState({owokan:n,owokanSale:a}),this.listenForEvents(),this.loadData();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=Object(c.a)(u.a.mark(function e(){var t,n,a,s,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.owokan.methods.balanceOf(this.state.account).call();case 2:return t=e.sent,e.next=5,this.state.owokan.methods.totalSupply().call();case 5:return n=e.sent,e.next=8,this.state.owokanSale.methods.tokenPrice().call();case 8:return a=e.sent,s=this.web3.utils.fromWei(a.toString(),"ether"),e.next=12,this.state.owokanSale.methods.tokensSold().call();case 12:o=e.sent,i=Math.ceil(o)/this.state.tokensAvailable*100,this.setState({balance:t,totalSupply:n,tokenPrice:a,tokenPriceInWei:s,tokensSold:o,progress:i}),this.setState({loading:!1});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:{width:"640px"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h1",{className:"text-center"},"OWOKAN TOKEN ICO SALE"),s.a.createElement("hr",null),s.a.createElement("hr",null)),this.state.loading?s.a.createElement("div",{id:"loader"},s.a.createElement("p",{className:"text-center"},"Loading...")):s.a.createElement(w,{tokenPrice:this.state.tokenPriceInWei,tokensSold:this.state.tokensSold,tokensAvailable:this.state.tokensAvailable,progress:this.state.progress,buyTokens:this.buyTokens})))}},{key:"buyTokens",value:function(e){var t=this;this.setState({loading:!0}),this.state.owokanSale.methods.buyTokens(e).send({from:this.state.account,value:e*this.state.tokenPrice}).catch(function(e){t.setState({loading:!1})})}},{key:"listenForEvents",value:function(){var e=this;this.state.owokanSale.events.Sell().on("data",function(t){console.log("token bought"),console.log(t),e.loadData()})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,1,2]]]);
//# sourceMappingURL=main.957fa661.chunk.js.map
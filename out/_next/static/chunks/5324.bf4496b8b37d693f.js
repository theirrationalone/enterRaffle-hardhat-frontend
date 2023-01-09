(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5324,1437],{35796:function(t,e,n){"use strict";n.d(e,{d:function(){return o}});var i=n(45624);class o extends i.J5{async authenticateUser(){var t;if(!this.provider||!(null!==(t=this.chainConfig)&&void 0!==t&&t.chainId))throw i.RM.notConnectedError();let{chainNamespace:e,chainId:n}=this.chainConfig;if(this.status!==i.MP.CONNECTED)throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first");let o=await this.provider.request({method:"eth_accounts"});if(o&&o.length>0){let r=(0,i.Cb)(o[0],this.name);if(r){let a=(0,i.$E)(r);if(!a)return{idToken:r}}let s={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(n,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},c=await (0,i.tV)(s,e),h=await this.provider.request({method:"personal_sign",params:[c,o[0]]}),d=await (0,i.rn)(e,h,c,this.name,this.sessionTime);return(0,i.Fr)(o[0],this.name,d),{idToken:d}}throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==i.MP.CONNECTED)throw i.RM.disconnectionError("Not connected with wallet");let t=await this.provider.request({method:"eth_accounts"});t&&t.length>0&&(0,i.qz)(t[0],this.name)}}},43840:function(t,e,n){"use strict";n.r(e),n.d(e,{WalletConnectV1Adapter:function(){return w}});var i=n(4942),o=n(75426),r=n(74131);class a extends o.Z{constructor(t,e){super({cryptoLib:r,connectorOpts:t,pushServerOpts:e})}}var s=n(45624),c=n(35796),h=n(52062);let d=[{name:"Rainbow",chains:[s.EN.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[s.EN.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}class w extends c.d{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,i.Z)(this,"name",s.rW.WALLET_CONNECT_V1),(0,i.Z)(this,"adapterNamespace",s.yk.EIP155),(0,i.Z)(this,"currentChainNamespace",s.EN.EIP155),(0,i.Z)(this,"type",s.hN.EXTERNAL),(0,i.Z)(this,"adapterOptions",void 0),(0,i.Z)(this,"status",s.MP.NOT_READY),(0,i.Z)(this,"adapterData",{uri:"",extensionAdapters:d}),(0,i.Z)(this,"connector",null),(0,i.Z)(this,"wcProvider",null),(0,i.Z)(this,"rehydrated",!1),this.adapterOptions=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){(0,i.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t),this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get connected(){var t;return!!(null!==(t=this.connector)&&void 0!==t&&t.connected)}get provider(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw Error("Not implemented")}async init(){super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,s.h2)(s.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new h.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(s.n2.READY,s.rW.WALLET_CONNECT_V1),this.status=s.MP.READY,s.cM.debug("initializing wallet connect v1 adapter"),this.connector.connected&&(this.rehydrated=!0,await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId}))}async connect(){if(super.checkConnectionRequirements(),!this.connector)throw s.Ty.notReady("Wallet adapter is not ready yet");if(this.connected)return await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId}),this.provider;if(this.status!==s.MP.CONNECTING){var t,e;null!==(t=this.adapterOptions.adapterSettings)&&void 0!==t&&t.qrcodeModal&&(this.connector=this.getWalletConnectInstance(),this.wcProvider=new h.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(e=this.adapterOptions.adapterSettings)||void 0===e?void 0:e.skipNetworkSwitching},connector:this.connector})),await this.createNewSession(),this.status=s.MP.CONNECTING,this.emit(s.n2.CONNECTING,{adapter:s.rW.WALLET_CONNECT_V1})}return new Promise((t,e)=>{if(!this.connector)return e(s.Ty.notReady("Wallet adapter is not ready yet"));this.connector.on("modal_closed",async()=>(this.status=s.MP.READY,this.emit(s.n2.READY,s.rW.WALLET_CONNECT_V1),e(Error("User closed modal"))));try{this.connector.on("connect",async(e,n)=>(e&&this.emit(s.n2.ERRORED,e),s.cM.debug("connected event emitted by web3auth"),await this.onConnectHandler(n.params[0]),t(this.provider)))}catch(n){s.cM.error("Wallet connect v1 adapter error while connecting",n),this.status=s.MP.READY,this.rehydrated=!0,this.emit(s.n2.ERRORED,n),e(n instanceof s.up?n:s.RM.connectionError("Failed to login with wallet connect: ".concat((null==n?void 0:n.message)||"")))}})}setAdapterSettings(t){this.status!==s.MP.READY&&null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}async getUserInfo(){if(!this.connected)throw s.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1},{cleanup:e}=t;if(!this.connector||!this.connected)throw s.RM.notConnectedError("Not connected with wallet");await super.disconnect(),await this.connector.killSession(),this.rehydrated=!1,e?(this.connector=null,this.status=s.MP.NOT_READY,this.wcProvider=null):this.status=s.MP.READY,this.emit(s.n2.DISCONNECTED)}async addChain(t){try{var e;if(!this.wcProvider)throw s.Ty.notReady("Wallet adapter is not ready yet");let n=null===(e=this.adapterOptions.adapterSettings)||void 0===e?void 0:e.networkSwitchModal;n&&await n.addNetwork({chainConfig:t,appOrigin:window.location.hostname}),await this.wcProvider.addChain(t)}catch(i){s.cM.error(i)}}async switchChain(t,e){var n;if(!this.wcProvider)throw s.Ty.notReady("Wallet adapter is not ready yet");let i=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal;i&&await i.switchNetwork({currentChainConfig:e,newChainConfig:t,appOrigin:window.location.hostname}),await this.wcProvider.switchChain({chainId:e.chainId,lookup:!1,addChain:!1})}async createNewSession(){var t,e,n;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceNewSession:!1};if(!this.connector)throw s.Ty.notReady("Wallet adapter is not ready yet");if(i.forceNewSession&&this.connector.pending&&await this.connector.killSession(),null!==(t=this.adapterOptions)&&void 0!==t&&null!==(e=t.adapterSettings)&&void 0!==e&&e.qrcodeModal){await this.connector.createSession({chainId:parseInt((null===(n=this.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)});return}return new Promise((t,e)=>{var n;if(!this.connector)return e(s.Ty.notReady("Wallet adapter is not ready yet"));s.cM.debug("creating new session for web3auth wallet connect"),this.connector.on("display_uri",async(n,i)=>{var o;if(n)return this.emit(s.n2.ERRORED,s.RM.connectionError("Failed to display wallet connect qr code")),e(n);let r=i.params[0];return this.updateAdapterData({uri:r,extensionAdapters:d}),null===(o=this.connector)||void 0===o||o.off("display_uri"),t()}),this.connector.createSession({chainId:parseInt((null===(n=this.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch(t=>(s.cM.error("error while creating new wallet connect session",t),this.emit(s.n2.ERRORED,t),e(t)))})}async onConnectHandler(t){if(!this.connector||!this.wcProvider)throw s.Ty.notReady("Wallet adapter is not ready yet");if(!this.chainConfig)throw s.Ty.invalidParams("Chain config is not set");let{chainId:e}=t;if(s.cM.debug("connected chainId in hex"),e!==parseInt(this.chainConfig.chainId,16)){var n,i,o;let r=(0,s.h2)(s.EN.EIP155,e)||{chainId:"0x".concat(e.toString(16)),displayName:"Unknown Network"},a=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.qrcodeModal;if(!a||a&&!(null!==(i=this.adapterOptions)&&void 0!==i&&null!==(o=i.adapterSettings)&&void 0!==o&&o.skipNetworkSwitching))try{await this.addChain(this.chainConfig),await this.switchChain(r,this.chainConfig),this.connector=this.getWalletConnectInstance()}catch(c){s.cM.error("error while chain switching",c),await this.createNewSession({forceNewSession:!0}),this.emit(s.n2.ERRORED,s.Ty.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null==r?void 0:r.displayName)||e,", Please switch to correct network from wallet"))),this.status=s.MP.READY,this.rehydrated=!0;return}}await this.wcProvider.setupProvider(this.connector),this.subscribeEvents(this.connector),this.status=s.MP.CONNECTED,this.emit(s.n2.CONNECTED,{adapter:s.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated})}subscribeEvents(t){t.on("session_update",async t=>{t&&this.emit(s.n2.ERRORED,t)})}getWalletConnectInstance(){let t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new a(t)}}},993:function(){},88924:function(){},55024:function(){}}]);
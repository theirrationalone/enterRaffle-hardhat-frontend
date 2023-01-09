(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4423],{1482:function(t,e,i){"use strict";i.d(e,{v:function(){return o}});var n=i(45624),r=i(37202),s=i.n(r);class o extends n.J5{async authenticateUser(){var t;if(!this.provider||!(null!==(t=this.chainConfig)&&void 0!==t&&t.chainId))throw n.RM.notConnectedError();let{chainNamespace:e,chainId:i}=this.chainConfig;if(this.status!==n.MP.CONNECTED)throw n.RM.notConnectedError("Not connected with wallet, Please login/connect first");let r=await this.provider.request({method:"getAccounts"});if(r&&r.length>0){let o=(0,n.Cb)(r[0],this.name);if(o){let a=(0,n.$E)(o);if(!a)return{idToken:o}}let c={domain:window.location.origin,uri:window.location.href,address:r[0],chainId:parseInt(i,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},l=await (0,n.tV)(c,e),d=new TextEncoder().encode(l),h=await this.provider.request({method:"signMessage",params:{message:d,display:"utf8"}}),u=await (0,n.rn)(e,s().encode(h),l,this.name,this.sessionTime);return(0,n.Fr)(r[0],this.name,u),{idToken:u}}throw n.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==n.MP.CONNECTED)throw n.RM.disconnectionError("Not connected with wallet");let t=await this.provider.request({method:"getAccounts"});t&&t.length>0&&(0,n.qz)(t[0],this.name)}}},55777:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw TypeError("Alphabet too long");for(var e=new Uint8Array(256),i=0;i<e.length;i++)e[i]=255;for(var n=0;n<t.length;n++){var r=t.charAt(n),s=r.charCodeAt(0);if(255!==e[s])throw TypeError(r+" is ambiguous");e[s]=n}var o=t.length,a=t.charAt(0),c=Math.log(o)/Math.log(256),l=Math.log(256)/Math.log(o);function d(t){if("string"!=typeof t)throw TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var i=0,n=0,r=0;t[i]===a;)n++,i++;for(var s=(t.length-i)*c+1>>>0,l=new Uint8Array(s);t[i];){var d=e[t.charCodeAt(i)];if(255===d)return;for(var h=0,u=s-1;(0!==d||h<r)&&-1!==u;u--,h++)d+=o*l[u]>>>0,l[u]=d%256>>>0,d=d/256>>>0;if(0!==d)throw Error("Non-zero carry");r=h,i++}for(var p=s-r;p!==s&&0===l[p];)p++;for(var g=new Uint8Array(n+(s-p)),m=n;p!==s;)g[m++]=l[p++];return g}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===e.length)return"";for(var i=0,n=0,r=0,s=e.length;r!==s&&0===e[r];)r++,i++;for(var c=(s-r)*l+1>>>0,d=new Uint8Array(c);r!==s;){for(var h=e[r],u=0,p=c-1;(0!==h||u<n)&&-1!==p;p--,u++)h+=256*d[p]>>>0,d[p]=h%o>>>0,h=h/o>>>0;if(0!==h)throw Error("Non-zero carry");n=u,r++}for(var g=c-n;g!==c&&0===d[g];)g++;for(var m=a.repeat(i);g<c;++g)m+=t.charAt(d[g]);return m},decodeUnsafe:d,decode:function(t){var e=d(t);if(e)return e;throw Error("Non-base"+o+" character")}}}},37202:function(t,e,i){let n=i(55777);t.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},94423:function(t,e,i){"use strict";i.r(e),i.d(e,{SolanaWalletAdapter:function(){return ti}});var n=i(4942),r=i(59917),s=i(22782),o=i(20917),a=i(95844),c=i(79826),l=i(24970),d=i(74286),h=i.n(d),u=i(2043),p=i.n(u),g=i(64063),m=i.n(g),f=i(48764).Buffer,w={errors:{disconnected:()=>"Torus: Lost connection to Torus.",permanentlyDisconnected:()=>"Torus: Disconnected from iframe. Page reload required.",unsupportedSync:t=>"Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(t," without a callback parameter."),invalidDuplexStream:()=>"Must provide a Node.js-style duplex stream.",invalidOptions:t=>"Invalid options. Received: { maxEventListeners: ".concat(t,"}"),invalidRequestArgs:()=>"Expected a single, non-array, object argument.",invalidRequestMethod:()=>"'args.method' must be a non-empty string.",invalidRequestParams:()=>"'args.params' must be an object or array if provided.",invalidLoggerObject:()=>"'args.logger' must be an object if provided.",invalidLoggerMethod:t=>"'args.logger' must include required method '".concat(t,"'.")},info:{connected:t=>'Torus: Connected to chain with ID "'.concat(t,'".')},warnings:{}};let y={PRODUCTION:"production",DEVELOPMENT:"development",TESTING:"testing"},v={BOTTOM_LEFT:"bottom-left",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",TOP_RIGHT:"top-right"},b={GOOGLE:"google",FACEBOOK:"facebook",REDDIT:"reddit",DISCORD:"discord",TWITCH:"twitch",APPLE:"apple",LINE:"line",GITHUB:"github",KAKAO:"kakao",LINKEDIN:"linkedin",TWITTER:"twitter",WEIBO:"weibo",WECHAT:"wechat",EMAIL_PASSWORDLESS:"email_passwordless"};var _={supportedVerifierList:[b.GOOGLE,b.REDDIT,b.DISCORD],api:"https://api.tor.us",translations:{en:{embed:{continue:"Continue",actionRequired:"Authorization required",pendingAction:"Click continue to proceed with your request in a popup",cookiesRequired:"Cookies Required",enableCookies:"Please enable cookies in your browser preferences to access Torus",clickHere:"More Info"}},de:{embed:{continue:"Fortsetzen",actionRequired:"Autorisierung erforderlich",pendingAction:"Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",cookiesRequired:"Cookies ben\xf6tigt",enableCookies:"Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",clickHere:"Mehr Info"}},ja:{embed:{continue:"継続する",actionRequired:"認証が必要です",pendingAction:"続行をクリックして、ポップアップでリクエストを続行します",cookiesRequired:"必要なクッキー",enableCookies:"Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",clickHere:"詳しくは"}},ko:{embed:{continue:"계속하다",actionRequired:"승인 필요",pendingAction:"팝업에서 요청을 진행하려면 계속을 클릭하십시오.",cookiesRequired:"쿠키 필요",enableCookies:"브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",clickHere:"더 많은 정보"}},zh:{embed:{continue:"继续",actionRequired:"需要授权",pendingAction:"单击继续以在弹出窗口中继续您的请求",cookiesRequired:"必填Cookie",enableCookies:"请在您的浏览器首选项中启用cookie以访问Torus。",clickHere:"更多信息"}}},prodTorusUrl:"",localStorageKey:"torus-".concat(window.location.hostname)},E=p().getLogger("solana-embed");let O=()=>Math.random().toString(36).slice(2),A=async t=>{let e,i;switch(t){case"testing":e="https://solana-testing.tor.us",i="debug";break;case"development":e="http://localhost:8080",i="debug";break;default:e="https://solana.tor.us",i="error"}return{torusUrl:e,logLevel:i}},C=()=>{let t=window.navigator.language||"en-US",e=t.split("-");return Object.prototype.hasOwnProperty.call(_.translations,e[0])?e[0]:"en"},T={height:660,width:375},P={height:740,width:1315},I={height:700,width:1200},S={height:600,width:400};function R(t){let{width:e,height:i}=t,n=void 0!==window.screenLeft?window.screenLeft:window.screenX,r=void 0!==window.screenTop?window.screenTop:window.screenY,s=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,o=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,a="titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(i/1,",width=").concat(e/1,",top=").concat(Math.abs((o-i)/2/1+r),",left=").concat(Math.abs((s-e)/2/1+n));return a}class k extends a.Ue{constructor(t,e){let{maxEventListeners:i=100,jsonRpcStreamName:r="provider"}=e;if(super(),(0,n.Z)(this,"isTorus",void 0),(0,n.Z)(this,"_rpcEngine",void 0),(0,n.Z)(this,"jsonRpcConnectionEvents",void 0),(0,n.Z)(this,"_state",void 0),!(0,l.duplex)(t))throw Error(w.errors.invalidDuplexStream());this.isTorus=!0,this.setMaxListeners(i),this._handleConnect=this._handleConnect.bind(this),this._handleDisconnect=this._handleDisconnect.bind(this),this._handleStreamDisconnect=this._handleStreamDisconnect.bind(this),this._rpcRequest=this._rpcRequest.bind(this),this._initializeState=this._initializeState.bind(this),this.request=this.request.bind(this),this.sendAsync=this.sendAsync.bind(this);let o=new a.O4;h()(t,o,t,this._handleStreamDisconnect.bind(this,"Torus")),o.ignoreStream("phishing");let d=(0,a.AP)();h()(d.stream,o.createStream(r),d.stream,this._handleStreamDisconnect.bind(this,"Torus RpcProvider"));let u=new a.eI;u.push((0,a.Rq)()),u.push((t,e,i)=>{"string"==typeof t.method&&t.method||(e.error=c.ethErrors.rpc.invalidRequest({message:"The request 'method' must be a non-empty string.",data:t})),i(t=>{let{error:i}=e;return i&&E.error("Torus - RPC Error: ".concat(i.message),i),t()})}),u.push((0,s.yh)({origin:location.origin})),u.push(d.middleware),this._rpcEngine=u,this.jsonRpcConnectionEvents=d.events}async request(t){if(!t||"object"!=typeof t||Array.isArray(t))throw c.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestArgs(),data:t});let{method:e,params:i}=t;if("string"!=typeof e||0===e.length)throw c.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestMethod(),data:t});if(void 0!==i&&!Array.isArray(i)&&("object"!=typeof i||null===i))throw c.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestParams(),data:t});return new Promise((t,n)=>{this._rpcRequest({method:e,params:i},(0,a.nE)(t,n))})}send(t,e){this._rpcRequest(t,e)}sendAsync(t){return new Promise((e,i)=>{this._rpcRequest(t,(0,a.nE)(e,i))})}_handleStreamDisconnect(t,e){let i;i='Torus: Lost connection to "'.concat(t,'".'),null!=e&&e.stack&&(i+="\n".concat(e.stack)),E.warn(i),this&&this.listenerCount("error")>0&&this.emit("error",i),this._handleDisconnect(!1,e?e.message:void 0)}}let D=function(t,e,i){for(var n=arguments.length,r=Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];let o=()=>{i(...r),t.removeEventListener(e,o)};t.addEventListener(e,o)};async function L(){return new Promise(t=>{"loading"!==document.readyState?t():D(document,"DOMContentLoaded",t)})}let j=t=>{let e=window.document.createElement("template"),i=t.trim();return e.innerHTML=i,e.content.firstChild};class N extends a.Ue{constructor(t){let{url:e,target:i,features:r}=t;super(),(0,n.Z)(this,"url",void 0),(0,n.Z)(this,"target",void 0),(0,n.Z)(this,"features",void 0),(0,n.Z)(this,"window",void 0),(0,n.Z)(this,"windowTimer",void 0),(0,n.Z)(this,"iClosedWindow",void 0),this.url=e,this.target=i||"_blank",this.features=r||R(I),this.window=void 0,this.windowTimer=void 0,this.iClosedWindow=!1,this._setupTimer()}_setupTimer(){this.windowTimer=Number(setInterval(()=>{this.window&&this.window.closed&&(clearInterval(this.windowTimer),this.iClosedWindow||this.emit("close"),this.iClosedWindow=!1,this.window=void 0),void 0===this.window&&clearInterval(this.windowTimer)},500))}open(){var t;return this.window=window.open(this.url.href,this.target,this.features),null!==(t=this.window)&&void 0!==t&&t.focus&&this.window.focus(),Promise.resolve()}close(){this.iClosedWindow=!0,this.window&&this.window.close()}redirect(t){t?window.location.replace(this.url.href):window.location.href=this.url.href}}function q(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}class U extends k{constructor(t,e){let{maxEventListeners:i=100,jsonRpcStreamName:r="provider"}=e;super(t,{maxEventListeners:i,jsonRpcStreamName:r}),(0,n.Z)(this,"embedTranslations",void 0),(0,n.Z)(this,"torusUrl",void 0),(0,n.Z)(this,"dappStorageKey",void 0),(0,n.Z)(this,"windowRefs",void 0),(0,n.Z)(this,"tryWindowHandle",void 0),(0,n.Z)(this,"torusAlertContainer",void 0),(0,n.Z)(this,"torusIframe",void 0),this._state=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?q(Object(i),!0).forEach(function(e){(0,n.Z)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},U._defaultState),this.torusUrl="",this.dappStorageKey="";let o=_.translations[C()];this.embedTranslations=o.embed,this.windowRefs={},this.on("connect",()=>{this._state.isConnected=!0});let a=t=>{let{method:e,params:i}=t;if(e===s.Nb.IFRAME_STATUS){let{isFullScreen:n,rid:r}=i;this._displayIframe({isFull:n,rid:r})}else if(e===s.Nb.CREATE_WINDOW){let{windowId:o,url:a}=i;this._createPopupBlockAlert(o,a)}else if(e===s.Nb.CLOSE_WINDOW)this._handleCloseWindow(i);else if(e===s.Nb.USER_LOGGED_IN){let{currentLoginProvider:c}=i;this._state.isLoggedIn=!0,this._state.currentLoginProvider=c}else e===s.Nb.USER_LOGGED_OUT&&(this._state.isLoggedIn=!1,this._state.currentLoginProvider=null,this._displayIframe())};this.jsonRpcConnectionEvents.on("notification",a)}get isLoggedIn(){return this._state.isLoggedIn}get isIFrameFullScreen(){return this._state.isIFrameFullScreen}isConnected(){return this._state.isConnected}async _initializeState(t){try{let{torusUrl:e,dappStorageKey:i,torusAlertContainer:n,torusIframe:r}=t;this.torusUrl=e,this.dappStorageKey=i,this.torusAlertContainer=n,this.torusIframe=r,this.torusIframe.addEventListener("load",()=>{this._state.isIFrameFullScreen||this._displayIframe()});let{currentLoginProvider:o,isLoggedIn:a}=await this.request({method:s.vU.GET_PROVIDER_STATE,params:[]});this._handleConnect(o,a)}catch(c){E.error("Torus: Failed to get initial state. Please report this bug.",c)}finally{E.info("initialized communication state"),this._state.initialized=!0,this.emit("_initialized")}}_handleWindow(t){let{url:e,target:i,features:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new URL(e||"".concat(this.torusUrl,"/redirect?windowId=").concat(t));this.dappStorageKey&&(r.hash?r.hash+="&dappStorageKey=".concat(this.dappStorageKey):r.hash="#dappStorageKey=".concat(this.dappStorageKey));let o=new N({url:r,target:i,features:n});if(o.open(),!o.window){this._createPopupBlockAlert(t,r.href);return}this.windowRefs[t]=o,this.request({method:s.vU.OPENED_WINDOW,params:{windowId:t}}),o.once("close",()=>{delete this.windowRefs[t],this.request({method:s.vU.CLOSED_WINDOW,params:{windowId:t}})})}_displayIframe(){let{isFull:t=!1,rid:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};if(t)i.display="block",i.width="100%",i.height="100%",i.top="0px",i.right="0px",i.left="0px",i.bottom="0px";else switch(i.display=this._state.torusWidgetVisibility?"block":"none",i.height="70px",i.width="70px",this._state.buttonPosition){case v.TOP_LEFT:i.top="0px",i.left="0px",i.right="auto",i.bottom="auto";break;case v.TOP_RIGHT:i.top="0px",i.right="0px",i.left="auto",i.bottom="auto";break;case v.BOTTOM_RIGHT:i.bottom="0px",i.right="0px",i.top="auto",i.left="auto";break;case v.BOTTOM_LEFT:default:i.bottom="0px",i.left="0px",i.top="auto",i.right="auto"}Object.assign(this.torusIframe.style,i),this._state.isIFrameFullScreen=t,this.request({method:s.vU.IFRAME_STATUS,params:{isIFrameFullScreen:t,rid:e}})}hideTorusButton(){this._state.torusWidgetVisibility=!1,this._displayIframe()}showTorusButton(){this._state.torusWidgetVisibility=!0,this._displayIframe()}_rpcRequest(t,e){let i=t;Array.isArray(i)||i.jsonrpc||(i.jsonrpc="2.0"),this.tryWindowHandle(i,e)}_handleConnect(t,e){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{currentLoginProvider:t,isLoggedIn:e}),E.debug(w.info.connected(t)))}_handleDisconnect(t,e){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!t){let i;this._state.isConnected=!1,t?(i=new c.EthereumRpcError(1013,e||w.errors.disconnected()),E.debug(i)):(i=new c.EthereumRpcError(1011,e||w.errors.permanentlyDisconnected()),E.error(i),this._state.currentLoginProvider=null,this._state.isLoggedIn=!1,this._state.torusWidgetVisibility=!1,this._state.isIFrameFullScreen=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",i)}}_handleCloseWindow(t){let{windowId:e}=t;this.windowRefs[e]&&(this.windowRefs[e].close(),delete this.windowRefs[e])}async _createPopupBlockAlert(t,e){let i=this.getLogoUrl(),n=j('<div id="torusAlert" class="torus-alert--v2">'+'<div id="torusAlert__logo"><img src="'.concat(i,'" /></div>')+"<div>"+'<h1 id="torusAlert__title">'.concat(this.embedTranslations.actionRequired,"</h1>")+'<p id="torusAlert__desc">'.concat(this.embedTranslations.pendingAction,"</p>")+"</div></div>"),r=j('<div><a id="torusAlert__btn">'.concat(this.embedTranslations.continue,"</a></div>")),s=j('<div id="torusAlert__btn-container"></div>');s.appendChild(r),n.appendChild(s),await L(),(()=>{this.torusAlertContainer.appendChild(n)})(),(()=>{r.addEventListener("click",()=>{this._handleWindow(t,{url:e,target:"_blank",features:R(S)}),n.remove(),0===this.torusAlertContainer.children.length&&(this.torusAlertContainer.style.display="none")})})(),this.torusAlertContainer.style.display="block"}getLogoUrl(){let t="".concat(this.torusUrl,"/images/torus_icon-blue.svg");return t}}function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}(0,n.Z)(U,"_defaultState",{buttonPosition:"bottom-left",currentLoginProvider:null,isIFrameFullScreen:!1,hasEmittedConnection:!1,torusWidgetVisibility:!1,initialized:!1,isLoggedIn:!1,isPermanentlyDisconnected:!1,isConnected:!1});class W extends k{constructor(t,e){let{maxEventListeners:i=100,jsonRpcStreamName:r="provider"}=e;super(t,{maxEventListeners:i,jsonRpcStreamName:r}),(0,n.Z)(this,"chainId",void 0),(0,n.Z)(this,"selectedAddress",void 0),(0,n.Z)(this,"tryWindowHandle",void 0),this._state=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach(function(e){(0,n.Z)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},W._defaultState),this.selectedAddress=null,this.chainId=null,this._handleAccountsChanged=this._handleAccountsChanged.bind(this),this._handleChainChanged=this._handleChainChanged.bind(this),this._handleUnlockStateChanged=this._handleUnlockStateChanged.bind(this),this.on("connect",()=>{this._state.isConnected=!0});let o=t=>{let{method:e,params:i}=t;e===s.zK.ACCOUNTS_CHANGED?this._handleAccountsChanged(i):e===s.zK.UNLOCK_STATE_CHANGED?this._handleUnlockStateChanged(i):e===s.zK.CHAIN_CHANGED&&this._handleChainChanged(i)};this.jsonRpcConnectionEvents.on("notification",o)}isConnected(){return this._state.isConnected}async _initializeState(){try{let{accounts:t,chainId:e,isUnlocked:i}=await this.request({method:s.GA.GET_PROVIDER_STATE,params:[]});this.emit("connect",{chainId:e}),this._handleChainChanged({chainId:e}),this._handleUnlockStateChanged({accounts:t,isUnlocked:i}),this._handleAccountsChanged(t)}catch(n){E.error("Torus: Failed to get initial state. Please report this bug.",n)}finally{E.info("initialized provider state"),this._state.initialized=!0,this.emit("_initialized")}}_rpcRequest(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e,r=t;if(!Array.isArray(r)){if(r.jsonrpc||(r.jsonrpc="2.0"),"solana_accounts"===r.method||"solana_requestAccounts"===r.method)n=(t,n)=>{this._handleAccountsChanged(n.result||[],"solana_accounts"===r.method,i),e(t,n)};else if("wallet_getProviderState"===r.method){this._rpcEngine.handle(t,n);return}}this.tryWindowHandle(r,n)}_handleConnect(t){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{chainId:t}),E.debug(w.info.connected(t)))}_handleDisconnect(t,e){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!t){let i;this._state.isConnected=!1,t?(i=new c.EthereumRpcError(1013,e||w.errors.disconnected()),E.debug(i)):(i=new c.EthereumRpcError(1011,e||w.errors.permanentlyDisconnected()),E.error(i),this.chainId=null,this._state.accounts=null,this.selectedAddress=null,this._state.isUnlocked=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",i)}}_handleAccountsChanged(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t;for(let r of(Array.isArray(n)||(E.error("Torus: Received non-array accounts parameter. Please report this bug.",n),n=[]),t))if("string"!=typeof r){E.error("Torus: Received non-string account. Please report this bug.",t),n=[];break}m()(this._state.accounts,n)||(e&&Array.isArray(this._state.accounts)&&this._state.accounts.length>0&&!i&&E.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.',n),this._state.accounts=n,this.emit("accountsChanged",n)),this.selectedAddress!==n[0]&&(this.selectedAddress=n[0]||null)}_handleChainChanged(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!t){E.error("Torus: Received invalid network parameters. Please report this bug.",{chainId:t});return}"loading"===t?this._handleDisconnect(!0):(this._handleConnect(t),t!==this.chainId&&(this.chainId=t,this._state.initialized&&this.emit("chainChanged",this.chainId)))}_handleUnlockStateChanged(){let{accounts:t,isUnlocked:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("boolean"!=typeof e){E.error("Torus: Received invalid isUnlocked parameter. Please report this bug.",{isUnlocked:e});return}e!==this._state.isUnlocked&&(this._state.isUnlocked=e,this._handleAccountsChanged(t||[]))}}function M(t){return new Promise((e,i)=>{try{let n=document.createElement("img");n.onload=()=>e(!0),n.onerror=()=>e(!1),n.src=t}catch(r){i(r)}})}(0,n.Z)(W,"_defaultState",{accounts:null,isConnected:!1,isUnlocked:!1,initialized:!1,isPermanentlyDisconnected:!1,hasEmittedConnection:!1});let Z=t=>{let{document:e}=t,i=e.querySelector('head > meta[property="og:site_name"]');if(i)return i.content;let n=e.querySelector('head > meta[name="title"]');return n?n.content:e.title&&e.title.length>0?e.title:t.location.hostname};async function z(t){try{let{document:e}=t,i=e.querySelector('head > link[rel="shortcut icon"]');if(i&&await M(i.href)||(i=Array.from(e.querySelectorAll('head > link[rel="icon"]')).find(t=>Boolean(t.href)))&&await M(i.href))return i.href;return""}catch(n){return""}}let K=async()=>({name:Z(window),icon:await z(window)});function F(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function H(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?F(Object(i),!0).forEach(function(e){(0,n.Z)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}let{version:B}=i(27384),G=["send_transaction","sign_transaction","sign_all_transactions","sign_message","connect"],V=[s.vU.SET_PROVIDER],Y=function(t){let e;try{e=window[t];let i="__storage_test__";return e.setItem(i,i),e.removeItem(i),!0}catch(n){return n&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&e&&0!==e.length}}("localStorage");!async function(){try{if("undefined"==typeof document)return;let t=document.createElement("link"),{torusUrl:e}=await A("production");t.href="".concat(e,"/frame"),t.crossOrigin="anonymous",t.type="text/html",t.rel="prefetch",t.relList&&t.relList.supports&&t.relList.supports("prefetch")&&document.head.appendChild(t)}catch(i){E.warn(i)}}();class J{constructor(){let{modalZIndex:t=99999}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,n.Z)(this,"isInitialized",void 0),(0,n.Z)(this,"torusAlert",void 0),(0,n.Z)(this,"modalZIndex",void 0),(0,n.Z)(this,"alertZIndex",void 0),(0,n.Z)(this,"requestedLoginProvider",void 0),(0,n.Z)(this,"provider",void 0),(0,n.Z)(this,"communicationProvider",void 0),(0,n.Z)(this,"dappStorageKey",void 0),(0,n.Z)(this,"torusAlertContainer",void 0),(0,n.Z)(this,"torusUrl",void 0),(0,n.Z)(this,"torusIframe",void 0),(0,n.Z)(this,"styleLink",void 0),this.torusUrl="",this.isInitialized=!1,this.requestedLoginProvider=null,this.modalZIndex=t,this.alertZIndex=t+1e3,this.dappStorageKey=""}get isLoggedIn(){return!!this.communicationProvider&&this.communicationProvider.isLoggedIn}async init(){let{buildEnv:t=y.PRODUCTION,enableLogging:e=!1,network:i,showTorusButton:n=!1,useLocalStorage:r=!1,buttonPosition:s=v.BOTTOM_LEFT,apiKey:a="torus-default",extraParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.isInitialized)throw Error("Already initialized");(0,o.ut)(a);let{torusUrl:l,logLevel:d}=await A(t);E.enableAll(),E.info(l,"url loaded"),E.info("Solana Embed Version :".concat(B)),this.torusUrl=l,E.setDefaultLevel(d),e?E.enableAll():E.disableAll();let h=this.handleDappStorageKey(r),u=new URL(l);u.pathname.endsWith("/")?u.pathname+="frame":u.pathname+="/frame";let p=new URLSearchParams;h&&p.append("dappStorageKey",h),p.append("origin",window.location.origin),u.hash=p.toString(),this.torusIframe=j('<iframe\n        id="torusIframe"\n        class="torusIframe"\n        src="'.concat(u.href,'"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ').concat(this.modalZIndex.toString(),'"\n      ></iframe>')),this.torusAlertContainer=j('<div id="torusAlertContainer" style="display:none; z-index: '.concat(this.alertZIndex.toString(),'"></div>')),this.styleLink=j('<link href="'.concat(l,'/css/widget.css" rel="stylesheet" type="text/css">'));let g=async()=>new Promise((t,e)=>{try{window.document.head.appendChild(this.styleLink),window.document.body.appendChild(this.torusIframe),window.document.body.appendChild(this.torusAlertContainer),this.torusIframe.addEventListener("load",async()=>{let e=await K();this.torusIframe.contentWindow.postMessage({buttonPosition:s,apiKey:a,network:i,dappMetadata:e,extraParams:c},u.origin),await this._setupWeb3({torusUrl:l}),n?this.showTorusButton():this.hideTorusButton(),this.isInitialized=!0,window.torus=this,t()})}catch(r){e(r)}});await L(),await g()}async login(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.isInitialized)throw Error("Call init() first");try{this.requestedLoginProvider=t.loginProvider||null,this.requestedLoginProvider||this.communicationProvider._displayIframe({isFull:!0});let e=await new Promise((e,i)=>{this.provider._rpcRequest({method:"solana_requestAccounts",params:[this.requestedLoginProvider,t.login_hint]},(0,a.nE)(e,i))});if(Array.isArray(e)&&e.length>0)return e;throw Error("Login failed")}catch(i){throw E.error("login failed",i),i}finally{this.communicationProvider.isIFrameFullScreen&&this.communicationProvider._displayIframe()}}async loginWithPrivateKey(t){if(!this.isInitialized)throw Error("Call init() first");let{privateKey:e,userInfo:i}=t,{success:n}=await this.communicationProvider.request({method:"login_with_private_key",params:{privateKey:e,userInfo:i}});if(!n)throw Error("Login Failed")}async logout(){if(!this.communicationProvider.isLoggedIn)throw Error("Not logged in");await this.communicationProvider.request({method:s.vU.LOGOUT,params:[]}),this.requestedLoginProvider=null}async cleanUp(){this.communicationProvider.isLoggedIn&&await this.logout(),this.clearInit()}clearInit(){function t(t){return t instanceof Element||t instanceof Document}t(this.styleLink)&&window.document.body.contains(this.styleLink)&&(this.styleLink.remove(),this.styleLink=void 0),t(this.torusIframe)&&window.document.body.contains(this.torusIframe)&&(this.torusIframe.remove(),this.torusIframe=void 0),t(this.torusAlertContainer)&&window.document.body.contains(this.torusAlertContainer)&&(this.torusAlert=void 0,this.torusAlertContainer.remove(),this.torusAlertContainer=void 0),this.isInitialized=!1}hideTorusButton(){this.communicationProvider.hideTorusButton()}showTorusButton(){this.communicationProvider.showTorusButton()}async setProvider(t){await this.communicationProvider.request({method:s.vU.SET_PROVIDER,params:H({},t)})}async showWallet(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=await this.communicationProvider.request({method:s.vU.WALLET_INSTANCE_ID,params:[]}),n=new URL("".concat(this.torusUrl,"/wallet").concat(t?"/".concat(t):""));n.searchParams.append("instanceId",i),Object.keys(e).forEach(t=>{n.searchParams.append(t,e[t])}),this.dappStorageKey&&(n.hash="#dappStorageKey=".concat(this.dappStorageKey));let r=new N({url:n,features:R(P)});r.open()}async getUserInfo(){let t=await this.communicationProvider.request({method:s.vU.USER_INFO,params:[]});return t}async initiateTopup(t,e){if(!this.isInitialized)throw Error("Torus is not initialized");let i=O();this.communicationProvider._handleWindow(i);let n=await this.communicationProvider.request({method:s.vU.TOPUP,params:{provider:t,params:e,windowId:i}});return n}async getAccounts(){let t=await this.provider.request({method:"getAccounts",params:[]});return t}async sendTransaction(t){let e=await this.provider.request({method:"send_transaction",params:{message:t.serialize({requireAllSignatures:!1}).toString("hex")}});return e}async signTransaction(t){let e=await this.provider.request({method:"sign_transaction",params:{message:t.serializeMessage().toString("hex"),messageOnly:!0}}),i=JSON.parse(e),n={publicKey:new r.nh(i.publicKey),signature:f.from(i.signature,"hex")};return t.addSignature(n.publicKey,n.signature),t}async signAllTransactions(t){let e=t.map(t=>t.serializeMessage().toString("hex")),i=await this.provider.request({method:"sign_all_transactions",params:{message:e,messageOnly:!0}}),n=i.map(t=>{let e=JSON.parse(t);return{publicKey:new r.nh(e.publicKey),signature:f.from(e.signature,"hex")}});return t.forEach((t,e)=>(t.addSignature(n[e].publicKey,n[e].signature),t)),t}async signMessage(t){let e=await this.provider.request({method:"sign_message",params:{data:t}});return e}async getGaslessPublicKey(){let t=await this.provider.request({method:"get_gasless_public_key",params:[]});return t}handleDappStorageKey(t){let e="";if(Y&&t){let i=window.localStorage.getItem(_.localStorageKey);if(i)e=i;else{let n="torus-app-".concat(O());window.localStorage.setItem(_.localStorageKey,n),e=n}}return this.dappStorageKey=e,e}async _setupWeb3(t){E.info("setupWeb3 running");let e=new a.XR({name:"embed_torus",target:"iframe_torus",targetWindow:this.torusIframe.contentWindow}),i=new a.XR({name:"embed_communication",target:"iframe_communication",targetWindow:this.torusIframe.contentWindow}),n=new W(e,{}),r=new U(i,{});n.tryWindowHandle=(t,e)=>{let i=t;if(!Array.isArray(i)&&G.includes(i.method)){if(!this.communicationProvider.isLoggedIn)throw Error("User Not Logged In");let s=O();r._handleWindow(s,{target:"_blank",features:R(S)}),i.windowId=s}n._rpcEngine.handle(i,e)},r.tryWindowHandle=(t,e)=>{let i=t;if(!Array.isArray(i)&&V.includes(i.method)){let n=O();r._handleWindow(n,{target:"_blank",features:R(T)}),i.params.windowId=n}r._rpcEngine.handle(i,e)};let s=t=>{let e=n[t],i=this;n[t]=function(t,n){let{method:r,params:s=[]}=t;if("solana_requestAccounts"===r){if(!n)return i.login({loginProvider:s[0]});i.login({loginProvider:s[0]}).then(t=>n(null,t)).catch(t=>n(t))}return e.apply(this,[t,n])}};s("request"),s("sendAsync"),s("send");let o=new Proxy(n,{deleteProperty:()=>!0}),c=new Proxy(r,{deleteProperty:()=>!0});this.provider=o,this.communicationProvider=c,await Promise.all([n._initializeState(),r._initializeState(H(H({},t),{},{dappStorageKey:this.dappStorageKey,torusAlertContainer:this.torusAlertContainer,torusIframe:this.torusIframe}))]),E.debug("Torus - injected provider")}}var X=i(45624),Q=i(1482),$=i(44445);function tt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function te(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(i),!0).forEach(function(e){(0,n.Z)(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):tt(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}class ti extends Q.v{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,n.Z)(this,"name",X.rW.TORUS_SOLANA),(0,n.Z)(this,"adapterNamespace",X.yk.SOLANA),(0,n.Z)(this,"currentChainNamespace",X.EN.SOLANA),(0,n.Z)(this,"type",X.hN.EXTERNAL),(0,n.Z)(this,"status",X.MP.NOT_READY),(0,n.Z)(this,"torusInstance",null),(0,n.Z)(this,"torusWalletOptions",void 0),(0,n.Z)(this,"initParams",void 0),(0,n.Z)(this,"loginSettings",{}),(0,n.Z)(this,"solanaProvider",null),(0,n.Z)(this,"rehydrated",!1),this.torusWalletOptions=t.adapterSettings||{},this.initParams=t.initParams||{},this.loginSettings=t.loginSettings||{},this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get provider(){if(this.status===X.MP.CONNECTED&&this.solanaProvider){var t;return(null===(t=this.solanaProvider)||void 0===t?void 0:t.provider)||null}return null}set provider(t){throw Error("Not implemented")}async init(t){let e;if(super.checkInitializationRequirements(),this.chainConfig){let{chainId:i,blockExplorer:n,displayName:r,rpcTarget:s,ticker:o,tickerName:a}=this.chainConfig;e={chainId:i,rpcTarget:s,blockExplorerUrl:n,displayName:r,tickerName:a,ticker:o,logo:""}}else{this.chainConfig=(0,X.h2)(X.EN.SOLANA,"0x1");let{blockExplorer:c,displayName:l,ticker:d,tickerName:h,rpcTarget:u,chainId:p}=this.chainConfig;e={chainId:p,rpcTarget:u,blockExplorerUrl:c,displayName:l,ticker:d,tickerName:h,logo:""}}this.torusInstance=new J(this.torusWalletOptions),X.cM.debug("initializing torus solana adapter init"),await this.torusInstance.init(te(te({showTorusButton:!1},this.initParams),{},{network:e})),this.solanaProvider=new $.TorusInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=X.MP.READY,this.emit(X.n2.READY,X.rW.TORUS_SOLANA);try{X.cM.debug("initializing torus solana adapter"),t.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(g){X.cM.error("Failed to connect with cached torus solana provider",g),this.emit(X.n2.ERRORED,g)}}async connect(){if(super.checkConnectionRequirements(),!this.torusInstance||!this.solanaProvider)throw X.Ty.notReady("Torus wallet is not initialized");this.status=X.MP.CONNECTING,this.emit(X.n2.CONNECTING,{adapter:X.rW.TORUS_SOLANA});try{await this.torusInstance.login(this.loginSettings);try{let t=this.torusInstance.provider;t.sendTransaction=this.torusInstance.sendTransaction.bind(this.torusInstance),t.signAllTransactions=this.torusInstance.signAllTransactions.bind(this.torusInstance),t.signMessage=this.torusInstance.signMessage.bind(this.torusInstance),t.signTransaction=this.torusInstance.signTransaction.bind(this.torusInstance),await this.solanaProvider.setupProvider(t)}catch(a){if(a instanceof X.up&&5010===a.code){let{chainId:e,blockExplorer:i,displayName:n,rpcTarget:r,ticker:s,tickerName:o}=this.chainConfig;await this.torusInstance.setProvider({chainId:e,rpcTarget:r,blockExplorerUrl:i,displayName:n,tickerName:o,ticker:s,logo:""})}else throw a}return this.status=X.MP.CONNECTED,this.torusInstance.showTorusButton(),this.emit(X.MP.CONNECTED,{adapter:X.rW.TORUS_SOLANA,reconnected:this.rehydrated}),this.provider}catch(c){throw this.status=X.MP.READY,this.rehydrated=!1,this.emit(X.n2.ERRORED,c),X.RM.connectionError("Failed to login with torus solana wallet")}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(!this.torusInstance)throw X.Ty.notReady("Torus wallet is not initialized");await super.disconnect(),await this.torusInstance.logout(),t.cleanup?(this.status=X.MP.NOT_READY,this.torusInstance=null,this.solanaProvider=null):this.status=X.MP.READY,this.emit(X.n2.DISCONNECTED)}async getUserInfo(){if(this.status!==X.MP.CONNECTED)throw X.RM.notConnectedError("Not connected with wallet");if(!this.torusInstance)throw X.Ty.notReady("Torus wallet is not initialized");let t=await this.torusInstance.getUserInfo();return t}setAdapterSettings(t){this.status!==X.MP.READY&&null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}}},64063:function(t){"use strict";t.exports=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;if(Array.isArray(e)){if((n=e.length)!=i.length)return!1;for(r=n;0!=r--;)if(!t(e[r],i[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((n=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(i,s[r]))return!1;for(r=n;0!=r--;){var n,r,s,o=s[r];if(!t(e[o],i[o]))return!1}return!0}return e!=e&&i!=i}},24970:function(t){"use strict";let e=t=>null!==t&&"object"==typeof t&&"function"==typeof t.pipe;e.writable=t=>e(t)&&!1!==t.writable&&"function"==typeof t._write&&"object"==typeof t._writableState,e.readable=t=>e(t)&&!1!==t.readable&&"function"==typeof t._read&&"object"==typeof t._readableState,e.duplex=t=>e.writable(t)&&e.readable(t),e.transform=t=>e.duplex(t)&&"function"==typeof t._transform,t.exports=e},27384:function(t){"use strict";t.exports=JSON.parse('{"name":"@toruslabs/solana-embed","version":"0.2.2","description":"Embed script for solana blockchain","main":"dist/solanaEmbed.cjs.js","module":"dist/solanaEmbed.esm.js","unpkg":"dist/solanaEmbed.umd.min.js","jsdelivr":"dist/solanaEmbed.umd.min.js","types":"dist/types/index.d.ts","files":["dist","src"],"scripts":{"start":"torus-scripts start","build":"torus-scripts build","build:test":"cross-env NODE_ENV=testing torus-scripts build","release":"torus-scripts release","prepack":"npm run build","lint:ts":"eslint --fix \'src/**/*.ts\'","prepare":"husky install"},"repository":{"type":"git","url":"git+https://github.com/torusresearch/solana-embed.git"},"dependencies":{"@solana/web3.js":"^1.36.0","@toruslabs/base-controllers":"^2.0.0","@toruslabs/http-helpers":"^3.0.0","@toruslabs/openlogin-jrpc":"^2.0.0","eth-rpc-errors":"^4.0.3","fast-deep-equal":"^3.1.3","is-stream":"^2.0.0","lodash-es":"^4.17.21","loglevel":"^1.8.0","pump":"^3.0.0"},"peerDependencies":{"@babel/runtime":"7.x"},"devDependencies":{"@babel/register":"^7.17.7","@commitlint/cli":"^16.2.1","@commitlint/config-conventional":"^16.2.1","@commitlint/is-ignored":"^16.2.1","@toruslabs/eslint-config-typescript":"^1.0.1","@toruslabs/torus-scripts":"^1.0.3","@babel/runtime":"^7.18.0","@types/bs58":"^4.0.1","@types/node":"^17.0.35","@types/once":"^1.4.0","@types/pump":"^1.1.1","@types/readable-stream":"^2.3.13","@typescript-eslint/eslint-plugin":"^5.25.0","@typescript-eslint/parser":"^5.25.0","cross-env":"^7.0.3","eslint":"^8.15.0","eslint-plugin-import":"^2.26.0","eslint-plugin-mocha":"^10.0.4","eslint-plugin-n":"^15.2.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-promise":"^6.0.0","eslint-plugin-simple-import-sort":"^7.0.0","eslint-plugin-tsdoc":"^0.2.16","husky":"^8.0.1","lint-staged":"^12.4.1","mocha":"^10.0.0","prettier":"^2.6.2","puppeteer":"^14.1.1","rimraf":"^3.0.2","ts-node":"^10.7.0","typescript":"^4.6.4"},"mocha":{"timeout":0},"keywords":["torus","wallet","Solana","embed","login","OAuth","crypto"],"author":"Torus Labs","license":"ISC","bugs":{"url":"https://github.com/torusresearch/solana-embed/issues"},"homepage":"https://github.com/torusresearch/solana-embed#readme","lint-staged":{"!(*d).{js,ts}":["eslint --cache --fix","prettier --write"],"*.{json, md}":["prettier --write"]},"engines":{"node":">=14.17.0","npm":">=6.x"}}')}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5418],{33946:function(r,e,n){"use strict";n.r(e),n.d(e,{getED25519Key:function(){return o}});var t=n(50108),f=n.n(t),a=n(48764).Buffer;let i=f().lowlevel;function o(r){let e;e="string"==typeof r?a.from(r,"hex"):r;let n=new Uint8Array(64),t=[i.gf(),i.gf(),i.gf(),i.gf()],f=new Uint8Array([...new Uint8Array(e),...new Uint8Array(32)]),o=new Uint8Array(32);i.crypto_hash(n,f,32),n[0]&=248,n[31]&=127,n[31]|=64,i.scalarbase(t,n),i.pack(o,t);for(let u=0;u<32;u+=1)f[u+32]=o[u];return{sk:a.from(f),pk:a.from(o)}}},78848:function(){}}]);
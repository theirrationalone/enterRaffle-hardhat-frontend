(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{50108:function(r,t,n){!function(r){"use strict";var t,o=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},e=function(){throw Error("no PRNG")},i=new Uint8Array(16),h=new Uint8Array(32);h[0]=9;var a=o(),f=o([1]),s=o([56129,1]),c=o([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=o([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),y=o([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=o([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=o([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function v(r,t,n,o){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=o>>24&255,r[t+5]=o>>16&255,r[t+6]=o>>8&255,r[t+7]=255&o}function b(r,t,n,o,e){var i,h=0;for(i=0;i<e;i++)h|=r[t+i]^n[o+i];return(1&h-1>>>8)-1}function w(r,t,n,o){return b(r,t,n,o,16)}function g(r,t,n,o){return b(r,t,n,o,32)}function _(r,t,n,o){!function(r,t,n,o){for(var e,i=255&o[0]|(255&o[1])<<8|(255&o[2])<<16|(255&o[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&o[4]|(255&o[5])<<8|(255&o[6])<<16|(255&o[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&o[8]|(255&o[9])<<8|(255&o[10])<<16|(255&o[11])<<24,b=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,w=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,_=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&o[12]|(255&o[13])<<8|(255&o[14])<<16|(255&o[15])<<24,U=i,E=h,d=a,x=f,M=s,k=c,m=u,B=y,S=l,K=p,Y=v,L=b,T=w,z=g,R=_,N=A,P=0;P<20;P+=2)M^=(e=U+T|0)<<7|e>>>25,S^=(e=M+U|0)<<9|e>>>23,T^=(e=S+M|0)<<13|e>>>19,U^=(e=T+S|0)<<18|e>>>14,K^=(e=k+E|0)<<7|e>>>25,z^=(e=K+k|0)<<9|e>>>23,E^=(e=z+K|0)<<13|e>>>19,k^=(e=E+z|0)<<18|e>>>14,R^=(e=Y+m|0)<<7|e>>>25,d^=(e=R+Y|0)<<9|e>>>23,m^=(e=d+R|0)<<13|e>>>19,Y^=(e=m+d|0)<<18|e>>>14,x^=(e=N+L|0)<<7|e>>>25,B^=(e=x+N|0)<<9|e>>>23,L^=(e=B+x|0)<<13|e>>>19,N^=(e=L+B|0)<<18|e>>>14,E^=(e=U+x|0)<<7|e>>>25,d^=(e=E+U|0)<<9|e>>>23,x^=(e=d+E|0)<<13|e>>>19,U^=(e=x+d|0)<<18|e>>>14,m^=(e=k+M|0)<<7|e>>>25,B^=(e=m+k|0)<<9|e>>>23,M^=(e=B+m|0)<<13|e>>>19,k^=(e=M+B|0)<<18|e>>>14,L^=(e=Y+K|0)<<7|e>>>25,S^=(e=L+Y|0)<<9|e>>>23,K^=(e=S+L|0)<<13|e>>>19,Y^=(e=K+S|0)<<18|e>>>14,T^=(e=N+R|0)<<7|e>>>25,z^=(e=T+N|0)<<9|e>>>23,R^=(e=z+T|0)<<13|e>>>19,N^=(e=R+z|0)<<18|e>>>14;U=U+i|0,E=E+h|0,d=d+a|0,x=x+f|0,M=M+s|0,k=k+c|0,m=m+u|0,B=B+y|0,S=S+l|0,K=K+p|0,Y=Y+v|0,L=L+b|0,T=T+w|0,z=z+g|0,R=R+_|0,N=N+A|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=E>>>0&255,r[5]=E>>>8&255,r[6]=E>>>16&255,r[7]=E>>>24&255,r[8]=d>>>0&255,r[9]=d>>>8&255,r[10]=d>>>16&255,r[11]=d>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=k>>>0&255,r[21]=k>>>8&255,r[22]=k>>>16&255,r[23]=k>>>24&255,r[24]=m>>>0&255,r[25]=m>>>8&255,r[26]=m>>>16&255,r[27]=m>>>24&255,r[28]=B>>>0&255,r[29]=B>>>8&255,r[30]=B>>>16&255,r[31]=B>>>24&255,r[32]=S>>>0&255,r[33]=S>>>8&255,r[34]=S>>>16&255,r[35]=S>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=Y>>>0&255,r[41]=Y>>>8&255,r[42]=Y>>>16&255,r[43]=Y>>>24&255,r[44]=L>>>0&255,r[45]=L>>>8&255,r[46]=L>>>16&255,r[47]=L>>>24&255,r[48]=T>>>0&255,r[49]=T>>>8&255,r[50]=T>>>16&255,r[51]=T>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=N>>>0&255,r[61]=N>>>8&255,r[62]=N>>>16&255,r[63]=N>>>24&255}(r,t,n,o)}function A(r,t,n,o){!function(r,t,n,o){for(var e,i=255&o[0]|(255&o[1])<<8|(255&o[2])<<16|(255&o[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&o[4]|(255&o[5])<<8|(255&o[6])<<16|(255&o[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&o[8]|(255&o[9])<<8|(255&o[10])<<16|(255&o[11])<<24,b=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,w=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,_=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&o[12]|(255&o[13])<<8|(255&o[14])<<16|(255&o[15])<<24,U=i,E=h,d=a,x=f,M=s,k=c,m=u,B=y,S=l,K=p,Y=v,L=b,T=w,z=g,R=_,N=A,P=0;P<20;P+=2)M^=(e=U+T|0)<<7|e>>>25,S^=(e=M+U|0)<<9|e>>>23,T^=(e=S+M|0)<<13|e>>>19,U^=(e=T+S|0)<<18|e>>>14,K^=(e=k+E|0)<<7|e>>>25,z^=(e=K+k|0)<<9|e>>>23,E^=(e=z+K|0)<<13|e>>>19,k^=(e=E+z|0)<<18|e>>>14,R^=(e=Y+m|0)<<7|e>>>25,d^=(e=R+Y|0)<<9|e>>>23,m^=(e=d+R|0)<<13|e>>>19,Y^=(e=m+d|0)<<18|e>>>14,x^=(e=N+L|0)<<7|e>>>25,B^=(e=x+N|0)<<9|e>>>23,L^=(e=B+x|0)<<13|e>>>19,N^=(e=L+B|0)<<18|e>>>14,E^=(e=U+x|0)<<7|e>>>25,d^=(e=E+U|0)<<9|e>>>23,x^=(e=d+E|0)<<13|e>>>19,U^=(e=x+d|0)<<18|e>>>14,m^=(e=k+M|0)<<7|e>>>25,B^=(e=m+k|0)<<9|e>>>23,M^=(e=B+m|0)<<13|e>>>19,k^=(e=M+B|0)<<18|e>>>14,L^=(e=Y+K|0)<<7|e>>>25,S^=(e=L+Y|0)<<9|e>>>23,K^=(e=S+L|0)<<13|e>>>19,Y^=(e=K+S|0)<<18|e>>>14,T^=(e=N+R|0)<<7|e>>>25,z^=(e=T+N|0)<<9|e>>>23,R^=(e=z+T|0)<<13|e>>>19,N^=(e=R+z|0)<<18|e>>>14;r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=k>>>0&255,r[5]=k>>>8&255,r[6]=k>>>16&255,r[7]=k>>>24&255,r[8]=Y>>>0&255,r[9]=Y>>>8&255,r[10]=Y>>>16&255,r[11]=Y>>>24&255,r[12]=N>>>0&255,r[13]=N>>>8&255,r[14]=N>>>16&255,r[15]=N>>>24&255,r[16]=m>>>0&255,r[17]=m>>>8&255,r[18]=m>>>16&255,r[19]=m>>>24&255,r[20]=B>>>0&255,r[21]=B>>>8&255,r[22]=B>>>16&255,r[23]=B>>>24&255,r[24]=S>>>0&255,r[25]=S>>>8&255,r[26]=S>>>16&255,r[27]=S>>>24&255,r[28]=K>>>0&255,r[29]=K>>>8&255,r[30]=K>>>16&255,r[31]=K>>>24&255}(r,t,n,o)}var U=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function E(r,t,n,o,e,i,h){var a,f,s=new Uint8Array(16),c=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;e>=64;){for(_(c,s,h,U),f=0;f<64;f++)r[t+f]=n[o+f]^c[f];for(f=8,a=1;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;e-=64,t+=64,o+=64}if(e>0)for(_(c,s,h,U),f=0;f<e;f++)r[t+f]=n[o+f]^c[f];return 0}function d(r,t,n,o,e){var i,h,a=new Uint8Array(16),f=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=o[h];for(;n>=64;){for(_(f,a,e,U),h=0;h<64;h++)r[t+h]=f[h];for(h=8,i=1;h<16;h++)i=i+(255&a[h])|0,a[h]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(_(f,a,e,U),h=0;h<n;h++)r[t+h]=f[h];return 0}function x(r,t,n,o,e){var i=new Uint8Array(32);A(i,o,e,U);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=o[a+16];return d(r,t,n,h,i)}function M(r,t,n,o,e,i,h){var a=new Uint8Array(32);A(a,i,h,U);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return E(r,t,n,o,e,f,a)}var k=function(r){var t,n,o,e,i,h,a,f;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=(t>>>13|n<<3)&8191,o=255&r[4]|(255&r[5])<<8,this.r[2]=(n>>>10|o<<6)&7939,e=255&r[6]|(255&r[7])<<8,this.r[3]=(o>>>7|e<<9)&8191,i=255&r[8]|(255&r[9])<<8,this.r[4]=(e>>>4|i<<12)&255,this.r[5]=i>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=(i>>>14|h<<2)&8191,a=255&r[12]|(255&r[13])<<8,this.r[7]=(h>>>11|a<<5)&8065,f=255&r[14]|(255&r[15])<<8,this.r[8]=(a>>>8|f<<8)&8191,this.r[9]=f>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function m(r,t,n,o,e,i){var h=new k(i);return h.update(n,o,e),h.finish(r,t),0}function B(r,t,n,o,e,i){var h=new Uint8Array(16);return m(h,0,n,o,e,i),w(r,t,h,0)}function S(r,t,n,o,e){var i;if(n<32)return -1;for(M(r,0,t,0,n,o,e),m(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function K(r,t,n,o,e){var i,h=new Uint8Array(32);if(n<32||(x(h,0,32,o,e),0!==B(t,16,t,32,n-32,h)))return -1;for(M(r,0,t,0,n,o,e),i=0;i<32;i++)r[i]=0;return 0}function Y(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function L(r){var t,n,o=1;for(t=0;t<16;t++)o=Math.floor((n=r[t]+o+65535)/65536),r[t]=n-65536*o;r[0]+=o-1+37*(o-1)}function T(r,t,n){for(var o,e=~(n-1),i=0;i<16;i++)o=e&(r[i]^t[i]),r[i]^=o,t[i]^=o}function z(r,t){var n,e,i,h=o(),a=o();for(n=0;n<16;n++)a[n]=t[n];for(L(a),L(a),L(a),e=0;e<2;e++){for(n=1,h[0]=a[0]-65517;n<15;n++)h[n]=a[n]-65535-(h[n-1]>>16&1),h[n-1]&=65535;h[15]=a[15]-32767-(h[14]>>16&1),i=h[15]>>16&1,h[14]&=65535,T(a,h,1-i)}for(n=0;n<16;n++)r[2*n]=255&a[n],r[2*n+1]=a[n]>>8}function R(r,t){var n=new Uint8Array(32),o=new Uint8Array(32);return z(n,r),z(o,t),g(n,0,o,0)}function N(r){var t=new Uint8Array(32);return z(t,r),1&t[0]}function P(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function C(r,t,n){for(var o=0;o<16;o++)r[o]=t[o]+n[o]}function O(r,t,n){for(var o=0;o<16;o++)r[o]=t[o]-n[o]}function F(r,t,n){var o,e,i=0,h=0,a=0,f=0,s=0,c=0,u=0,y=0,l=0,p=0,v=0,b=0,w=0,g=0,_=0,A=0,U=0,E=0,d=0,x=0,M=0,k=0,m=0,B=0,S=0,K=0,Y=0,L=0,T=0,z=0,R=0,N=n[0],P=n[1],C=n[2],O=n[3],F=n[4],I=n[5],Z=n[6],G=n[7],D=n[8],V=n[9],X=n[10],j=n[11],q=n[12],H=n[13],J=n[14],Q=n[15];i+=(o=t[0])*N,h+=o*P,a+=o*C,f+=o*O,s+=o*F,c+=o*I,u+=o*Z,y+=o*G,l+=o*D,p+=o*V,v+=o*X,b+=o*j,w+=o*q,g+=o*H,_+=o*J,A+=o*Q,h+=(o=t[1])*N,a+=o*P,f+=o*C,s+=o*O,c+=o*F,u+=o*I,y+=o*Z,l+=o*G,p+=o*D,v+=o*V,b+=o*X,w+=o*j,g+=o*q,_+=o*H,A+=o*J,U+=o*Q,a+=(o=t[2])*N,f+=o*P,s+=o*C,c+=o*O,u+=o*F,y+=o*I,l+=o*Z,p+=o*G,v+=o*D,b+=o*V,w+=o*X,g+=o*j,_+=o*q,A+=o*H,U+=o*J,E+=o*Q,f+=(o=t[3])*N,s+=o*P,c+=o*C,u+=o*O,y+=o*F,l+=o*I,p+=o*Z,v+=o*G,b+=o*D,w+=o*V,g+=o*X,_+=o*j,A+=o*q,U+=o*H,E+=o*J,d+=o*Q,s+=(o=t[4])*N,c+=o*P,u+=o*C,y+=o*O,l+=o*F,p+=o*I,v+=o*Z,b+=o*G,w+=o*D,g+=o*V,_+=o*X,A+=o*j,U+=o*q,E+=o*H,d+=o*J,x+=o*Q,c+=(o=t[5])*N,u+=o*P,y+=o*C,l+=o*O,p+=o*F,v+=o*I,b+=o*Z,w+=o*G,g+=o*D,_+=o*V,A+=o*X,U+=o*j,E+=o*q,d+=o*H,x+=o*J,M+=o*Q,u+=(o=t[6])*N,y+=o*P,l+=o*C,p+=o*O,v+=o*F,b+=o*I,w+=o*Z,g+=o*G,_+=o*D,A+=o*V,U+=o*X,E+=o*j,d+=o*q,x+=o*H,M+=o*J,k+=o*Q,y+=(o=t[7])*N,l+=o*P,p+=o*C,v+=o*O,b+=o*F,w+=o*I,g+=o*Z,_+=o*G,A+=o*D,U+=o*V,E+=o*X,d+=o*j,x+=o*q,M+=o*H,k+=o*J,m+=o*Q,l+=(o=t[8])*N,p+=o*P,v+=o*C,b+=o*O,w+=o*F,g+=o*I,_+=o*Z,A+=o*G,U+=o*D,E+=o*V,d+=o*X,x+=o*j,M+=o*q,k+=o*H,m+=o*J,B+=o*Q,p+=(o=t[9])*N,v+=o*P,b+=o*C,w+=o*O,g+=o*F,_+=o*I,A+=o*Z,U+=o*G,E+=o*D,d+=o*V,x+=o*X,M+=o*j,k+=o*q,m+=o*H,B+=o*J,S+=o*Q,v+=(o=t[10])*N,b+=o*P,w+=o*C,g+=o*O,_+=o*F,A+=o*I,U+=o*Z,E+=o*G,d+=o*D,x+=o*V,M+=o*X,k+=o*j,m+=o*q,B+=o*H,S+=o*J,K+=o*Q,b+=(o=t[11])*N,w+=o*P,g+=o*C,_+=o*O,A+=o*F,U+=o*I,E+=o*Z,d+=o*G,x+=o*D,M+=o*V,k+=o*X,m+=o*j,B+=o*q,S+=o*H,K+=o*J,Y+=o*Q,w+=(o=t[12])*N,g+=o*P,_+=o*C,A+=o*O,U+=o*F,E+=o*I,d+=o*Z,x+=o*G,M+=o*D,k+=o*V,m+=o*X,B+=o*j,S+=o*q,K+=o*H,Y+=o*J,L+=o*Q,g+=(o=t[13])*N,_+=o*P,A+=o*C,U+=o*O,E+=o*F,d+=o*I,x+=o*Z,M+=o*G,k+=o*D,m+=o*V,B+=o*X,S+=o*j,K+=o*q,Y+=o*H,L+=o*J,T+=o*Q,_+=(o=t[14])*N,A+=o*P,U+=o*C,E+=o*O,d+=o*F,x+=o*I,M+=o*Z,k+=o*G,m+=o*D,B+=o*V,S+=o*X,K+=o*j,Y+=o*q,L+=o*H,T+=o*J,z+=o*Q,A+=(o=t[15])*N,U+=o*P,E+=o*C,d+=o*O,x+=o*F,M+=o*I,k+=o*Z,m+=o*G,B+=o*D,S+=o*V,K+=o*X,Y+=o*j,L+=o*q,T+=o*H,z+=o*J,R+=o*Q,i+=38*U,h+=38*E,a+=38*d,f+=38*x,s+=38*M,c+=38*k,u+=38*m,y+=38*B,l+=38*S,p+=38*K,v+=38*Y,b+=38*L,w+=38*T,g+=38*z,_+=38*R,e=Math.floor((o=i+(e=1)+65535)/65536),i=o-65536*e,e=Math.floor((o=h+e+65535)/65536),h=o-65536*e,e=Math.floor((o=a+e+65535)/65536),a=o-65536*e,e=Math.floor((o=f+e+65535)/65536),f=o-65536*e,e=Math.floor((o=s+e+65535)/65536),s=o-65536*e,e=Math.floor((o=c+e+65535)/65536),c=o-65536*e,e=Math.floor((o=u+e+65535)/65536),u=o-65536*e,e=Math.floor((o=y+e+65535)/65536),y=o-65536*e,e=Math.floor((o=l+e+65535)/65536),l=o-65536*e,e=Math.floor((o=p+e+65535)/65536),p=o-65536*e,e=Math.floor((o=v+e+65535)/65536),v=o-65536*e,e=Math.floor((o=b+e+65535)/65536),b=o-65536*e,e=Math.floor((o=w+e+65535)/65536),w=o-65536*e,e=Math.floor((o=g+e+65535)/65536),g=o-65536*e,e=Math.floor((o=_+e+65535)/65536),_=o-65536*e,e=Math.floor((o=A+e+65535)/65536),A=o-65536*e,i+=e-1+37*(e-1),e=Math.floor((o=i+(e=1)+65535)/65536),i=o-65536*e,e=Math.floor((o=h+e+65535)/65536),h=o-65536*e,e=Math.floor((o=a+e+65535)/65536),a=o-65536*e,e=Math.floor((o=f+e+65535)/65536),f=o-65536*e,e=Math.floor((o=s+e+65535)/65536),s=o-65536*e,e=Math.floor((o=c+e+65535)/65536),c=o-65536*e,e=Math.floor((o=u+e+65535)/65536),u=o-65536*e,e=Math.floor((o=y+e+65535)/65536),y=o-65536*e,e=Math.floor((o=l+e+65535)/65536),l=o-65536*e,e=Math.floor((o=p+e+65535)/65536),p=o-65536*e,e=Math.floor((o=v+e+65535)/65536),v=o-65536*e,e=Math.floor((o=b+e+65535)/65536),b=o-65536*e,e=Math.floor((o=w+e+65535)/65536),w=o-65536*e,e=Math.floor((o=g+e+65535)/65536),g=o-65536*e,e=Math.floor((o=_+e+65535)/65536),_=o-65536*e,e=Math.floor((o=A+e+65535)/65536),A=o-65536*e,i+=e-1+37*(e-1),r[0]=i,r[1]=h,r[2]=a,r[3]=f,r[4]=s,r[5]=c,r[6]=u,r[7]=y,r[8]=l,r[9]=p,r[10]=v,r[11]=b,r[12]=w,r[13]=g,r[14]=_,r[15]=A}function I(r,t){F(r,t,t)}function Z(r,t){var n,e=o();for(n=0;n<16;n++)e[n]=t[n];for(n=253;n>=0;n--)I(e,e),2!==n&&4!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function G(r,t){var n,e=o();for(n=0;n<16;n++)e[n]=t[n];for(n=250;n>=0;n--)I(e,e),1!==n&&F(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function D(r,t,n){var e,i,h=new Uint8Array(32),a=new Float64Array(80),f=o(),c=o(),u=o(),y=o(),l=o(),p=o();for(i=0;i<31;i++)h[i]=t[i];for(h[31]=127&t[31]|64,h[0]&=248,P(a,n),i=0;i<16;i++)c[i]=a[i],y[i]=f[i]=u[i]=0;for(i=254,f[0]=y[0]=1;i>=0;--i)T(f,c,e=h[i>>>3]>>>(7&i)&1),T(u,y,e),C(l,f,u),O(f,f,u),C(u,c,y),O(c,c,y),I(y,l),I(p,f),F(f,u,f),F(u,c,l),C(l,f,u),O(f,f,u),I(c,f),O(u,y,p),F(f,u,s),C(f,f,y),F(u,u,f),F(f,y,p),F(y,c,a),I(c,l),T(f,c,e),T(u,y,e);for(i=0;i<16;i++)a[i+16]=f[i],a[i+32]=u[i],a[i+48]=c[i],a[i+64]=y[i];var v=a.subarray(32),b=a.subarray(16);return Z(v,v),F(b,b,v),z(r,b),0}function V(r,t){return D(r,t,h)}function X(r,t){return e(t,32),V(r,t)}function j(r,t,n){var o=new Uint8Array(32);return D(o,n,t),A(r,i,o,U)}k.prototype.blocks=function(r,t,n){for(var o,e,i,h,a,f,s,c,u,y,l,p,v,b,w,g,_,A,U,E=this.fin?0:2048,d=this.h[0],x=this.h[1],M=this.h[2],k=this.h[3],m=this.h[4],B=this.h[5],S=this.h[6],K=this.h[7],Y=this.h[8],L=this.h[9],T=this.r[0],z=this.r[1],R=this.r[2],N=this.r[3],P=this.r[4],C=this.r[5],O=this.r[6],F=this.r[7],I=this.r[8],Z=this.r[9];n>=16;)d+=8191&(o=255&r[t+0]|(255&r[t+1])<<8),x+=(o>>>13|(e=255&r[t+2]|(255&r[t+3])<<8)<<3)&8191,M+=(e>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6)&8191,k+=(i>>>7|(h=255&r[t+6]|(255&r[t+7])<<8)<<9)&8191,m+=(h>>>4|(a=255&r[t+8]|(255&r[t+9])<<8)<<12)&8191,B+=a>>>1&8191,S+=(a>>>14|(f=255&r[t+10]|(255&r[t+11])<<8)<<2)&8191,K+=(f>>>11|(s=255&r[t+12]|(255&r[t+13])<<8)<<5)&8191,Y+=(s>>>8|(c=255&r[t+14]|(255&r[t+15])<<8)<<8)&8191,L+=c>>>5|E,u=(y=(u=0)+d*T+x*(5*Z)+M*(5*I)+k*(5*F)+m*(5*O))>>>13,y&=8191,y+=B*(5*C)+S*(5*P)+K*(5*N)+Y*(5*R)+L*(5*z),u+=y>>>13,y&=8191,u=(l=u+d*z+x*T+M*(5*Z)+k*(5*I)+m*(5*F))>>>13,l&=8191,l+=B*(5*O)+S*(5*C)+K*(5*P)+Y*(5*N)+L*(5*R),u+=l>>>13,l&=8191,u=(p=u+d*R+x*z+M*T+k*(5*Z)+m*(5*I))>>>13,p&=8191,p+=B*(5*F)+S*(5*O)+K*(5*C)+Y*(5*P)+L*(5*N),u+=p>>>13,p&=8191,u=(v=u+d*N+x*R+M*z+k*T+m*(5*Z))>>>13,v&=8191,v+=B*(5*I)+S*(5*F)+K*(5*O)+Y*(5*C)+L*(5*P),u+=v>>>13,v&=8191,u=(b=u+d*P+x*N+M*R+k*z+m*T)>>>13,b&=8191,b+=B*(5*Z)+S*(5*I)+K*(5*F)+Y*(5*O)+L*(5*C),u+=b>>>13,b&=8191,u=(w=u+d*C+x*P+M*N+k*R+m*z)>>>13,w&=8191,w+=B*T+S*(5*Z)+K*(5*I)+Y*(5*F)+L*(5*O),u+=w>>>13,w&=8191,u=(g=u+d*O+x*C+M*P+k*N+m*R)>>>13,g&=8191,g+=B*z+S*T+K*(5*Z)+Y*(5*I)+L*(5*F),u+=g>>>13,g&=8191,u=(_=u+d*F+x*O+M*C+k*P+m*N)>>>13,_&=8191,_+=B*R+S*z+K*T+Y*(5*Z)+L*(5*I),u+=_>>>13,_&=8191,u=(A=u+d*I+x*F+M*O+k*C+m*P)>>>13,A&=8191,A+=B*N+S*R+K*z+Y*T+L*(5*Z),u+=A>>>13,A&=8191,u=(U=u+d*Z+x*I+M*F+k*O+m*C)>>>13,U&=8191,U+=B*P+S*N+K*R+Y*z+L*T,u+=U>>>13,U&=8191,y=8191&(u=(u=(u<<2)+u|0)+y|0),u>>>=13,l+=u,d=y,x=l,M=p,k=v,m=b,B=w,S=g,K=_,Y=A,L=U,t+=16,n-=16;this.h[0]=d,this.h[1]=x,this.h[2]=M,this.h[3]=k,this.h[4]=m,this.h[5]=B,this.h[6]=S,this.h[7]=K,this.h[8]=Y,this.h[9]=L},k.prototype.finish=function(r,t){var n,o,e,i,h=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,i=1;i<10;i++)h[i]=this.h[i]+n,n=h[i]>>>13,h[i]&=8191;for(h[9]-=8192,o=(1^n)-1,i=0;i<10;i++)h[i]&=o;for(i=0,o=~o;i<10;i++)this.h[i]=this.h[i]&o|h[i];for(i=1,this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,e=this.h[0]+this.pad[0],this.h[0]=65535&e;i<8;i++)e=(this.h[i]+this.pad[i]|0)+(e>>>16)|0,this.h[i]=65535&e;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},k.prototype.update=function(r,t,n){var o,e;if(this.leftover){for((e=16-this.leftover)>n&&(e=n),o=0;o<e;o++)this.buffer[this.leftover+o]=r[t+o];if(n-=e,t+=e,this.leftover+=e,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(e=n-n%16,this.blocks(r,t,e),t+=e,n-=e),n){for(o=0;o<n;o++)this.buffer[this.leftover+o]=r[t+o];this.leftover+=n}};var q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function H(r,t,n,o){for(var e,i,h,a,f,s,c,u,y,l,p,v,b,w,g,_,A,U,E,d,x,M,k,m,B,S,K=new Int32Array(16),Y=new Int32Array(16),L=r[0],T=r[1],z=r[2],R=r[3],N=r[4],P=r[5],C=r[6],O=r[7],F=t[0],I=t[1],Z=t[2],G=t[3],D=t[4],V=t[5],X=t[6],j=t[7],H=0;o>=128;){for(E=0;E<16;E++)d=8*E+H,K[E]=n[d+0]<<24|n[d+1]<<16|n[d+2]<<8|n[d+3],Y[E]=n[d+4]<<24|n[d+5]<<16|n[d+6]<<8|n[d+7];for(E=0;E<80;E++)if(e=L,i=T,h=z,a=R,f=N,s=P,c=C,u=O,y=F,l=I,p=Z,v=G,b=D,w=V,g=X,_=j,x=O,k=65535&(M=j),m=M>>>16,B=65535&x,S=x>>>16,x=(N>>>14|D<<18)^(N>>>18|D<<14)^(D>>>9|N<<23),k+=65535&(M=(D>>>14|N<<18)^(D>>>18|N<<14)^(N>>>9|D<<23)),m+=M>>>16,B+=65535&x,S+=x>>>16,x=N&P^~N&C,k+=65535&(M=D&V^~D&X),m+=M>>>16,B+=65535&x,S+=x>>>16,x=q[2*E],k+=65535&(M=q[2*E+1]),m+=M>>>16,B+=65535&x,S+=x>>>16,x=K[E%16],k+=65535&(M=Y[E%16]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,A=65535&B|S<<16,U=65535&k|m<<16,x=A,k=65535&(M=U),m=M>>>16,B=65535&x,S=x>>>16,x=(L>>>28|F<<4)^(F>>>2|L<<30)^(F>>>7|L<<25),k+=65535&(M=(F>>>28|L<<4)^(L>>>2|F<<30)^(L>>>7|F<<25)),m+=M>>>16,B+=65535&x,S+=x>>>16,x=L&T^L&z^T&z,k+=65535&(M=F&I^F&Z^I&Z),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,u=65535&B|S<<16,_=65535&k|m<<16,x=a,k=65535&(M=v),m=M>>>16,B=65535&x,S=x>>>16,x=A,k+=65535&(M=U),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,a=65535&B|S<<16,v=65535&k|m<<16,T=e,z=i,R=h,N=a,P=f,C=s,O=c,L=u,I=y,Z=l,G=p,D=v,V=b,X=w,j=g,F=_,E%16==15)for(d=0;d<16;d++)x=K[d],k=65535&(M=Y[d]),m=M>>>16,B=65535&x,S=x>>>16,x=K[(d+9)%16],k+=65535&(M=Y[(d+9)%16]),m+=M>>>16,B+=65535&x,S+=x>>>16,x=((A=K[(d+1)%16])>>>1|(U=Y[(d+1)%16])<<31)^(A>>>8|U<<24)^A>>>7,k+=65535&(M=(U>>>1|A<<31)^(U>>>8|A<<24)^(U>>>7|A<<25)),m+=M>>>16,B+=65535&x,S+=x>>>16,x=((A=K[(d+14)%16])>>>19|(U=Y[(d+14)%16])<<13)^(U>>>29|A<<3)^A>>>6,k+=65535&(M=(U>>>19|A<<13)^(A>>>29|U<<3)^(U>>>6|A<<26)),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,K[d]=65535&B|S<<16,Y[d]=65535&k|m<<16;x=L,k=65535&(M=F),m=M>>>16,B=65535&x,S=x>>>16,x=r[0],k+=65535&(M=t[0]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[0]=L=65535&B|S<<16,t[0]=F=65535&k|m<<16,x=T,k=65535&(M=I),m=M>>>16,B=65535&x,S=x>>>16,x=r[1],k+=65535&(M=t[1]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[1]=T=65535&B|S<<16,t[1]=I=65535&k|m<<16,x=z,k=65535&(M=Z),m=M>>>16,B=65535&x,S=x>>>16,x=r[2],k+=65535&(M=t[2]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[2]=z=65535&B|S<<16,t[2]=Z=65535&k|m<<16,x=R,k=65535&(M=G),m=M>>>16,B=65535&x,S=x>>>16,x=r[3],k+=65535&(M=t[3]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[3]=R=65535&B|S<<16,t[3]=G=65535&k|m<<16,x=N,k=65535&(M=D),m=M>>>16,B=65535&x,S=x>>>16,x=r[4],k+=65535&(M=t[4]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[4]=N=65535&B|S<<16,t[4]=D=65535&k|m<<16,x=P,k=65535&(M=V),m=M>>>16,B=65535&x,S=x>>>16,x=r[5],k+=65535&(M=t[5]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[5]=P=65535&B|S<<16,t[5]=V=65535&k|m<<16,x=C,k=65535&(M=X),m=M>>>16,B=65535&x,S=x>>>16,x=r[6],k+=65535&(M=t[6]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[6]=C=65535&B|S<<16,t[6]=X=65535&k|m<<16,x=O,k=65535&(M=j),m=M>>>16,B=65535&x,S=x>>>16,x=r[7],k+=65535&(M=t[7]),m+=M>>>16,B+=65535&x,S+=x>>>16,m+=k>>>16,B+=m>>>16,S+=B>>>16,r[7]=O=65535&B|S<<16,t[7]=j=65535&k|m<<16,H+=128,o-=128}return o}function J(r,t,n){var o,e=new Int32Array(8),i=new Int32Array(8),h=new Uint8Array(256),a=n;for(e[0]=1779033703,e[1]=3144134277,e[2]=1013904242,e[3]=2773480762,e[4]=1359893119,e[5]=2600822924,e[6]=528734635,e[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,H(e,i,t,n),n%=128,o=0;o<n;o++)h[o]=t[a-n+o];for(h[n]=128,h[(n=256-128*(n<112?1:0))-9]=0,v(h,n-8,a/536870912|0,a<<3),H(e,i,h,n),o=0;o<8;o++)v(r,8*o,e[o],i[o]);return 0}function Q(r,t){var n=o(),e=o(),i=o(),h=o(),a=o(),f=o(),s=o(),c=o(),y=o();O(n,r[1],r[0]),O(y,t[1],t[0]),F(n,n,y),C(e,r[0],r[1]),C(y,t[0],t[1]),F(e,e,y),F(i,r[3],t[3]),F(i,i,u),F(h,r[2],t[2]),C(h,h,h),O(a,e,n),O(f,h,i),C(s,h,i),C(c,e,n),F(r[0],a,f),F(r[1],c,s),F(r[2],s,f),F(r[3],a,c)}function W(r,t,n){var o;for(o=0;o<4;o++)T(r[o],t[o],n)}function $(r,t){var n=o(),e=o(),i=o();Z(i,t[2]),F(n,t[0],i),F(e,t[1],i),z(r,e),r[31]^=N(n)<<7}function rr(r,t,n){var o,e;for(Y(r[0],a),Y(r[1],f),Y(r[2],f),Y(r[3],a),e=255;e>=0;--e)W(r,t,o=n[e/8|0]>>(7&e)&1),Q(t,r),Q(r,r),W(r,t,o)}function rt(r,t){var n=[o(),o(),o(),o()];Y(n[0],y),Y(n[1],l),Y(n[2],f),F(n[3],y,l),rr(r,n,t)}function rn(r,t,n){var i,h=new Uint8Array(64),a=[o(),o(),o(),o()];for(n||e(t,32),J(h,t,32),h[0]&=248,h[31]&=127,h[31]|=64,rt(a,h),$(r,a),i=0;i<32;i++)t[i+32]=r[i];return 0}var ro=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function re(r,t){var n,o,e,i;for(o=63;o>=32;--o){for(n=0,e=o-32,i=o-12;e<i;++e)t[e]+=n-16*t[o]*ro[e-(o-32)],n=Math.floor((t[e]+128)/256),t[e]-=256*n;t[e]+=n,t[o]=0}for(e=0,n=0;e<32;e++)t[e]+=n-(t[31]>>4)*ro[e],n=t[e]>>8,t[e]&=255;for(e=0;e<32;e++)t[e]-=n*ro[e];for(o=0;o<32;o++)t[o+1]+=t[o]>>8,r[o]=255&t[o]}function ri(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;re(r,n)}function rh(r,t,n,e){var i,h,a=new Uint8Array(64),f=new Uint8Array(64),s=new Uint8Array(64),c=new Float64Array(64),u=[o(),o(),o(),o()];for(J(a,e,32),a[0]&=248,a[31]&=127,a[31]|=64,i=0;i<n;i++)r[64+i]=t[i];for(i=0;i<32;i++)r[32+i]=a[32+i];for(J(s,r.subarray(32),n+32),ri(s),rt(u,s),$(r,u),i=32;i<64;i++)r[i]=e[i];for(J(f,r,n+64),ri(f),i=0;i<64;i++)c[i]=0;for(i=0;i<32;i++)c[i]=s[i];for(i=0;i<32;i++)for(h=0;h<32;h++)c[i+h]+=f[i]*a[h];return re(r.subarray(32),c),n+64}function ra(r,t,n,e){var i,h,s,u,y,l,v,b,w=new Uint8Array(32),_=new Uint8Array(64),A=[o(),o(),o(),o()],U=[o(),o(),o(),o()];if(n<64||(i=o(),h=o(),s=o(),u=o(),y=o(),l=o(),v=o(),(Y(U[2],f),P(U[1],e),I(s,U[1]),F(u,s,c),O(s,s,U[2]),C(u,U[2],u),I(y,u),I(l,y),F(v,l,y),F(i,v,s),F(i,i,u),G(i,i),F(i,i,s),F(i,i,u),F(i,i,u),F(U[0],i,u),I(h,U[0]),F(h,h,u),R(h,s)&&F(U[0],U[0],p),I(h,U[0]),F(h,h,u),R(h,s))?-1:(N(U[0])===e[31]>>7&&O(U[0],a,U[0]),F(U[3],U[0],U[1]),0)))return -1;for(b=0;b<n;b++)r[b]=t[b];for(b=0;b<32;b++)r[b+32]=e[b];if(J(_,r,n),ri(_),rr(A,U,_),rt(U,t.subarray(32)),Q(A,U),$(w,A),n-=64,g(t,0,w,0)){for(b=0;b<n;b++)r[b]=0;return -1}for(b=0;b<n;b++)r[b]=t[b+64];return n}function rf(r,t){if(32!==r.length)throw Error("bad key size");if(24!==t.length)throw Error("bad nonce size")}function rs(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw TypeError("unexpected type, use Uint8Array")}function rc(r){for(var t=0;t<r.length;t++)r[t]=0}r.lowlevel={crypto_core_hsalsa20:A,crypto_stream_xor:M,crypto_stream:x,crypto_stream_salsa20_xor:E,crypto_stream_salsa20:d,crypto_onetimeauth:m,crypto_onetimeauth_verify:B,crypto_verify_16:w,crypto_verify_32:g,crypto_secretbox:S,crypto_secretbox_open:K,crypto_scalarmult:D,crypto_scalarmult_base:V,crypto_box_beforenm:j,crypto_box_afternm:S,crypto_box:function(r,t,n,o,e,i){var h=new Uint8Array(32);return j(h,e,i),S(r,t,n,o,h)},crypto_box_open:function(r,t,n,o,e,i){var h=new Uint8Array(32);return j(h,e,i),K(r,t,n,o,h)},crypto_box_keypair:X,crypto_hash:J,crypto_sign:rh,crypto_sign_keypair:rn,crypto_sign_open:ra,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:o,D:c,L:ro,pack:$,pack25519:z,unpack25519:P,M:F,A:C,S:I,Z:O,pow2523:G,add:Q,set25519:Y,modL:re,scalarmult:rr,scalarbase:rt},r.randomBytes=function(r){var t=new Uint8Array(r);return e(t,r),t},r.secretbox=function(r,t,n){rs(r,t,n),rf(n,t);for(var o=new Uint8Array(32+r.length),e=new Uint8Array(o.length),i=0;i<r.length;i++)o[i+32]=r[i];return S(e,o,o.length,t,n),e.subarray(16)},r.secretbox.open=function(r,t,n){rs(r,t,n),rf(n,t);for(var o=new Uint8Array(16+r.length),e=new Uint8Array(o.length),i=0;i<r.length;i++)o[i+16]=r[i];return o.length<32||0!==K(e,o,o.length,t,n)?null:e.subarray(32)},r.secretbox.keyLength=32,r.secretbox.nonceLength=24,r.secretbox.overheadLength=16,r.scalarMult=function(r,t){if(rs(r,t),32!==r.length)throw Error("bad n size");if(32!==t.length)throw Error("bad p size");var n=new Uint8Array(32);return D(n,r,t),n},r.scalarMult.base=function(r){if(rs(r),32!==r.length)throw Error("bad n size");var t=new Uint8Array(32);return V(t,r),t},r.scalarMult.scalarLength=32,r.scalarMult.groupElementLength=32,r.box=function(t,n,o,e){var i=r.box.before(o,e);return r.secretbox(t,n,i)},r.box.before=function(r,t){rs(r,t),function(r,t){if(32!==r.length)throw Error("bad public key size");if(32!==t.length)throw Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return j(n,r,t),n},r.box.after=r.secretbox,r.box.open=function(t,n,o,e){var i=r.box.before(o,e);return r.secretbox.open(t,n,i)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(32);return X(r,t),{publicKey:r,secretKey:t}},r.box.keyPair.fromSecretKey=function(r){if(rs(r),32!==r.length)throw Error("bad secret key size");var t=new Uint8Array(32);return V(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=32,r.box.secretKeyLength=32,r.box.sharedKeyLength=32,r.box.nonceLength=24,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,t){if(rs(r,t),64!==t.length)throw Error("bad secret key size");var n=new Uint8Array(64+r.length);return rh(n,r,r.length,t),n},r.sign.open=function(r,t){if(rs(r,t),32!==t.length)throw Error("bad public key size");var n=new Uint8Array(r.length),o=ra(n,r,r.length,t);if(o<0)return null;for(var e=new Uint8Array(o),i=0;i<e.length;i++)e[i]=n[i];return e},r.sign.detached=function(t,n){for(var o=r.sign(t,n),e=new Uint8Array(64),i=0;i<e.length;i++)e[i]=o[i];return e},r.sign.detached.verify=function(r,t,n){if(rs(r,t,n),64!==t.length)throw Error("bad signature size");if(32!==n.length)throw Error("bad public key size");var o,e=new Uint8Array(64+r.length),i=new Uint8Array(64+r.length);for(o=0;o<64;o++)e[o]=t[o];for(o=0;o<r.length;o++)e[o+64]=r[o];return ra(i,e,e.length,n)>=0},r.sign.keyPair=function(){var r=new Uint8Array(32),t=new Uint8Array(64);return rn(r,t),{publicKey:r,secretKey:t}},r.sign.keyPair.fromSecretKey=function(r){if(rs(r),64!==r.length)throw Error("bad secret key size");for(var t=new Uint8Array(32),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(rs(r),32!==r.length)throw Error("bad seed size");for(var t=new Uint8Array(32),n=new Uint8Array(64),o=0;o<32;o++)n[o]=r[o];return rn(t,n,!0),{publicKey:t,secretKey:n}},r.sign.publicKeyLength=32,r.sign.secretKeyLength=64,r.sign.seedLength=32,r.sign.signatureLength=64,r.hash=function(r){rs(r);var t=new Uint8Array(64);return J(t,r,r.length),t},r.hash.hashLength=64,r.verify=function(r,t){return rs(r,t),0!==r.length&&0!==t.length&&r.length===t.length&&0===b(r,0,t,0,r.length)},r.setPRNG=function(r){e=r},(t="undefined"!=typeof self?self.crypto||self.msCrypto:null)&&t.getRandomValues?r.setPRNG(function(r,n){var o,e=new Uint8Array(n);for(o=0;o<n;o+=65536)t.getRandomValues(e.subarray(o,o+Math.min(n-o,65536)));for(o=0;o<n;o++)r[o]=e[o];rc(e)}):(t=n(78848))&&t.randomBytes&&r.setPRNG(function(r,n){var o,e=t.randomBytes(n);for(o=0;o<n;o++)r[o]=e[o];rc(e)})}(r.exports?r.exports:self.nacl=self.nacl||{})}}]);
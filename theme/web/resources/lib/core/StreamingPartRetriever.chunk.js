/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{465:function(Aa,xa,r){r.r(xa);var oa=r(0),na=r(1);r.n(na);var ma=r(2),fa=r(158);Aa=r(48);var da=r(99),aa=r(262),y=r(77),w=r(261);r=r(394);var f=window,a=function(){function h(n,z,x){var ba=-1===n.indexOf("?")?"?":"&";switch(z){case y.a.NEVER_CACHE:this.url=n+ba+"_="+Object(na.uniqueId)();break;default:this.url=n}this.rf=x;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=w.a.NOT_STARTED}h.prototype.start=function(n,z){var x=this,ba=this,ia=this.request,ca;ba.ly=0;n&&Object.keys(n).forEach(function(ea){x.request.setRequestHeader(ea,n[ea])});z&&(this.request.withCredentials=z);this.nF=setInterval(function(){var ea=0===window.document.URL.indexOf("file:///");ea=200===ia.status||
ea&&0===ia.status;if(ia.readyState!==w.b.DONE||ea){try{ia.responseText}catch(ja){return}ba.ly<ia.responseText.length&&(ca=ba.Tka())&&ba.trigger(h.Events.DATA,[ca]);0===ia.readyState&&(clearInterval(ba.nF),ba.trigger(h.Events.DONE))}else clearInterval(ba.nF),ba.trigger(h.Events.DONE,["Error received return status "+ia.status])},1E3);this.request.send(null);this.status=w.a.STARTED};h.prototype.Tka=function(){var n=this.request,z=n.responseText;if(0!==z.length)if(this.ly===z.length)clearInterval(this.nF),
this.trigger(h.Events.DONE);else return z=Math.min(this.ly+3E6,z.length),n=f.rW(n,this.ly,!0,z),this.ly=z,n};h.prototype.abort=function(){clearInterval(this.nF);var n=this;this.request.onreadystatechange=function(){Object(ma.j)("StreamingRequest aborted");n.status=w.a.ABORTED;return n.trigger(h.Events.ABORTED)};this.request.abort()};h.prototype.finish=function(){var n=this;this.request.onreadystatechange=function(){n.status=w.a.SUCCESS;return n.trigger(h.Events.DONE)};this.request.abort()};h.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return h}();Object(Aa.a)(a);var b;(function(h){h[h.LOCAL_HEADER=0]="LOCAL_HEADER";h[h.FILE=1]="FILE";h[h.CENTRAL_DIR=2]="CENTRAL_DIR"})(b||(b={}));var e=function(h){function n(){var z=h.call(this)||this;z.buffer="";z.state=b.LOCAL_HEADER;z.BO=4;z.Jm=null;z.lu=fa.c;z.jo={};return z}Object(oa.c)(n,h);n.prototype.Mka=function(z){var x;for(z=this.buffer+z;z.length>=this.lu;)switch(this.state){case b.LOCAL_HEADER:this.Jm=x=this.Xka(z.slice(0,this.lu));if(x.Uu!==
fa.g)throw Error("Wrong signature in local header: "+x.Uu);z=z.slice(this.lu);this.state=b.FILE;this.lu=x.RI+x.ar+x.ax+this.BO;this.trigger(n.Events.HEADER,[x]);break;case b.FILE:this.Jm.name=z.slice(0,this.Jm.ar);this.jo[this.Jm.name]=this.Jm;x=this.lu-this.BO;var ba=z.slice(this.Jm.ar+this.Jm.ax,x);this.trigger(n.Events.FILE,[this.Jm.name,ba,this.Jm.iJ]);z=z.slice(x);if(z.slice(0,this.BO)===fa.h)this.state=b.LOCAL_HEADER,this.lu=fa.c;else return this.state=b.CENTRAL_DIR,!0}this.buffer=z;return!1};
n.Events={HEADER:"header",FILE:"file"};return n}(aa.a);Object(Aa.a)(e);Aa=function(h){function n(z,x,ba,ia,ca){ba=h.call(this,z,ba,ia)||this;ba.url=z;ba.stream=new a(z,x);ba.Ed=new e;ba.BZ=window.createPromiseCapability();ba.e_={};ba.rf=ca;return ba}Object(oa.c)(n,h);n.prototype.ez=function(z){var x=this;this.request([this.Jj,this.ol,this.Ij]);this.stream.addEventListener(a.Events.DATA,function(ba){try{if(x.Ed.Mka(ba))return x.stream.finish()}catch(ia){throw x.stream.abort(),x.tq(ia),z(ia),ia;}});
this.stream.addEventListener(a.Events.DONE,function(ba){x.rka=!0;x.BZ.resolve();ba&&(x.tq(ba),z(ba))});this.Ed.addEventListener(e.Events.HEADER,Object(na.bind)(this.d_,this));this.Ed.addEventListener(e.Events.FILE,Object(na.bind)(this.mla,this));return this.stream.start(this.rf,this.withCredentials)};n.prototype.oW=function(z){var x=this;this.BZ.promise.then(function(){z(Object.keys(x.Ed.jo))})};n.prototype.So=function(){return!0};n.prototype.request=function(z){var x=this;this.rka&&z.forEach(function(ba){x.e_[ba]||
x.vqa(ba)})};n.prototype.d_=function(){};n.prototype.abort=function(){this.stream&&this.stream.abort()};n.prototype.vqa=function(z){this.trigger(da.a.Events.PART_READY,[{gb:z,error:"Requested part not found",Si:!1,sg:!1}])};n.prototype.mla=function(z,x,ba){this.e_[z]=!0;this.trigger(da.a.Events.PART_READY,[{gb:z,data:x,Si:!1,sg:!1,error:null,hd:ba}])};return n}(da.a);Object(r.a)(Aa);Object(r.b)(Aa);xa["default"]=Aa}}]);}).call(this || window)

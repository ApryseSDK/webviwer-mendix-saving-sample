(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1509:function(e,t,n){e.exports={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1528:function(e,t,n){"use strict";n.r(t);n(291),n(54),n(35),n(88),n(6),n(36),n(18),n(10),n(12),n(11),n(7),n(8),n(9),n(15),n(14),n(19),n(17),n(52),n(22),n(66),n(67),n(68),n(69),n(39),n(42),n(23),n(24),n(43),n(65);var r=n(0),a=n.n(r),o=n(5),i=n(3),c=n(2),l=n(394),u=n(13),s=n(20),f=n(1422),d=n(1271),p=n(131),h=n(1),m=n(16),v=n.n(m),y=n(103),g=n(336),b=n(225),E=n(173),w=n(48),O=n(104);n(1509);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new S(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function d(){}function p(){}function h(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(I([])));y&&y!==t&&n.call(y,o)&&(m=y);var g=h.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==x(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function I(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,r(g,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=I,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function F(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var I="all",_="currentPage",N="currentView",C="specify",D={OFFICE:{label:"OFFICE (*.pptx,*.docx,*.xlsx)",extension:"office"},PDF:{label:"PDF (*.pdf)",extension:"pdf"},IMAGE:{label:"PNG (*.png)",extension:"png"},OFFICE_EDITOR:{label:"Word Document (*.docx)",extension:"office"}},k=[".ppt",".xls"],P=function(){var e=Object(o.f)(),t=Object(o.d)(),n=Object(l.a)().t,m=L(Object(o.e)((function(e){return[i.a.isElementOpen(e,u.a.SAVE_MODAL),i.a.getActiveDocumentViewerKey(e)]})),2),x=m[0],S=m[1],P=[D.PDF,D.IMAGE],T=L(Object(r.useState)(P),2),A=T[0],M=T[1],G=L(Object(r.useState)(""),2),R=G[0],H=G[1],V=L(Object(r.useState)(A[0]),2),W=V[0],J=V[1],K=L(Object(r.useState)(I),2),U=K[0],Y=K[1],B=L(Object(r.useState)(),2),$=B[0],q=B[1],z=L(Object(r.useState)(!0),2),Q=z[0],X=z[1],Z=L(Object(r.useState)(!1),2),ee=Z[0],te=Z[1],ne=L(Object(r.useState)(1),2),re=ne[0],ae=ne[1],oe=L(Object(r.useState)(""),2),ie=oe[0],ce=oe[1],le=L(Object(r.useState)(""),2),ue=le[0],se=le[1];Object(r.useEffect)((function(){var e=function(){var e,t=(e=j().mark((function e(){var t,n,r,a,o,i;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=h.a.getDocument(S))){e.next=19;break}if(J(D.PDF),M(P),n=t.getFilename(),r=n.substring(0,n.lastIndexOf("."))||n,H(r),a=t.getType(),se(a),a!==w.a.OFFICE){e.next=17;break}return o=n.split("."),i=".".concat(o[o.length-1]),k.includes(i)||M([].concat(P,[D.OFFICE])),e.next=15,t.getDocumentCompletePromise();case 15:e.next=18;break;case 17:a===w.a.OFFICE_EDITOR&&(M([D.OFFICE_EDITOR]),J(D.OFFICE_EDITOR));case 18:ae(h.a.getTotalPages(S));case 19:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){F(o,r,a,i,c,"next",e)}function c(e){F(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return e(),h.a.addEventListener("documentLoaded",e,void 0,S),function(){return h.a.removeEventListener("documentLoaded",e,S)}}),[S]),Object(r.useEffect)((function(){ue===w.a.OFFICE_EDITOR&&H(h.a.getDocument().getFilename())}),[x,ue]);var fe=function(){return t(c.a.closeElement(u.a.SAVE_MODAL))},de=function(){return ce("")},pe=L(Object(r.useState)(!1),2),he=pe[0],me=pe[1],ve=(ie||!he)&&U===C,ye="office"===W.extension||ue===w.a.OFFICE_EDITOR;return a.a.createElement(p.a,{onSwipedUp:fe,onSwipedDown:fe,preventDefaultTouchmoveEvent:!0},a.a.createElement(f.a,{locked:x},a.a.createElement("div",{className:v()("SaveModal",{open:x,closed:!x}),"data-element":u.a.SAVE_MODAL},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-text"},n("saveModal.saveAs")),a.a.createElement(s.a,{className:"close-button",onClick:fe,img:"ic_close_black_24px",title:"action.close"})),a.a.createElement("div",{className:"modal-body"},a.a.createElement("div",{className:"title"},n("saveModal.general")),a.a.createElement("div",{className:"input-container"},a.a.createElement("div",{className:"label"},n("saveModal.fileName")),a.a.createElement("input",{type:"text",placeholder:n("saveModal.fileName"),value:R,onChange:function(e){var t;return H(null==e||null===(t=e.target)||void 0===t?void 0:t.value)}})),a.a.createElement("div",{className:"input-container"},a.a.createElement("div",{className:"label"},n("saveModal.fileType")),a.a.createElement(y.a,{items:A.map((function(e){return e.label})),onClickItem:function(e){J(A.find((function(t){return t.label===e}))),e===D.OFFICE.label&&Y(I)},currentSelectionKey:W.label})),!ye&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title"},n("saveModal.pageRange")),a.a.createElement("form",{className:"radio-container",onChange:function(e){e.target.classList.contains("page-number-input")||(Y(e.target.value),ie&&(me(!1),de()))},onSubmit:function(e){return e.preventDefault()}},a.a.createElement(d.a,{checked:U===I,radio:!0,name:"page-range-option",label:n("saveModal.all"),value:I}),a.a.createElement(d.a,{checked:U===_,radio:!0,name:"page-range-option",label:n("saveModal.currentPage"),value:_}),a.a.createElement(d.a,{checked:U===C,radio:!0,name:"page-range-option",label:n("saveModal.specifyPage"),value:C}),U===C&&a.a.createElement("div",{className:v()("page-number-input-container",{error:!!ie})},a.a.createElement(g.a,{selectedPageNumbers:$,pageCount:re,onBlurHandler:q,onSelectedPageNumbersChange:function(){he||me(!0),de()},placeHolder:b.a,onError:function(){return ce(n("saveModal.pageError")+re)}}),ie&&a.a.createElement("div",{className:"error-text"},ie))),a.a.createElement("div",{className:"title"},n("saveModal.properties")),a.a.createElement("div",{className:"checkbox-container"},a.a.createElement(d.a,{checked:Q,name:"include-annotation-option",label:n("saveModal.includeAnnotation"),onChange:function(){return X(!Q)}}),a.a.createElement(d.a,{checked:ee,name:"include-comment-option",label:n("saveModal.includeComments"),onChange:function(){return te(!ee)}})))),a.a.createElement("div",{className:"footer"},a.a.createElement("button",{disabled:ve,onClick:function(){var n;n=U===C?null!=$&&$.length?$:[h.a.getCurrentPage(S)]:U===_||U===N?[h.a.getCurrentPage(S)]:Object(O.range)(1,h.a.getTotalPages(S)+1,1),Object(E.a)(t,{includeAnnotations:Q,includeComments:ee,filename:R||"untitled",downloadType:W.extension,pages:n,store:e},S),ue===w.a.OFFICE_EDITOR&&fe()}},n("saveModal.save")))))))};t.default=P}}]);
//# sourceMappingURL=14.chunk.js.map